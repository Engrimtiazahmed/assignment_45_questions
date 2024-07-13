"use strict";
/*
Question #41;Magicians:
        Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the
        name of each magician in the array.
*/
function show_magician(magician) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
const magicians = ["Irfan", 'Kashif', 'Amjad'];
show_magician(magicians);
