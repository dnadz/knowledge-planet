import {newRound} from './feeding.mjs';

export function validatePractice(raw, bank) {
  const ids = new Set(bank.map(q => q.id));
  const validIds = values => [...new Set(Array.isArray(values) ? values.filter(id => ids.has(id)) : [])];
  const state = {
    version: 2,
    seen: validIds(raw?.seen),
    wrong: validIds(raw?.wrong),
    last: ids.has(raw?.last) ? raw.last : null,
    pending: ids.has(raw?.pending) ? raw.pending : null,
    answers: {},
    round: null,
  };
  for (const q of bank) {
    const answer = raw?.answers?.[q.id];
    if (Number.isSafeInteger(answer?.attempts) && answer.attempts > 0
        && Number.isSafeInteger(answer.correct) && answer.correct >= 0 && answer.correct <= answer.attempts
        && typeof answer.lastCorrect === 'boolean') {
      state.answers[q.id] = {attempts: answer.attempts, correct: answer.correct, lastCorrect: answer.lastCorrect};
    }
  }
  const round = raw?.round;
  if (bank.some(q => q.skill === round?.skill)
      && Number.isInteger(round.eaten) && round.eaten >= 0 && round.eaten <= 10
      && Number.isInteger(round.correct) && round.correct >= 0 && round.correct <= round.eaten) {
    state.round = {skill: round.skill, eaten: round.eaten, correct: round.correct};
  }
  if (state.pending && (!state.round || state.round.eaten === 10
      || bank.find(q => q.id === state.pending).skill !== state.round.skill)) state.pending = null;
  return state;
}

export function restorePracticeRound(state, bank, score, stage) {
  const round = newRound(state.round?.skill || bank[0].skill, score, 0, stage);
  if (state.round) {
    round.eaten = state.round.eaten;
    round.correct = state.round.correct;
    round.complete = round.eaten === 10;
    round.question = bank.find(q => q.id === state.pending) || null;
  }
  return round;
}

export function storePracticeRound(state, round) {
  state.round = {skill: round.skill, eaten: round.eaten, correct: round.correct};
  state.pending = round.question?.id || null;
  if (state.pending) state.last = state.pending;
}

export function recordPracticeAttempt(state, question, correct) {
  if (!state.seen.includes(question.id)) state.seen.push(question.id);
  if (!correct && !state.wrong.includes(question.id)) state.wrong.push(question.id);
  const answer = state.answers[question.id] || {attempts: 0, correct: 0, lastCorrect: false};
  state.answers[question.id] = {
    attempts: answer.attempts + 1,
    correct: answer.correct + Number(correct),
    lastCorrect: correct,
  };
}
