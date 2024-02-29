//методы forEach and Map
const taycanCharacteristics = [
    { name: "Power", value: "300 kW/408 PS" },
    { name: "Acceleration 0 - 100 km/h", value: "5.4 s" },
    { name: "Top speed", value: "230 km/h" },
    { name: "Fuel consumption combined (City)", value: "23,9 – 19,6 kWh/100 km" },
    { name: "Fuel consumption combined (Highway)", value: "23,9 – 19,6 kWh/100 km" }
];

console.log("Using forEach:");
taycanCharacteristics.forEach((characteristic, index) => {
    console.log(`Characteristic ${index + 1}: ${characteristic.name} - ${characteristic.value}`);
});

const mappedCharacteristics = taycanCharacteristics.map((characteristic) => {
    return `${characteristic.name}: ${characteristic.value}`;
});

console.log("\nUsing map:");
console.log(mappedCharacteristics);

const numericCharacteristics = taycanCharacteristics.filter((characteristic) => {
    return !isNaN(parseFloat(characteristic.value));
});

console.log("\nNumeric Characteristics:");
console.log(numericCharacteristics);

const sum = numericCharacteristics.reduce((total, characteristic) => {
    return total + parseFloat(characteristic.value);
}, 0);

const average = sum / numericCharacteristics.length;

console.log("\nAverage Numeric Value:");
console.log(average);
