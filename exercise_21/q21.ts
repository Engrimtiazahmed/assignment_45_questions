// // They think of something you could store in a TypeScript Object. Write a program
//  that creates Objects containing these items.

interface type {
    carName: string;
    model: Number;
    transmition: string;
    color: string;
  }
  let result: type = {
    carName: "Chingan",
    model: 2024,
    transmition: "auto",
    color: "Black",
  };
  console.log(`Your Car: ${result.carName} model:${result.model} transmition: ${result.transmition}
  Color: ${result.color} "is the one of my favourate car".`);