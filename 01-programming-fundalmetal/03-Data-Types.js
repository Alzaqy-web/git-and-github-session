/* -------------------------------------------------------------------------- */
/*                                  // STRING                                 */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                                  PRIMITIVE                                 */
/* -------------------------------------------------------------------------- */
// let message ="!@#$%^&*()";
// let anotherMessage = "!@#$%^&*()";
// let anotherMessage = "!@#$%^&*()";
// let phoneNamber ="087778277159";

/* -------------------------------- // NUMBER ------------------------------- */
let age = 70;
let score = 100;
let points = 50;

/* -------------------------------- // BOLEAN ------------------------------- */
let isloding = true;
let gender = null;

/* ------------------------------ // UNDEFINED ------------------------------ */
let fullName = null;
fullName = undefined;

/* -------------------------------------------------------------------------- */
/*                               //NON PRIMITIVE                              */
/* -------------------------------------------------------------------------- */

/* -------------------------------- //OBJECT -------------------------------- */
// 1.Menyimpan banyak data yang saling berkaitan
// 2. Harus dibungkus dengan {}
// 3. Setiap property-nya harus terdiri dari key: value pair
// 4. Untuk memisakan property di dalam suatu object, gunakan "," bukan ";"

let name = "john";
console.log(name);
// let stret = "jl. Setiabudi";
// let city ="JAkarta Selatan";
// let email ="john@gmail.com";

let userProfile = {
  name: "john",
  street: "Jakarta Selatan",
  ElementInternals: "John@gmail.com",
};

console.log(userProfile);
console.log(userProfile.age);

/* -------------------------------- // ARRRAY ------------------------------- */
// 1. Menyimpan banyak data yang berurutan
// 2. Harus dibungkus dengan []

let playList = ["stelan cuek", "Nenekku Pelawahanku", "indonesia raya"];
console.log(playList[2]);
console.log(playList[3]);

let scores = [10, 20, 50, 100, 30];
console.log(scores[3]);

let randomArray = ["Nadhif", 50, null, undefined, {}, [1, 2, 3]];
console.log(randomArray[5]);
console.log(randomArray[5][2]);

let userList = [{ name: "john" }, { name: "jane" }, { name: "sumpto" }];
