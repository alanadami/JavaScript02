// script.js
document.getElementById('phoneForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const phoneNumber = document.getElementById('phoneNumber').value;
    const result = document.getElementById('result');

    // Substitua 'YOUR_API_KEY' pela sua chave de API do numverify
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `http://apilayer.net/api/validate?access_key=${apiKey}&number=${phoneNumber}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.valid) {
                result.textContent = `Número de telefone válido! Localização: ${data.location}, Operadora: ${data.carrier}`;
                result.style.color = 'green';
            } else {
                result.textContent = 'Número de telefone inválido!';
                result.style.color = 'red';
            }
        })
        .catch(error => {
            result.textContent = 'Erro ao verificar o número de telefone!';
            result.style.color = 'red';
            console.error('Erro:', error);
        });
});
