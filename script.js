
const formulario = document.getElementById('meuFormulario');
formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    if (nome === '' || email === '') {
        alert('Por favor, preencha todos os campos do formulário.');
    } else {
        
        alert('Formulário enviado com sucesso!');
    }
});


const botaoNavegacao = document.getElementById('botaoNavegacao');
botaoNavegacao.addEventListener('click', function () {
    
    history.back();
});


const botaoGeolocalizacao = document.getElementById('botaoGeolocalizacao');
botaoGeolocalizacao.addEventListener('click', function () {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            alert(`Sua localização é: Latitude ${latitude}, Longitude ${longitude}`);
        });
    } else {
        alert('Geolocalização não suportada neste navegador.');
    }
});