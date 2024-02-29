//DOM elements
const titleElement = document.querySelector('h3');
const imageElement = document.querySelector('img');
const powerElement = document.querySelector('.table tbody tr td:nth-child(1)');
const accelerationElement = document.querySelector('.table tbody tr td:nth-child(2)');
const topSpeedElement = document.querySelector('.table tbody tr td:nth-child(3)');
const fuelConsumptionCityElement = document.querySelector('.table tbody tr td:nth-child(4)');
const fuelConsumptionHighwayElement = document.querySelector('.table tbody tr td:nth-child(5)');

titleElement.textContent = 'New Panamera';
imageElement.src = 'https://files.porsche.com/filestore/image/multimedia/none/972-g3-v6-modelimage-sideshot/model/4fc0ed24-82d2-11ee-810c-005056bbdc38/porsche-model.png';
powerElement.textContent = '260 kW/353 PS';
accelerationElement.textContent = '5.3 s';
topSpeedElement.textContent = '272 km/h';
fuelConsumptionCityElement.textContent = '10,5 – 9,6 l/100 km';
fuelConsumptionHighwayElement.textContent = '10,5 – 9,6 l/100 km';

titleElement.addEventListener('click', () => {
    alert('Kruto!');
});
