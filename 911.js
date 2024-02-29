//spread operator i rest peremetri
const baseCharacteristics = ["283 kW/385 PS", "4.2 s", "293 km/h"];
        const additionalCharacteristics = ["10,8 – 10,3 l/100 km", "10,8 – 10,3 l/100 km"];

        const allCharacteristics = [...baseCharacteristics, ...additionalCharacteristics];
        console.log("All Characteristics:", allCharacteristics);

        const carDetails = {
            model: "911 Carrera",
            power: "283 kW/385 PS",
            acceleration: "4.2 s",
            topSpeed: "293 km/h"
        };

        const additionalDetails = {
            fuelConsumptionCity: "10,8 – 10,3 l/100 km",
            fuelConsumptionHighway: "10,8 – 10,3 l/100 km"
        };

        const allDetails = { ...carDetails, ...additionalDetails };
        console.log("All Details:", allDetails);

        function calculateAverage(...numbers) {
            const sum = numbers.reduce((total, num) => total + num, 0);
            const average = sum / numbers.length;
            console.log("Numbers:", numbers);
            console.log("Sum:", sum);
            console.log("Average:", average);
        }

        calculateAverage(10, 20, 30, 40, 50);