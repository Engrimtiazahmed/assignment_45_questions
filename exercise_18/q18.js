"use strict";
// part A
//Seeing the World:Think of at least five places in the world you’d like to visit.
//Store the locations in a array. Make sure the array is not in alphabetical order
let placToVisit = ['USA', 'Japan', 'Germany', 'Iran', 'KSA'];
// part B " Print your array in its original order"
console.log("Original order is :", placToVisit);
// part C "Print your array in alphabetical order without modifying the actual list."
console.log("Alphabatical order :", [...placToVisit].sort());
// part D
console.log("Original order after sorting :", placToVisit);
// part E "Reverse the order of your list."
console.log("Alphabatical order :", [...placToVisit].sort().reverse());
// part F "Print the list to show it’s back to its original order."
console.log("Original order after reverse sorting :", placToVisit);
// paer G "Print the array to show that its order has been changed"
placToVisit.reverse();
console.log("Reversed order is :", placToVisit);
//part H "reverse alphabetical order. Print the list to show that its order has changed."
placToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sort in reverse alphabatical order :", placToVisit);
