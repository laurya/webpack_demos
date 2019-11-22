export function getAvg(scores) {
    return getTotalScore(scores) / scores.length;
  }
  
  function getTotalScore(scores: number[]) {
    return scores.reduce((score, count) => score + count);
  }

