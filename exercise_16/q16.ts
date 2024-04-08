
// // • Add one new guest to the beginning of your array.
// // • Add one new guest to the middle of your array. • Use append() to add one new
// // guest to the end of your list. • Print a new set of invitation messages, one for
// //  each person in your list.


// let guestArr : string[] = ["Bilal", "Irfan", "Amjad"];
// let canNotAttend : string = "Sultan";
// let newGuest : string = "Jalal"

// guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr)

// // guestArr.map((items) =>
// // console.log(`Dear ${items}, I found a bigger table so I am inviting more peoples.`));
// // Part B;
// let guestAdd : string = "kashif";
// guestArr.unshift(guestAdd);
// console.log(guestAdd);
// // part c
// let guestMiddle : string = 'Faizan';
// let middleIndex = guestArr.length/2
// guestArr.splice(middleIndex, 0 , guestMiddle)
// console.log(guestArr)
// // part 4 append
// guestArr.push("Asad");
// console.log(guestArr)

// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new
// guest to the end of your list. • Print a new set of invitation messages, one for
//  each person in your list.


let guestArr : string[] = ['Bilal', 'irfan', 'Amjad'];
let canNotAttend : string = "Amjad";
let newGuest : string = "Sultan"

guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr)

// guestArr.map((items) =>
// console.log(`Dear ${items}, I found a bigger table so I am inviting more peoples.`));
// Part B;
let guestAdd : string = "Kashif";
guestArr.unshift(guestAdd);
console.log(guestAdd);
// part c
let guestMiddle : string = 'Amjad';
let middleIndex = guestArr.length/2
guestArr.splice(middleIndex, 0 , guestMiddle)
console.log(guestArr)
// part 4 append
guestArr.push("Furqan");
console.log(guestArr)