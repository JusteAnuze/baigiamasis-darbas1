document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('contact');
    const textInput = document.getElementById('textInput');
    const emailInput = document.getElementById('emailInput');
    const phoneInput = document.getElementById('phoneInput');
    const cityInput = document.getElementById ('cityInput');
    form.addEventListener('submit', (event) => {
        let valid = true;
        let message = '';
        if (textInput.value.trim() === '') {
            message += 'Text field cannot be empty!\n';
            valid = false;
        }
        if (emailInput.value.trim() === '') {
            message += 'Email field cannot be empty!\n';
            valid = false;
        } 
        else if (!/\S+@\S+\.\S+/.test(emailInput.value.trim())) {
            message += 'Invalid email format!\n';
            valid = false;
        }
        if (phoneInput.value.trim() === '') {
            message += 'PhoneNumber field cannot be empty!\n';
            valid = false;
        } 
        else if (!/^\d{9}$/.test(phoneInput.value.trim())) {
            message += 'Phone number must contain exactly 9 digits!\n';
            valid = false;
        }
        if (!valid) {
            alert(message);
            event.preventDefault();  
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");

    // Paspaudus burger mygtuką, keičiamas navigacijos meniu matomumas
    burger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });