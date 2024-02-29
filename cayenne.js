// car.js
class Car {
    constructor(model, image, power, acceleration, topSpeed, fuelConsumptionCity, fuelConsumptionHighway) {
        this.model = model;
        this.image = image;
        this.power = power;
        this.acceleration = acceleration;
        this.topSpeed = topSpeed;
        this.fuelConsumptionCity = fuelConsumptionCity;
        this.fuelConsumptionHighway = fuelConsumptionHighway;
    }

    displayDetails() {
        console.log(`Model: ${this.model}`);
        console.log(`Image: ${this.image}`);
        console.log(`Power: ${this.power}`);
        console.log(`Acceleration: ${this.acceleration}`);
        console.log(`Top Speed: ${this.topSpeed}`);
        console.log(`Fuel Consumption City: ${this.fuelConsumptionCity}`);
        console.log(`Fuel Consumption Highway: ${this.fuelConsumptionHighway}`);
    }
}

class Cayenne extends Car {
    constructor(model, image, power, acceleration, topSpeed, fuelConsumptionCity, fuelConsumptionHighway, offRoadAbility) {
        super(model, image, power, acceleration, topSpeed, fuelConsumptionCity, fuelConsumptionHighway);
        this.offRoadAbility = offRoadAbility;
    }

    displayDetails() {
        super.displayDetails();
        console.log(`Off-Road Ability: ${this.offRoadAbility}`);
    }
}

const cayenne = new Cayenne(
    "Cayenne",
    "https://files.porsche.com/filestore/image/multimedia/none/9ya-g2-modelimage-sideshot/model/0b37b5a8-f631-11eb-80ce-005056bbdc38/porsche-model.png",
    "260 kW/353 PS",
    "5.3 s",
    "270 km/h",
    "10,5 – 9,6 l/100 km",
    "10,5 – 9,6 l/100 km",
    "Excellent"
);

cayenne.displayDetails();
