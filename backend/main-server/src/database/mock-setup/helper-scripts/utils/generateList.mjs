
/*
  Generate a list of NON-UNIQUE items from a source list.
*/

export default function generateList(sourceList, numberOfItems) {

  const generatedList = [];

  for (let i = 0; i < numberOfItems; i++) generatedList.push(sourceList[Math.floor(Math.random() * sourceList.length)]);

  return generatedList;
}