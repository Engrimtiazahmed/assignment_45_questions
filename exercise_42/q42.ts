/* 
Question #42; Great Magicians:
         Start with a copy of your program from Exercise 39. Write a function called make_great() that
         modifies the array of magicians by adding the phrase the Great to each magician’s name. Call
         show_magicians() to see that the list has actually been modified.
*/
let magician = ["Criss Angel", "Harry Houdini", "Derren Brown"];

function make_great(Magicians: string[]) {
  for (let index = 0; index < Magicians.length; index++) {
    magician[index] = "The Great" + " " + Magicians[index];
  }
}

function show_magicians(magicians: string[]) {
  magicians.forEach((element) => {
    console.log(element);
  });
}
make_great(magician);

show_magicians(magician);