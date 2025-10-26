export function getShortMont() {
  const date = new Date();
  let options = {
    month: "short",
  };
  let month = new Intl.DateTimeFormat("en-US", options).format(date);
  return month.toLowerCase();
}

// export function getInitialYear(): StatsYear<string, Months> {
//   let a = new Date().getFullYear().toString();
//   return local[a];
// }
