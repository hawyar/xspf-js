## xspf

![tests](https://github.com/hawyar/node-lib-starter/actions/workflows/test.yml/badge.svg)

> XML format for sharing playlists (https://xspf.org/)

## Usage

### Install

```bash

npm i @hawyar/xspd
```

### Parse

```js
const xspf = require("xspf");
const result = xspf.parse("some raw xml input");

// result:
// {
// 	"version": "1",
// 	"xmlns": "http://xspf.org/ns/0/",
// 	"title": "SpongeBob SquarePants Theme Song",
// 	"creator": "SpongeBob",
// 	"annotation": "Theme Song",
// 	"identifier": "some_identifier",
// 	"date": "2005-01-08T17:10:47-05:00"
// }
```

see `example.xspf`
