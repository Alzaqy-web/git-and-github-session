// let message;  bikin variabel kosong
// message  = "i am hungey";  undrefiend
message = "i am hungry";
console.log("message"); // i am hungry

/* ------------------------------ let vs conts ------------------------------ */

let fullName;
fullName = "Ahmad Dhani";
fullName = "mulan jamila";
console.log("fullName");

const address = "Surdiman, jakarta selatan";
address = "palmerah, jakarta selatan";
console.log("address");

/*
1. const tidak boleh dikosongikan ketika pertama kali buat. let boleh
2. const  tidak boleh digantkan isinya. lett boleh
*/

/* --------------------------- //  VARIABLE NAMING -------------------------- */
/* let n4me$-* = "Faiz"; // error tidak noleh menggunakan symbol selain $ dan _
// let 4address  = "jakarta timur"; // error tidak boleh diawali angka
*/

//case sensitive
let student = "rafli";
let Student = "zaky";

//  let typeof = "My type"; // error tidak boleh pakai reserved keywords

// CASES
//camelcase
let studentProfile;

// Pascalcase
let StudentProfile;

// Snake_case
let student_Profile;
