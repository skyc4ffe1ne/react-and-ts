export function splitTextIntoLine(text: string, size: number) {
  const splitInChars = text.split(" ");
  let countWords = 0;
  let firstLine: string[] = [];
  let secondLine: string[] = [];
  let thirdLine: string[] = [];
  for (let i = 0; i < splitInChars.length; i++) {
    if (countWords <= size) {
      firstLine = [...firstLine, splitInChars[i]];
    } else if (countWords > size && countWords < size * 2) {
      secondLine = [...secondLine, splitInChars[i]];
    } else if (countWords >= size * 2 && countWords <= size * 3) {
      thirdLine = [...thirdLine, splitInChars[i]];
    } else {
      break;
    }
    countWords += splitInChars[i].length;
  }

  return {
    firstLine: firstLine.join(" ") + " ",
    secondLine: secondLine.join(" ") + " ",
    thirdLine: thirdLine.join(" ") + " ",
  };
}
