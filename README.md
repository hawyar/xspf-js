## xspf (“spiff”)

![tests](https://github.com/hawyar/node-lib-starter/actions/workflows/test.yml/badge.svg)

> XML format for sharing playlists (https://xspf.org/spec)

## Usage

### Install

```bash

npm i xspf-js
```

### Parse

```js
const xspf = require("xspf-js")

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<playlist version="1" xmlns="http://xspf.org/ns/0/">
<title>SpongeBob SquarePants Theme Song</title>
  <trackList>
    <track><location>file:///music/song\_2.flac</location></track>
  </trackList>
</playlist>
`

const result = xspf.parse(xml)

// result:
// {
//   "version": "1",
//   "xmlns": "http://xspf.org/ns/0/",
//   "playlist": {
//     "title": "SpongeBob SquarePants Theme Song",
//     "trackList": [
//       {
//         "location": "file:///music/song_2.flac"
//       }
//     ]
//   }
// }
```
