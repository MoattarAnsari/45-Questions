// // //45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// // function createCar(manufacturer: string, model: string, ...details: [string, any][]): object {
// //     let car: {[key: string]: any} = {
// //         manufacturer: manufacturer,
// //         model: model
// //     };
// //     details.forEach(([key, value]) => {
// //         car[key] = value;
// //     });
// //     return car;
// // }
// // // Call the function with required information and additional details
// // let carInfo = createCar("Toyota", "Corolla", ["color", "red"], ["year", 2022]);
// // // Print the Object to check the information
// // console.log(carInfo);
function createCar(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        Object.assign(car, option);
    }
    return car;
}
var carInfo = createCar("Toyota", "Camry", { color: "Blue", year: 2022, features: ["Navigation", "Sunroof"] });
console.log(carInfo);
