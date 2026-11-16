import test from 'node:test';
import assert from 'node:assert/strict';
import {PRACTICE_BANK, drawPracticeQuestion} from '../src/practice-bank.mjs';
import {newRound, eatAnswer} from '../src/feeding.mjs';
import {validatePractice, restorePracticeRound, storePracticeRound, recordPracticeAttempt} from '../src/practice-progress.mjs';

const bank = PRACTICE_BANK[0];

test('available fish cannot override the requested uncompleted skill', () => {
  const other = bank.find(q => q.skill === 'opposite');
  const question = drawPracticeQuestion(bank, [], 'axis', () => 0, other.options);
  assert.equal(question.skill, 'axis');
});

test('unanswered questions and partial rounds survive serialization without counting as answered', () => {
  let state = validatePractice(null, bank);
  let round = newRound('axis');
  round.question = bank[0];
  storePracticeRound(state, round);
  state = validatePractice(JSON.parse(JSON.stringify(state)), bank);
  round = restorePracticeRound(state, bank, 0, 0);
  assert.equal(round.question.id, bank[0].id);
  assert.deepEqual(state.seen, []);
  const result = eatAnswer(round, round.question.answer);
  recordPracticeAttempt(state, result.question, result.correct);
  storePracticeRound(state, round);
  const restored = restorePracticeRound(validatePractice(state, bank), bank, round.score, 0);
  assert.equal(restored.eaten, 1);
  assert.equal(restored.correct, 1);
  assert.equal(restored.score, 1);
  assert.deepEqual(state.seen, [bank[0].id]);
});

test('wrong history remains traceable after a successful retry', () => {
  const state = validatePractice(null, bank);
  recordPracticeAttempt(state, bank[0], false);
  recordPracticeAttempt(state, bank[0], true);
  assert.deepEqual(state.wrong, [bank[0].id]);
  assert.deepEqual(state.answers[bank[0].id], {attempts: 2, correct: 1, lastCorrect: true});
});

test('legacy records are retained and malformed records cannot restore invalid questions or counts', () => {
  const legacy = validatePractice({seen: [bank[0].id], wrong: [bank[0].id]}, bank);
  assert.deepEqual(legacy.seen, [bank[0].id]);
  assert.deepEqual(legacy.wrong, [bank[0].id]);
  const invalid = validatePractice({seen: ['missing'], wrong: {}, pending: bank[0].id,
    round: {skill: 'axis', eaten: 1, correct: 8}, answers: {[bank[0].id]: {attempts: -1}}}, bank);
  assert.deepEqual(invalid.seen, []);
  assert.equal(invalid.pending, null);
  assert.equal(invalid.round, null);
  assert.deepEqual(invalid.answers, {});
});

test('completed rounds restore as completed and do not replay their last answer', () => {
  const state = validatePractice({round: {skill: 'axis', eaten: 10, correct: 7}, pending: bank[0].id}, bank);
  const round = restorePracticeRound(state, bank, 4, 0);
  assert.equal(round.complete, true);
  assert.equal(round.question, null);
  assert.equal(eatAnswer(round, 0), null);
});

test('all first-sea keys agree with independent position, opposite and distance calculations', () => {
  for (const q of bank) {
    let expected;
    const values = [...q.prompt.matchAll(/−?\d+/g)].map(match => Number(match[0].replace('−', '-')));
    if (q.skill === 'axis') {
      if (q.family === 0) expected = values[0] + values[1];
      if (q.family === 1) expected = values[0] - values[1];
      if (q.family === 2) expected = Math.abs(values[2] - values[1]) * values[0];
    }
    if (q.skill === 'opposite') {
      if (q.family === 0) expected = `${-values[0]}/${values[1]}`;
      if (q.family === 1) expected = -values[0];
      if (q.family === 2) expected = values[0];
    }
    if (q.skill === 'distance') {
      if (q.family === 0) expected = Math.abs(values[0] - values[1]);
      if (q.family === 1) expected = -Math.abs(values[0]) + values[1];
      if (q.family === 2) expected = -values[0];
    }
    assert.equal(q.answer, expected, q.prompt);
  }
});
