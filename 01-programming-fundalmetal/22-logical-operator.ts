{
  /* ----------------------------------- AND ---------------------------------- */
  // 1.perbbandingan di kedua sisi harus sama-sama TRUE agar final manjadi TRUE
  // true && true -> true
  // true && false -> false
  // false && false -> false
  console.log(10 > 5 && 5 < 1);
  console.log(10 > 5 && 5 > 1);
  console.log(10 > 5 && 5 > 1 && 1 < 1);

  /* ------------------------------------ R ----------------------------------- */
  // cukup satu nilai TRUe untuk menjadoi TRUE
  // true && true -> true
  // true && false -> false
  // false && false -> false
  console.log(false);
  console.log();

  /* --------------------------------- ! NEGASI --------------------------------- */
  console.log(!false);
  console.log(!true);
  console.log(!10 > 5);
  console.log(!"a");
}
