import { describe, it, expect } from 'vitest';

import { parse } from '../src';

import { other, fails } from './testcase';

describe('Other filenames', () => {
  for (const filename of other) {
    it(`should parse ${filename}`, () => {
      const info = parse(filename);
      expect(info).toMatchSnapshot();
      expect(info?.title).toBeTruthy();
    });
  }

  for (const filename of fails) {
    it(`should parse not ${filename}`, () => {
      const info = parse(filename);
      expect(info).toMatchSnapshot();
      expect(info?.title).toBeFalsy();
    });
  }
});

// describe.only('test', () => {
//   it.only('should parse', () => {
//     const info = parse(
//       `[ANi] 25jigen no Ririsa / 2.5 次元的誘惑 - 03 [1080P][Baha][WEB-DL][AAC AVC][CHT][MP4]`
//     );
//     expect(info).toMatchInlineSnapshot(`
//       {
//         "audio": {
//           "term": "AAC",
//         },
//         "episode": {
//           "number": 3,
//           "numberAlt": undefined,
//           "title": undefined,
//         },
//         "file": {
//           "checksum": undefined,
//           "extension": "MP4",
//           "name": "[ANi] 25jigen no Ririsa / 2.5 次元的誘惑 - 03 [1080P][Baha][WEB-DL][AAC AVC][CHT][MP4]",
//         },
//         "language": "CHT",
//         "month": undefined,
//         "release": {
//           "group": "ANi",
//           "version": undefined,
//         },
//         "season": undefined,
//         "source": "WEB-DL",
//         "subtitles": undefined,
//         "title": "25jigen no Ririsa / 2.5 次元的誘惑",
//         "type": undefined,
//         "video": {
//           "resolution": "1080P",
//           "term": "AVC",
//         },
//         "volume": {
//           "number": undefined,
//         },
//         "year": undefined,
//       }
//     `);
//   });
// });
