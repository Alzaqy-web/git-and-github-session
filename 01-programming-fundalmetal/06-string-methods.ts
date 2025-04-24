{
  /* ---------------------------------- slice --------------------------------- */
  let message: string = "21 april is kartini day";
  let sliceResultOne: string = message.slice(12);
  let sliceResultTwo: string = message.slice(12, 9);

  console.log(sliceResultOne);
  console.log(sliceResultTwo);

  let score: number = 1000;
  //let sliceResultThree = score.slice();

  /* -------------------------- REPLICE & REPLICE ALL ------------------------- */
  let chat = "Hai ini nomor teleponku +6287778277159";
  // let replicePhonenumber1 = chat.replice("+6287778277159", "***");
  let replicePhonenumber2 = chat.replace(/\+62\d{9,11}/, "***");

  //console.log(replicePhonenumber1);
  console.log(replicePhonenumber2);

  /* ------------------------ TOUPPERCASE & TOLOWERCASE ----------------------- */
  let fullname = "Jonatan cristhie";
  let fullnameUpper = fullname.toUpperCase();
  //let fullnameLower = fullname.toLowercase();

  console.log(fullnameUpper);
  // console.log(fullnameLower);
  // con

  /* --------------------------------- CONCAT --------------------------------- */
  let greetings = "Hi";
  let firstName = "sharon";
  let middleName = "january";
  let lastName = "Middleton";

  // console.log ( 'Hi, Sheron january Middleleton'
  //    greetings.concat(",", firstName, " ", middleName, " ", latsName);

  /* ---------------------------------- TRIM ---------------------------------- */
  //let phonNumber = "  +62 087778277159 ";
  //  console.log(phoneNummber);
  // console.log()
}
/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
/* --------------------------------- METHOD --------------------------------- */
//Fungsi / fitur spesial yang ada di tiap tipe data`
