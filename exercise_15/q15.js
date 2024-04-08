"use strict";
// //question no# 14
// let guest : string [] = ['Nayab', 'Javeria', 'Zainab'];
// guest.map((items) => console.log(`Dear ${items} ,you're invited to the dinner`));
// part 'A'
let guestArr = ["Bilal", "Irfan", "Amjad"];
let canNotAttend = "Sultan";
//console.log(`${canNotAttend} + " " "can not attend a dinner"`);
// part 'B'
let newGuest = "Aryan";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
// part 'c'
guestArr.map((items) => console.log(`Dear ${items}, you are invited to the dinner.`));
