
// part 'A'
let guestArr : string[] = ["Bilal", "Irfan", "Amjad"];
let canNotAttend : string = "Sultan";
//console.log(`${canNotAttend} + " " "can not attend a dinner"`);

// part 'B'
let newGuest : string = "Aryan";
guestArr [guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);

// part 'c'
guestArr.map((items)=>
console.log(`Dear ${items}, you are invited to the dinner.`));