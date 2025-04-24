{
  /* ------------------------------ FOR LET LOOP ------------------------------ */
  /*
    for ([kondisi yang menentukan sampai kapan loop berjalan]){
    [algoritma yang aakan di jalankan selma loop masih aktif]
    }
    */
  for (let i = 0; i < 3; i++) {
    console.log("Hello");
  }

  /* ------------------------------- WHILE LOOP ------------------------------- */
  //
  //   while (true) {
  //     console.log("hei");
  //   }

  let i = 0;

  while (i < 3) {
    console.log("hello");
    i++;
  }

  while (false) {
    console.log("Hallo");
  }

  /* ------------------------------ DO WHILE LOOP ----------------------------- */
  let x = 0;
  do {
    console.log("Salam");
    x++;
  } while (x < 3);

  do {
    console.log("Salam");
  } while (false);
}
