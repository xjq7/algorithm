import assert from 'assert';
import Kmp from '../Kmp/Kmp';
import Plain from '../Kmp/Plain';
import { randomAlpha } from '../Kmp/utils';

const test1 = [randomAlpha(2000), randomAlpha(5)];
const test2 = [randomAlpha(300000, 1), randomAlpha(5, 1) + 'b'];
const test3 = [randomAlpha(200000, 1), randomAlpha(50, 1) + 'b'];
const test4 = ['abcdefghijkdsajafnasfnasjfasjfnasfakfasjj', 'jj'];

describe('Kmp.ts', function () {
  it('test1 should to be true', function () {
    assert.equal(Kmp(test1[0], test1[1]), test1[0].indexOf(test1[1]));
  });

  it('test2 should to be true', function () {
    assert.equal(Kmp(test2[0], test2[1]), test2[0].indexOf(test2[1]));
  });
  it('test3 should to be true (子串循环串多)', function () {
    assert.equal(Kmp(test3[0], test3[1]), test3[0].indexOf(test3[1]));
  });
  it('test4 should to be false', function () {
    assert.notEqual(Kmp(test4[0], test4[1]), -1);
  });
});

describe('Plain.ts', function () {
  it('test1 should to be true', function () {
    assert.equal(Plain(test1[0], test1[1]), test1[0].indexOf(test1[1]));
  });

  it('test2 should to be true', function () {
    assert.equal(Plain(test2[0], test2[1]), test2[0].indexOf(test2[1]));
  });
  it('test3 should to be true (子串循环串多)', function () {
    assert.equal(Plain(test3[0], test3[1]), test3[0].indexOf(test3[1]));
  });

  it('test4 should to be false', function () {
    assert.notEqual(Plain(test4[0], test4[1]), -1);
  });
});
