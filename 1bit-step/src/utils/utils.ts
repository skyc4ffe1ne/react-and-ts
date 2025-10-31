export function getShortMont() {
  const date = new Date();
  let options = {
    month: "short",
  };
  let month = new Intl.DateTimeFormat("en-US", options).format(date);
  return month.toLowerCase();
}

export function getShortDay() {
  const date = new Date();
  let options = {
    weekday: "short",
  };
  let day = new Intl.DateTimeFormat("en-US", options).format(date);

  return day.toLowerCase();
}
