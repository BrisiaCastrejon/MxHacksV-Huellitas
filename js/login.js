//Login con Facebook:
// Initialize Firebase
window.initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: 'AIzaSyAMC3MIiKr0CQZnomUGxbzyVh9pbvOi4F8',
    authDomain: 'mi-fabuloso-proyecto-df5f9.firebaseapp.com',
    databaseURL: 'https://mi-fabuloso-proyecto-df5f9.firebaseio.com',
    projectId: 'mi-fabuloso-proyecto-df5f9',
    storageBucket: 'mi-fabuloso-proyecto-df5f9.appspot.com',
    messagingSenderId: '669864142345'
  });
};
//Function for FB Login:
window.loginFB = () => {
  let provider = new firebase.auth.FacebookAuthProvider();
  //Should use the predefined languaje
  firebase.auth().useDeviceLanguage();
  //Get access by Pop Up
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      let token = result.credential.accessToken;
      // The signed-in user info.
      let user = result.user;
      // ...and
    })
    .catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // The email of the user's account used.
      let email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      let credential = error.credential;
      // ...
    });
};

//function login google
window.googleLogin = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  firebase.auth().useDeviceLanguage();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      let token = result.credential.accessToken;
      // The signed-in user info.
      let user = result.user;
      location.href = 'src/home.html';
      // ...
    })
    .catch(error => {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // The email of the user's account used.
      let email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      let credential = error.credential;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        alert('El correo ya ha sido registrado');
      }
      // ...
    });
};
