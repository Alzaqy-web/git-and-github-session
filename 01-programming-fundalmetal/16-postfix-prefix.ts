{
  /* --------------------------------- POSTFIX -------------------------------- */
  // Operator incerment / decrement ada SESUADAH variable
  //nilai variable baru berubah di baris kode selanjutnya
  let score: number = 10;
  score++;
  console.log(score);
  console.log(score++);
  console.log(score);
  let finalScore = score++;
  console.log(finalScore);

  /* --------------------------------- PREFIX --------------------------------- */
  //Operator increment / decremen ada  SEBELUM variable
  //Nilai variable akan langsung berubah di baris itu, saat itu juga
  let point: number = 10;
  point++;
  console.log(point);
  console.log(++point);
  console.log(point);
  let finalPoint = ++point;
  console.log(finalPoint);
}
