export function nextLine(lastLine: string, size: number, defaultText: string) {
  const getChars = lastLine.trim().split(" ");
  console.log("Chars:", getChars);
  const lastChar = getChars.at(-1);
  console.log("lastChar:", lastChar);
  const indexLastChar = defaultText.indexOf(lastChar);
  console.log("IndexLastChar", indexLastChar);
  const restText = defaultText.slice(indexLastChar + lastChar?.length);

  const splitInChars = restText.split(" ");

  let countWords = 0;
  let nextLine: string[] = [];
  for (let i = 0; i < splitInChars.length; i++) {
    if (countWords <= size) {
      nextLine = [...nextLine, splitInChars[i]];
    } else {
      break;
    }
    countWords += splitInChars[i].length;
  }

  return nextLine.join(" ").trim() + " ";
}
