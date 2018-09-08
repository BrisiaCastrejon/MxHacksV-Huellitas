// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDQChB9200euyOm9UOfD2zUI7vYHlHJWDI',
  authDomain: 'mxhacks-393d3.firebaseapp.com',
  databaseURL: 'https://mxhacks-393d3.firebaseio.com',
  projectId: 'mxhacks-393d3',
  storageBucket: 'mxhacks-393d3.appspot.com',
  messagingSenderId: '465733336274'
};
firebase.initializeApp(config);
const btnEnviarDenuncia = document.getElementById('enviar');

btnEnviarDenuncia.addEventListener('click', event => {
  const enviado = document.getElementById('formulario');
  enviado.style.display = 'none';
  gifConfirm.style.display = 'block';

  splashReturn();
});
splashReturn = () => {
  setTimeout(() => (location.href = '../index.html'), 2000);
};
