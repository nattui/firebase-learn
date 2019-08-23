const auth = firebase.auth();
const db = firebase.firestore();


// Status
auth.onAuthStateChanged(user => {
  if (user) {
    console.log('The user is logged in!', user);
  } else {
    console.log('The user is logged out!');
  }
});


// Signup
const formElement = document.querySelector('#signup');
formElement.addEventListener('submit', (event) => {
  const email = document.querySelector('#signup .form__email').value;
  const password = document.querySelector('#signup .form__password').value;
  console.log(`email: ${email}, password: ${password}`);

  auth.createUserWithEmailAndPassword(email, password)
    .then(cred => {
      console.log(cred.user);
      formElement.reset();
    });

  event.preventDefault();
});


// Logout
const logout = document.querySelector('.logout');
logout.addEventListener('click', event => {
  auth.signOut();
  event.preventDefault();
});


// Login
const login = document.querySelector('#login');
login.addEventListener('submit', event => {
  const email = document.querySelector('#login .form__email').value;
  const password = document.querySelector('#login .form__password').value;
  auth.signInWithEmailAndPassword(email, password)
    .then(() => login.reset());

  event.preventDefault();
});
