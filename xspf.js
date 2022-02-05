var convert = require("xml-js");

const namespace = "http://xspf.org/ns/0/";
const version = "1";
const playlistEl = [
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
  "trackList",
];

function parse(raw) {
  if (!raw || typeof raw !== "string") throw new Error("no input");

  const parsed = convert.xml2js(raw, {
    compact: false,
  });

  if (!parsed.hasOwnProperty("declaration"))
    throw new Error(
      `XML declaration not found: <?xml version="1.0" encoding="UTF-8"?>`
    );

  if (parsed.elements.length === 0) throw new Error(`empty elements`);

  const root = parsed.elements[0];

  if (root["name"] !== "playlist") throw new Error("invalid element");

  const attr = root.attributes;

  if (attr.version !== version)
    throw new Error(
      `invalid xspf version: wanted ${version}, got ${attr.version}`
    );

  if (attr.xmlns !== namespace)
    throw new Error(
      `invalid xml namespace: wanted ${namespace}, got ${attr.namespace}`
    );

  let result = {
    version,
    xmlns: namespace,
  };

  if (!root.elements) {
    result.playlist = {};
    return result;
  }

  root.elements.forEach((el) => {
    if (el.type !== "element") throw new Error("beep");

    if (playlistEl.indexOf(el.name) !== -1) {
      if (el.name === "trackList") {
        console.log(el.elements);
      }
      result[el.name] = el.elements[0].text;
    }
  });

  return result;
}

module.exports = parse;
