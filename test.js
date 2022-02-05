const tap = require("tap");
const fs = require("fs");
const parse = require("./xspf.js");

tap.test("basic, no content", (t) => {
	const wanted = `<?xml version="1.0" encoding="UTF-8"?><playlist version="1" xmlns="http://xspf.org/ns/0/"></playlist>`;
	t.same(parse(wanted).version, "1");
	t.end();
});

tap.test("with playlist", (t) => {
	const wanted = `<?xml version="1.0" encoding="UTF-8"?>
<playlist version="1" xmlns="http://xspf.org/ns/0/">
<title>SpongeBob SquarePants Theme Song</title>
<creator>SpongeBob</creator>
<annotation>Theme Song</annotation>
<date>2005-01-08T17:10:47-05:00</date> 
  <trackList>
    <track><location>file:///music/song\_1.ogg</location></track>
    <track><location>file:///music/song\_2.flac</location></track>
    <track><location>file:///music/song\_3.mp3</location></track>
  </trackList>
</playlist>
`;

	t.same("SpongeBob SquarePants Theme Song", parse(wanted).title);
	t.end();
});