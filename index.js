const card_1 = document.querySelector('.main-container');
const card_2 = document.querySelector('.sub-container');
const userEmail = document.querySelector('.email');
const emailDisplay = document.querySelector('.user-email');
const error = document.querySelector('.error');

const form = document.querySelector('.form');
const emailInput = document.querySelector('.email');
const errorSpan = document.querySelector('.error');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
        errorSpan.classList.remove('hide');
        userEmail.classList.add('error-box');
    } else {
        errorSpan.classList.add('hide');
        card_1.classList.add('hide');
        card_2.classList.remove('hide');
        emailDisplay.textContent = email;
    }
});