const auth = firebase.auth();
const db = firebase.firestore();


// Status
auth.onAuthStateChanged(user => {
  if (user) {
    console.log(`${user.email} is logged in!`);
  } else {
    console.log('User is logged out!');
  }
});


// Signup
const signupStr = '.form__signup';
const formSignup = document.querySelector(`${signupStr}`);
formSignup.addEventListener('submit', (event) => {
  const email = document.querySelector(`${signupStr} .form__email`).value;
  const password = document.querySelector(`${signupStr} .form__password`).value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(formSignup.reset());

  event.preventDefault();
});


// Logout
const logout = document.querySelector('.logout');
logout.addEventListener('click', event => {
  auth.signOut();
  event.preventDefault();
});


// Login
const loginStr = '.form__login';
const formLogin = document.querySelector(`${loginStr}`);
formLogin.addEventListener('submit', event => {
  const email = document.querySelector(`${loginStr} .form__email`).value;
  const password = document.querySelector(`${loginStr} .form__password`).value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => formLogin.reset());

  event.preventDefault();
});
