const tap = require("tap")
const fs = require("fs")
const { parse } = require("./xspf.js")

tap.test("with no content", (t) => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?><playlist version="1" xmlns="http://xspf.org/ns/0/"></playlist>`
	t.same(parse(xml).version, "1")
	t.end()
})

tap.test("with content", (t) => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<playlist version="1" xmlns="http://xspf.org/ns/0/">
<title>SpongeBob SquarePants Theme Song</title>
<beep>noop</beep>
  <trackList>
    <track><location>file:///music/song\_2.flac</location></track>
  </trackList>
</playlist>
`

	const wanted = {
		version: "1",
		xmlns: "http://xspf.org/ns/0/",
		playlist: {
			title: "SpongeBob SquarePants Theme Song",
			tracks: [{ location: "file:///music/song_2.flac" }]
		}
	}

	t.same(parse(xml), wanted)
	t.end()
})

tap.test("with playlist", (t) => {
	const wanted = `<?xml version="1.0" encoding="UTF-8"?>
<playlist version="1" xmlns="http://xspf.org/ns/0/">
<title>SpongeBob SquarePants Theme Song</title>
<creator>SpongeBob</creator>
<annotation>Theme Song</annotation>
<date>2005-01-08T17:10:47-05:00</date>
  <trackList>
    <track><location>file:///music/song\_1.ogg</location><creator>Another artist</creator><title>Nice song</title></track>
    <track><location>file:///music/song\_2.flac</location><title>Yet another masterpiece</title></track>
    <track><location>file:///music/song\_3.mp3</location><duration>612624</duration><album>Spongebob anthem</album></track>
  </trackList>
</playlist>
`

	t.same(parse(wanted).playlist.title, "SpongeBob SquarePants Theme Song")
	t.end()
})

tap.test("invalid xml", (t) => {
	const wanted = `<?xml version="1.0" encoding="UTF-8"?>
<playlist version="1" xmlns="http://xspf.org/ns/0/">
<title>SpongeBob SquarePants Theme Song</title>
<creator>SpongeBob</creator>

xxx
<annotation>Theme Song</annon>
<date>2005-01-08T17:10:47-05:00</date>
  <trackList>
    <track><location>file:///music/song1.ogg</location><creator>Michael Jackson</creator></track>
    <track><location>file:///music/song\_2.flac</location></track>
    <track''><location>file:///music/song\_3.mp3</location><duration>612624</duration></track>
  </trackList>
</playlist>
`

	t.throws(() => parse(wanted))
	t.end()
})
