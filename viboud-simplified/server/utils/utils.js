/*  Format the current time, adding 0 if needed and the ":"
 * @params {string} time - The current time (4)
 * @params {string} type - The type of the time [hours,minute,seconds]
 * @returns formatted time. (04:)
 * */
export function formatTime(time, type = "not seconds") {
  if (type === "seconds") {
    return time.length === 1 ? "0" + time : time;
  } else {
    return time.length === 1 ? "0" + time + ":" : time + ":";
  }
}
