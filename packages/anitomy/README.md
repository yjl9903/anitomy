# Anitomy

[![version](https://img.shields.io/npm/v/anitomy?label=Anitomy)](https://www.npmjs.com/package/anitomy)
[![GitHub License](https://img.shields.io/github/license/yjl9903/anitomy)](https://github.com/yjl9903/anitomy/blob/main/LICENSE)
[![CI](https://github.com/yjl9903/anitomy/actions/workflows/ci.yml/badge.svg)](https://github.com/yjl9903/anitomy/actions/workflows/ci.yml)

A TypeScript port of [Anitomy](https://github.com/erengy/anitomy) inspired by [AnitomySharp](https://github.com/tabratton/AnitomySharp). All credits to [erengy](https://github.com/erengy) for the actual library.

More features:

+ Implemented without any dependencies, which supports run in Node.js, Deno, Bun, and Browser
+ Optimized for parsing Chinese torrent name from [動漫花園](https://share.dmhy.org/)

> 👷‍♂️ Still work in progress.

## Installation

```bash
npm i anitomy
```

## Usage

```ts
import { parse } from 'anitomy'

const info = parse(`[Lilith-Raws] 熊熊勇闖異世界 PUNCH！ / Kuma Kuma Kuma Bear S02 - 02 [Baha][WEB-DL][1080p][AVC AAC][CHT][MP4]`)
```

```js
{
  "audio": {
    "term": "AAC",
  },
  "episode": {
    "number": 2,
    "numberAlt": undefined,
    "title": undefined,
  },
  "file": {
    "checksum": undefined,
    "extension": "MP4",
    "name": "[Lilith-Raws] 熊熊勇闖異世界 PUNCH！ / Kuma Kuma Kuma Bear S02 - 02 [Baha][WEB-DL][1080p][AVC AAC][CHT][MP4]",
  },
  "language": "CHT",
  "month": undefined,
  "release": {
    "group": "Lilith-Raws",
    "version": undefined,
  },
  "season": "2",
  "source": "WEB-DL",
  "subtitles": undefined,
  "title": "熊熊勇闖異世界 PUNCH！ / Kuma Kuma Kuma Bear S02",
  "type": undefined,
  "video": {
    "resolution": "1080p",
    "term": "AVC",
  },
  "volume": {
    "number": undefined,
  },
  "year": undefined,
}
```

## Who is using?

+ [AnimeSpace](https://github.com/yjl9903/AnimeSpace): Keep following your favourite anime
+ [AnimeGarden](https://github.com/yjl9903/AnimeGarden): 動漫花園 3-rd party [mirror site](https://garden.onekuma.cn/) and API endpoint

## License

MIT License © 2023 [XLor](https://github.com/yjl9903)
