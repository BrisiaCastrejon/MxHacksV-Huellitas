// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDQChB9200euyOm9UOfD2zUI7vYHlHJWDI',
  authDomain: 'mxhacks-393d3.firebaseapp.com',
  databaseURL: 'https://mxhacks-393d3.firebaseio.com',
  projectId: 'mxhacks-393d3',
  storageBucket: 'mxhacks-393d3.appspot.com',
  messagingSenderId: '465733336274'
};
firebase.initializeApp(config);
const store = document.getElementById('store');
console.log(store);
const shelter = document.getElementById('shelter');
const veterinarian = document.getElementById('veterinarian');
const dogs = document.getElementById('dogs');
const donate = document.getElementById('donate');
let confirmation = document.getElementById('confirm');
const btnEnviarDenuncia = document.getElementById('enviar');
btnEnviarDenuncia.addEventListener('click', event => {
  const enviado = document.getElementById('formulario');
  enviado.style.display = 'none';
  confirmation.innerHTML = `
  <img src="assets/images/confirm.gif">
  <h3>¡Gracias!</h3>
  <h4>Pronto recibirá atención.</h4>
  <footer>Si quieres dar seguimiento a esta y otras misiones, síguenos en nuestras redes sociales y consulta la
      sección<a href="index.html"> Nuestros logros.</a> </footer>
      `;
  //gifConfirm.style.display = 'block';
  splashReturn();
});
splashReturn = () => {
  setTimeout(() => (location.href = '../store.html'), 3000);
};
