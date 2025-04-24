{
  /* ---------------------------------- EQUAL --------------------------------- */
  // 1. Loose equal ==
  console.log(1 == 1);
  console.log("1" == "1");
  // console.log( "1" == 1 )
  console.log(null == undefined);

  // 2. strict equal ===
  console.log(1 === 1);
  console.log("1" === "1");
  // console.log( "1" === 1 )
  console.log(null === undefined);

  /* -------------------------------- NOT EQUAL ------------------------------- */
  // 1. Loose negation  !=
  console.log(1 != 1);
  console.log("1" != "1");
  //console.log( "1" != 1 )
  console.log(null != undefined);

  // 2.Sting negation !==
  console.log(1 !== 1);
  console.log("1" !== "1");
  // console.log( "1" !== 1 )
  console.log(null !== undefined);

  /* ------------------------- // Greater & less then ------------------------- */
  console.log(0 > 5);
  console.log(0 < 5);
  console.log(0 < 0);

  /* --------------------------- Greater & less then or equal to -------------------------- */
  console.log(0 <= 0);
  console.log(0 <= 5);

  let health = 0;
  // if (health > )

  /* -------------------------------------------------------------------------- */
  /*                                    NOTES                                   */
  /* -------------------------------------------------------------------------- */
  // 1. Hasil dari camparison selalu berupa boolean
  // 2. perbedaan utama antara loose dan strict comparison ada di type converision
}
