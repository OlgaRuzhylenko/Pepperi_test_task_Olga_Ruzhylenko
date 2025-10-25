const mainForm = document.querySelector('.form');
mainForm.addEventListener('submit', handleSubmit);

const textAreaInput = document.querySelector('.form-textarea');

const validation = /^[a-zA-Z0-9 =]+$/;
const inputObject = {
  name: '',
  value: '',
};

function handleSubmit(evt) {
  evt.preventDefault();
  const form = evt.target;
  const userInput = form.elements.userinput.value;
  const userInputKey = userInput.trim().split('=');
  console.log(userInputKey);
  inputObject.name = userInputKey[0].trim();

  inputObject.value = userInputKey[1].trim();
  console.log(inputObject);

  if (userInput === '') {
    return alert('Please enter name and value!');
  }
  if (!userInput.includes('=')) {
    return alert('Please enter data in format "name=value"');
  }
  if (!validation.test(userInput)) {
    return alert('Please enter only English letters and numbers!');
  }

  form.reset();

  textAreaInput.textContent = userInput;
  console.log(typeof textAreaInput);
}
