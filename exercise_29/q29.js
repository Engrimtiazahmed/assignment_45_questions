"use strict";
/* Question #29; Favorite Fruit:
               Make a array of your favorite fruits, and then write a series of independent if statements
               that check for certain fruits in your array.
         • Make a array of your three favorite fruits and call it favorite_fruits.
         • Write five if statements. Each should check whether a certain kind of fruit is in your array.
          If the fruit is in your array, the if block should print a statement, such as You really like bananas!
          
*/
let favFruits = ['Apple', 'Banana', 'Strawberry'];
if (favFruits.includes("Apple")) {
    console.log("You really like Apple !");
}
if (favFruits.includes("Banana")) {
    console.log("You really like Banana !");
}
if (favFruits.includes("Strawberry")) {
    console.log("You really like Strawberry !");
}
if (favFruits.includes("Orange")) {
    console.log("You really like Orange !");
}
if (favFruits.includes("Grapes")) {
    console.log("You really like Grapes Grapes!");
}
