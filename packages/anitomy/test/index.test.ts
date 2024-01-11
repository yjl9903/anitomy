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
