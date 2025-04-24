{
  /* ---------------------------- STRING CONVERSION --------------------------- */
  // Mengubah suatu tipe data ke dalam bentuk string
  console.log(String(0));
  console.log(String(99));
  console.log(String(null));
  console.log(String([1, 2, 3]));
  console.log(String({ name: "Nadhif" }));

  /* --------------------------- NUMMBER CONVERSION --------------------------- */
  // mengubah suatu tipe data ke dalam bentuk number
  console.log(Number("10000"));
  console.log(Number("10000ABC"));
  console.log(Number(" "));

  console.log(parseInt("10000"));
  console.log(parseInt("+10000"));
  console.log(parseInt);

  /* --------------------------- BOOLEAN CONVERSION --------------------------- */
  console.log(Boolean(0));
  console.log(Boolean(1));
  console.log(Boolean(2));
  console.log(Boolean(-2));

  console.log(Boolean(" "));
  console.log(Boolean("A"));
  console.log(Boolean("AB"));
  console.log(Boolean("ABC"));

  console.log(Boolean(null));
  console.log(Boolean(undefined));
  console.log(Boolean({}));
  console.log(Boolean([1, 2, 3]));

  /* ------------------------- Truthy vs Falsy values ------------------------- */
  // Falsy
  console.log(Boolean(false));
  console.log(Boolean(0));
  console.log(Boolean(-0));
  console.log(Boolean(" "));
  console.log(Boolean(null));
  console.log(Boolean(undefined));
  console.log(Boolean(NaN));

  // Truhty - All other available data
}
