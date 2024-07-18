// script.js
const registerForm = document.getElementById('register-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const btnRegisterSubmit = document.getElementById('btn-register-submit');

btnRegisterSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const username = usernameInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
        alert('Senhas não conferem');
        return;
    }

    // Armazenar dados no servidor
    console.log(`Cadastro realizado: ${name}, ${email}, ${phone}, ${username}, ${password}`);
    // Redirecionar para a página de login
    window.location.href = 'index.html';
});