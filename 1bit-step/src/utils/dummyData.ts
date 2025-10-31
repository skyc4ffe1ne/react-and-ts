export function dummyData() {
  let user = {
    stats: {
      strength: 5,
      discipline: 0,
      intelligence: 5,
      emotional: 4,
      social: 2,
      creativity: 6,
    },
    year: {
      "2024": {
        jan: 150,
        feb: 300,
        mar: 800,
        apr: 1200,
        may: 650,
        jun: 400,
        jul: 800,
        aug: 200,
        sep: 100,
        oct: 700,
        nov: 900,
        dec: 1000,
      },
      "2025": {
        jan: 200,
        feb: 150,
        mar: 450,
        apr: 604,
        may: 900,
        jun: 800,
        jul: 300,
        aug: 400,
        sep: 300,
        oct: 20,
        nov: 0,
        dec: 0,
      },
    },
    week: {
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      sat: false,
      sun: false,
    },
  };

  const userJSON = JSON.stringify(user);
  localStorage.setItem("user", userJSON);
}
