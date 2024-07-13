"use strict";
// //  Tests for equality and inequality with strings
// let name_1 :string = "Kainat";
// let name_2 :string = "Kainat Akmal";
// let name_3 :string = "Kainat Abbasi";
// // part 1
// if(name_1 == name_2 && name_1 == name_3){
//     console.log("Names are Equal !!"); }
// else {
//     console.log("Names are not Equal !!");}
// // part 2
// if (name_1 != name_2){
//     console.log("names are equal");
// }
// // part 3
// // Tests using the lower case function
// if (name_1 != name_3){
//     console.log("names are in lower case");}
// // part 4
// let  num :number = 20;
// let num2 :number = 25;
// if(num ==20) {
//     console.log("you born in 2003");
// }
// if( num > num2 ){
//     console.log(`20 is lesser than ${num2}`);
// }
// let age : number = 18;
// let age_1 : number = 19;
// if (age >= 18){
//     console.log("You're Eligible for vote !");
// }else {
//     console.log("you're not eleigible !!");
// }
// // part 5
// let num3 : number = 5;
// let num4 : number = 10;
// let num5 : number = 15;
// if( num3 >= num4 && num3 >= num5){
//     console.log("5 is greater than 10 and 15"); }
// if(num4 == num3 || num4 != num5){
//     console.log("10 is greater than 5 and less than 15");}
// // part 6
// // Test whether an item is not in a array
// let country :string[] = ['Pakistan', 'china', 'india','turkey'];
// if (country.includes("Pakistan")){
//     console.log("Pakistan is in country list");
// }
// if (!country.includes("America")){
//     console.log("America is not include in country list")};
/* Question #24; More Conditional Tests:
                 You don’t have to limit the number of tests you create to 10. If you want to try more
                 comparisons, write more tests. Have at least one True and one False result for each
                  of the following:
            • Tests for equality and inequality with strings

            • Tests using the lower case function

            • Numerical tests involving equality and inequality, greater than and less than, greater
             than or equal to, and less than or equal to

            • Tests using "and" and "or" operators

            • Test whether an item is in a array

            • Test whether an item is not in a array
*/
// Equality and inequality with strings.
console.log("Testing equality with strings.");
// console.log("Hassaan" == "hassaan");// false
console.log("Sarim" === "Sarim"); // True
// test using lower case function.
console.log("test using lower case function.");
console.log("Abrar".toLowerCase() == "Abrar"); // false
console.log("Abrar".toLowerCase() == "abrar"); // true
//  Numerical Tests.
console.log("equality and inequality in numericals");
// console.log(5==4); false
console.log(8 == 8); // True
// greater than and less than.
console.log("Numerical test");
console.log(8 > 4); // true
console.log(8 < 4); //false
// greater than or equal to & less than equal to.
console.log("Numerical test");
console.log(10 >= 11); // false
console.log(10 <= 12); // true
// test using "and" and "or" operators.
console.log("test using && and || operators");
console.log(true && false); // false
console.log(true || false); // true
// test whether an item is in array.
let array = ["keyboard", "mouse", "PC"];
console.log(`Is CPU in array?`, array.includes("PC")); // true
// /test whethe an item is not include in array.
console.log("is CPU not in array", array.includes("CPU")); // false
