// Stripping Names: Store a person’s name, and include some whitespace characters 
// at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n",
//  at least once. Print the name once, so the whitespace around the name is displayed. 
//  Then print the name after striping the white spaces.


let whiteSpace: string = "\n \tImtiaz Ahmed";

console.log(whiteSpace);

let strippedName: string = whiteSpace.trim()
console.log("\nStripped Name:");
console.log(strippedName);