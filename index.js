const form = document.querySelector('form');
const card_1 = document.querySelector('.main-container');
const card_2 = document.querySelector('.sub-container');
const userEmail = document.querySelector('.email');
const emailDisplay = document.querySelector('.user-email')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    card_1.classList.add('hide');
    card_2.classList.remove('hide');

    valueEmail = userEmail.value;
    
    emailDisplay.innerHTML=valueEmail;
});



