const btnFacebook = document.getElementById('facebook-log');
const btnGoogle = document.getElementById('google-log');
// const btnDenunciar = document.getElementById('denunciar');

btnDenunciar.addEventListener('click', event => {
  location.href = '../denuncias.html';
<<<<<<< HEAD
  hideGif();
});

const hideGif = () => {
  const gifConfirm = document.getElementById('confirm');
  gifConfirm.style.display = 'none';
};

=======
});  
>>>>>>> d5f1c46baaebcf7edc8904fbe142f7636f8a34bc
btnGoogle.addEventListener('click', event => {
  let provider = new firebase.auth.GoogleAuthProvider();
  const promise = firebase.auth().signInWithRedirect(provider);
  promise.catch(event => alert(event.message));
});
btnFacebook.addEventListener('click', event => {
  let provider = new firebase.auth.FacebookAuthProvider();
  firebase
    .auth()
    .signInWithRedirect(provider)
    .then(result => {
      let token = result.credencia.accessToken;
      let user = result.user;
    })
    .catch(error => {
      let errorCode = error.code;
      let errorMessage = error.message;
      let email = error.email;
      let credential = error.credential;
      console.log(errorCode);
    }); 
}); 
btnFacebook.addEventListener('click', event => {
  let provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithRedirect(provider)
    .then((result)=> {
      let token = result.credencia.accessToken;
      let user = result.user;
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      let email = error.email;
      let credential = error.credential;
      console.log(errorCode);
    });
});
<<<<<<< HEAD
=======

firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    window.location.assign('views/index.html');
  };
});
>>>>>>> d5f1c46baaebcf7edc8904fbe142f7636f8a34bc
