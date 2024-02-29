const firstButton = document.querySelector('#ShowModal_1');
const secondButton = document.querySelector('#ShowModal_2');
const thirdButton = document.querySelector('#ShowModal_3');

const firstButtonCloser = document.querySelector('#CloseModal_1');
const secondButtonCloser = document.querySelector('#CloseModal_2');
const thirdButtonCloser = document.querySelector('#CloseModal_3');

const modalOne = document.querySelector('#modal');
const modalTwo = document.querySelector('#modal2');
const modalThree = document.querySelector('#modal3');


firstButton.addEventListener('click', () => {
    modalOne.showModal();
})

firstButtonCloser.addEventListener('click', () => {
    modalOne.close();
})



secondButton.addEventListener('click', () => {
    modalTwo.showModal();
})

secondButtonCloser.addEventListener('click', () => {
    modalTwo.close();
})


thirdButton.addEventListener('click', () => {
    modalThree.showModal();
})

thirdButtonCloser.addEventListener('click', () => {
    modalThree.close();
})

