const btnLogout = document.getElementById('btn-logout');
let database = firebase.database();
const boxBtn = document.getElementById('logout-box');

const createUser = (name, email, photo) => {
  let conect = userAuth.push({
    name: name,
    email: email,
    photo: photo
  });
};

btnLogout.addEventListener('click', event => {
  firebase.auth().signOut();
  btnLogout.style.display = 'none';
  window.location.assign('../views/login.html');

});

firebase.auth().onAuthStateChanged(firebaseUser => {
  let user = firebase.auth().currentUser;
  if (user !== null) {
    user.updateProfile({
      displayName: user.displayName
    });
    if (firebaseUser) {
      const userName = document.getElementById('user-name');
      const userPhoto = document.getElementById('user-photo');
      userName.innerHTML = user.displayName;
      userPhoto.innerHTML = `<img src="${user.photoURL}" id="avatar">`;
    }
  }
  if (firebaseUser) {
    userName.innerHTML = user.displayName;
  }
  let id = user.uid;
  userAuth = database.ref('users/' + id);
  createUser(user.displayName, user.email, user.photoURL);
});
