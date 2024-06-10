
function calculateTotalScore(arrayOfScores){
    let [firstMatchScore, secondMatchScore, thirdMatchScore] = arrayOfScores;

    let totalScore = firstMatchScore+secondMatchScore+thirdMatchScore;
    return totalScore;
}

let totalScore= calculateTotalScore(25,55,35);

console.log(totalScore);