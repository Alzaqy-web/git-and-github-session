{
  /* -------------------------------------------------------------------------- */
  /*                                 IF STATEMEN                                */
  /* -------------------------------------------------------------------------- */

  const age: number = 19;

  //   1. kondisi menggunakan comparision - Dilihat hasil perbandingannya
  if (age >= 17) {
    console.log("Plase enter");
  }

  //   2. Single value - Diubah nilai valuennya ke dalam boolean.
  if ("a") {
    console.log("Show!");
  }
}

/* ----------------------------- ELSE SATTEMENT ----------------------------- */
if (10 >= 5) {
  console.log("Hero");
} else {
  console.log("Aduh");
}

/* --------------------------------- ELSE IF -------------------------------- */
let president: string = "prabowo";

if (president === "prabowo") {
  console.log("Prabowo presiden Indonesia");
} else if (president === "Gus Dur") {
  console.log("Gus Dur president tahun lau");
} else if (president === "Megawati") {
  console.log("Membara");
} else {
  console.log("Siapa president Indonesia");
}

/* ----------------------------- NESTED IF ELSE ----------------------------- */
if (10 < 50) {
  if (20 > 10) {
    console.log("Here");
  }
}

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
