console.log('Titan!');

const inputElements = document.querySelectorAll('.form__input');
const submitElement = document.querySelector('.form__submit');
submitElement.addEventListener('click', () => {
  for (const input of inputElements) {
    console.log(input.value);
  }
  event.preventDefault();
});
