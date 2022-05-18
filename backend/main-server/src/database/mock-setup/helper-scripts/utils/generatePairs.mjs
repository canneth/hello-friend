
/*
  Generate [a, b] pairs such that a !== b.
*/

export default function generatePairs(aSourceList, bSourceList, numberOfPairsToGenerate, options = { noDuplicatesWithinEachPair: true, unique: true }) {

  const generatedPairsList = [];

  const uniquePairStringList = [];

  for (let i = 0; i < numberOfPairsToGenerate; i++) {
    let a = null;
    let b = null;
    let candidateString = null;
    let criteriaSatisfied = false;
    while (!criteriaSatisfied) {
      a = aSourceList[Math.floor(Math.random() * aSourceList.length)];
      const processedBSourceList = options.noDuplicatesWithinEachPair ? bSourceList.filter(x => x !== a) : bSourceList;
      b = processedBSourceList[Math.floor(Math.random() * processedBSourceList.length)];

      criteriaSatisfied = true;

      if (options.unique) {
        candidateString = `${a} ${b}`;
        if (uniquePairStringList.find(x => x === candidateString)) criteriaSatisfied = false;
      }
    }
    uniquePairStringList.push(candidateString);
    generatedPairsList.push([a, b]);
  }

  return generatedPairsList;
}