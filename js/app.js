const userName = document.getElementById('user-name');
const userPhoto = document.getElementById('user-photo');
const database = firebase.database();

firebase.auth().onAuthStateChanged(firebaseUser => {
  let user = firebase.auth().currentUser;
  if (user !== null) {
    user.updateProfile({
      displayName: user.displayName
    });
  }
  if (firebaseUser) {
    userName.innerHTML = user.displayName;
  }
  let id = user.uid;
  userAuth = database.ref('users/' + id);
  createUser(user.displayName, user.email);
});

createUser = (name, email) => {
  let conect = userAuth.push({
    name: name,
    email: email
  });
};