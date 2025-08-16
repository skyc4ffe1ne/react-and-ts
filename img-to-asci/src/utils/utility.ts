// $@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI;:,"^`'. (most accurate)
//[0, 0.0751, 0.0829, 0.0848, 0.1227, 0.1403, 0.1559, 0.185, 0.2183, 0.2417, 0.2571, 0.2852, 0.2902, 0.2919, 0.3099, 0.3192, 0.3232, 0.3294, 0.3384, 0.3609, 0.3619, 0.3667, 0.3737, 0.3747, 0.3838, 0.3921, 0.396, 0.3984, 0.3993, 0.4075, 0.4091, 0.4101, 0.42, 0.423, 0.4247, 0.4274, 0.4293, 0.4328, 0.4382, 0.4385, 0.442, 0.4473, 0.4477, 0.4503, 0.4562, 0.458, 0.461, 0.4638, 0.4667, 0.4686, 0.4693, 0.4703, 0.4833, 0.4881, 0.4944, 0.4953, 0.4992, 0.5509, 0.5567, 0.5569, 0.5591, 0.5602, 0.5602, 0.565, 0.5776, 0.5777, 0.5818, 0.587, 0.5972, 0.5999, 0.6043, 0.6049, 0.6093, 0.6099, 0.6465, 0.6561, 0.6595, 0.6631, 0.6714, 0.6759, 0.6809, 0.6816, 0.6925, 0.7039, 0.7086, 0.7235, 0.7302, 0.7332, 0.7602, 0.7834, 0.8037, 0.9999]
//[0, 19, 21, 22, 31, 36, 40, 47, 56, 62, 66, 73, 74, 74, 79, 81, 82, 84, 86, 92, 92, 94, 95, 96, 98, 100, 101, 102, 102, 104, 104, 105, 107, 108, 108, 109, 110, 110, 112, 112, 113, 114, 114, 115, 116, 117, 118, 118, 119, 119, 120, 123, 124, 126, 126, 127, 140, 142, 142, 143, 143, 143, 144, 147, 147, 148, 150, 152, 153, 154, 154, 155, 156, 165, 167, 168, 169, 171, 172, 173, 174, 177, 179, 181, 184, 186, 187, 194, 200, 205, 255]

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

//
//
// TODO: Try do this
// export function getAccurateChar(lightness: number): string {
//  const chars = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI;:,\"^`'\";
// }
//

export function getAscii(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  flagColor: boolean,
  maxRow: number,
): Array<string> {
  let asciiCharArr = [];
  let temp = maxRow;
  let count = 0;
  const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const preR = 0.2126;
  const preG = 0.7152;
  const preB = 0.0722;
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    let lightness = preR * r + preG * g + preB * b;
    if (flagColor) {
      asciiCharArr.push(
        `<span style="color:rgb(${r},${g},${b})">${getChar(lightness)}</span>`,
      );
    } else {
      asciiCharArr.push(getChar(lightness));
    }

    count++;
    if (maxRow === count && flagColor) {
      asciiCharArr.push("</br>");
      maxRow += temp;
    } else if (maxRow === count) {
      asciiCharArr.push("\n");
      maxRow += temp;
    }
  }
  return asciiCharArr;
}
