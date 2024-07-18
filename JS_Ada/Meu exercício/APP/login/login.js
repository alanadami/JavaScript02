// script.js
const btnLoginCatador = document.getElementById('btn-login-catador');
const btnLoginUser = document.getElementById('btn-login-user');
const btnRegister = document.getElementById('btn-register');
const registerSection = document.getElementById('register');
const catadorSection = document.getElementById('catador');
const userSection = document.getElementById('user');
const usersList = document.getElementById('users-list');
const amountInput = document.getElementById('amount');
const submitAmountBtn = document.getElementById('btn-submit-amount');
const registerForm = document.getElementById('register-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const usernameRegisterInput = document.getElementById('username-register');
const passwordRegisterInput = document.getElementById('password-register');
const btnRegisterSubmit = document.getElementById('btn-register-submit');

btnLoginCatador.addEventListener('click', () => {
    // Verificar credenciais do catador
    if (username.value === 'catador' && password.value === '123456') {
        loginCatador();
    } else {
        alert('Credenciais inválidas');
    }
});

btnLoginUser.addEventListener('click', () => {
    // Verificar credenciais do usuário
    if (username.value === 'user' && password.value === '123456') {
        loginUser();
    } else {
        alert('Credenciais inválidas');
    }
});

btnRegister.addEventListener('click', () => {
    loginSection.style.display = 'none';
    registerSection.style.display = 'block';
});

btnRegisterSubmit.addEventListener('click', () => {
    const name = nameInput.value;
    const email = emailInput.value;
    const username = usernameRegisterInput.value;
    const password = passwordRegisterInput.value;

    // Cadastrar usuário no servidor
    console.log(`Cadastrar usuário: ${name}, ${email}, ${username}, ${password}`);
    // Redirecionar para a página de login
    loginSection.style.display = 'block';
    registerSection.style.display = 'none';
});

function loginCatador() {
    catadorSection.style.display = 'block';
    userSection.style.display = 'none';
}