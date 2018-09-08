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
const shelter = document.getElementById('shelter');
const veterinarian = document.getElementById('veterinarian');
const dogs = document.getElementById('dogs');
const donate = document.getElementById('donate');