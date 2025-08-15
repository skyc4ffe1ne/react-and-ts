export function calculateLines(maxRow: number, arr: Array<string>) {
  let finalString = "";
  for (let i = 0; i < arr.length; i += maxRow) {
    finalString += arr.slice(i, i + maxRow).join("") + "\n";
  }
  return finalString;
}

export function getChar(lightness: number): string {
  if (lightness < 25) return "@";
  else if (lightness < 50) return "#";
  else if (lightness < 75) return "%";
  else if (lightness < 100) return "+";
  else if (lightness < 125) return "=";
  else if (lightness < 150) return "-";
  else if (lightness < 175) return ":";
  else if (lightness < 200) return ".";
  else return " ";
}
