const convert = require("xml-js")

const namespace = "http://xspf.org/ns/0/"
const version = "1"

const tokens = [
  "title",
  "creator",
  "annotation",
  "info",
  "location",
  "identifier",
  "image",
  "date",
  "license",
  "attribution",
  "link",
  "meta",
  "extension",
  "duration",
  "trackList",
  "album",
  "trackNum"
]

function parse(raw) {
  if (!raw || typeof raw !== "string") throw new Error("no input")

  let parsed = {}

  try {
    parsed = convert.xml2js(raw, {
      compact: false,
      spaces: 4,
      trim: true,
      ignoreComment: true
    })
  } catch (err) {
    throw new Error("invalid xml")
  }

  if (!parsed.hasOwnProperty("declaration"))
    throw new Error(
      `XML declaration not found: <?xml version="1.0" encoding="UTF-8"?>`
    )

  if (parsed.elements.length === 0) throw new Error(`empty elements`)

  const root = parsed.elements[0]

  if (root["name"] !== "playlist") throw new Error("invalid element")

  const attr = root.attributes

  if (attr.version !== version)
    throw new Error(
      `invalid xspf version: wanted ${version}, got ${attr.version}`
    )

  if (attr.xmlns !== namespace)
    throw new Error(
      `invalid xml namespace: wanted ${namespace}, got ${attr.namespace}`
    )

  let result = {
    version,
    xmlns: namespace,
    playlist: {}
  }

  if (!root.elements) {
    return result
  }

  root.elements.forEach((el) => {
    if (el.type !== "element") {
      console.warn(`ignoring non-element: ${el.text}`)
      return
    }

    if (tokens.indexOf(el.name) === -1) {
      console.warn(`ignoring invalid token: ${el.name}`)
      return
    }

    if (el.name === "trackList") {
      const tracks = el.elements.map((track) => {
        const trackObj = {}
        track.elements.forEach((el) => {
          if (el.type !== "element") {
            console.warn(`ignoring non-element: ${el.text}`)
          }

          if (tokens.indexOf(el.name) === -1) return
          trackObj[el.name] = el.elements[0].text
        })
        return trackObj
      })
      // rename trackList to tracks
      result.playlist["tracks"] = tracks
      return
    }
    result.playlist[el.name] = el.elements[0].text
  })
  return result
}

module.exports = {
  parse
}
