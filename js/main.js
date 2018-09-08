initializeFirebase();
//DOM EVENTS
document.getElementById('facebook-log').addEventListener('click', event => {
  event.preventDefault();
  loginFB();
});
document.getElementById('google-log').addEventListener('click', event => {
  event.preventDefault();
  googleLogin();
});
