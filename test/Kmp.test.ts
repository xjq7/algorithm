import assert from 'assert';
import Kmp from '../Kmp/Kmp';
import Plain from '../Kmp/Plain';
import { randomAlpha } from '../Kmp/utils';

describe('Kmp.ts', function () {
  let test = [randomAlpha(2000), randomAlpha(5)];
  it('test1 should to be true', function () {
    assert.equal(Kmp(test[0], test[1]), test[0].indexOf(test[1]));
  });
  test = [randomAlpha(20000), randomAlpha(5)];
  it('test2 should to be true', function () {
    assert.equal(Kmp(test[0], test[1]), test[0].indexOf(test[1]));
  });
  test = [randomAlpha(200000), randomAlpha(10)];
  it('test3 should to be true', function () {
    assert.equal(Kmp(test[0], test[1]), test[0].indexOf(test[1]));
  });
  test = ['abcdefghijkdsajafnasfnasjfasjfnasfakfasjj', 'jj'];
  it('test4 should to be false', function () {
    assert.notEqual(Kmp(test[0], test[1]), -1);
  });
});

describe('Plain.ts', function () {
  let test = [randomAlpha(2000), randomAlpha(5)];
  it('test1 should to be true', function () {
    assert.equal(Plain(test[0], test[1]), test[0].indexOf(test[1]));
  });
  test = [randomAlpha(20000), randomAlpha(5)];
  it('test2 should to be true', function () {
    assert.equal(Plain(test[0], test[1]), test[0].indexOf(test[1]));
  });
  test = [randomAlpha(200000), randomAlpha(10)];
  it('test3 should to be true', function () {
    assert.equal(Plain(test[0], test[1]), test[0].indexOf(test[1]));
  });
  test = ['abcdefghijkdsajafnasfnasjfasjfnasfakfasjj', 'jj'];
  it('test4 should to be false', function () {
    assert.notEqual(Plain(test[0], test[1]), -1);
  });
});
