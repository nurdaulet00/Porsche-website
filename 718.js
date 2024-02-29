//шаблонная строка
const carModel = "718 Cayman";
const imageUrl = "https://files.porsche.com/filestore/image/multimedia/none/982-718-c7-modelimage-sideshot/model/1b1b5cb6-e874-11ea-80cd-005056bbdc38/porsche-model.png";
const power = "220 kW/300 PS";
const acceleration = "5.1 s";
const topSpeed = "275 km/h";
const fuelConsumptionCity = "9.7 - 8.9 l/100 km";
const fuelConsumptionHighway = "9.7 - 8.9 l/100 km";

const templateString = `
    Power(kW)/Power(PS)
    Acceleration 0 - 100 km/h
    Top speed
    Fuel consumption combined
    City
    Highway

    ${power}
    ${acceleration}
    ${topSpeed}
    ${fuelConsumptionCity}
    ${fuelConsumptionHighway}
`;

console.log(templateString);

// переменные и конструкций 
const characteristics = [power, acceleration, topSpeed, fuelConsumptionCity, fuelConsumptionHighway];
characteristics.forEach((item, index) => {
    console.log(`Characteristic ${index + 1}: ${item}`);
});

const carDetails = {
    model: carModel,
    image: imageUrl,
    specifications: {
        power: power,
        acceleration: acceleration,
        topSpeed: topSpeed,
        fuelConsumption: {
            city: fuelConsumptionCity,
            highway: fuelConsumptionHighway
        }
    }
};

for (let key in carDetails) {
    console.log(`${key}: ${carDetails[key]}`);
}




//функциональное программирование
function createTableBody(power, acceleration, topSpeed, fuelConsumptionCity, fuelConsumptionHighway) {
    return `
        <tbody>
            <tr>
                <td>${power}</td>
                <td>${acceleration}</td>
                <td>${topSpeed}</td>
                <td>${fuelConsumptionCity}</td>
                <td>${fuelConsumptionHighway}</td>
            </tr>
        </tbody>
    `;
}

function createTable() {
    return `
        <table class="table">
            <thead>
                <tr>
                    <th rowspan="2">Power(kW)/Power(PS)</th>
                    <th rowspan="2">Acceleration 0 - 100 km/h</th>
                    <th rowspan="2">Top speed</th>
                    <th colspan="2">Fuel consumption combined</th>
                </tr>
                <tr>
                    <th>City</th>
                    <th>Highway</th>
                </tr>
            </thead>
            ${createTableBody(power, acceleration, topSpeed, fuelConsumptionCity, fuelConsumptionHighway)}
        </table>
    `;
}

const tableHTML = createTable();

document.body.insertAdjacentHTML('beforeend', tableHTML);



