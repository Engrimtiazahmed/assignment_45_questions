"use strict";
/*
Question #45;Cars:
         Write a function that stores information about a car in a Object. The function should always receive a
         manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the
         function with the required information and two other name-value pairs, such as a color or an optional
         feature. Print the Object that’s returned to make sure all the information was stored correctly.
*/
function Car_Info(manufacturer, model_Name, ...options) {
    let CarInfo = Object.assign({ manufacturer,
        model_Name }, Object.assign({}, ...options));
    return CarInfo;
}
console.log(Car_Info("Toyota", "Grande", { color: "White" }, { features: ["Sunroof", "Anti breaking system", "Parking Sensors"] }));
