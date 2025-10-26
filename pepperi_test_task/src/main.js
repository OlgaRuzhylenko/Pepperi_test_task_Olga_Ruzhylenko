const mainForm = document.querySelector('.form');
mainForm.addEventListener('submit', handleSubmit);

const textAreaInput = document.querySelector('.form-textarea');

const validation = /^[a-zA-Z0-9 =]+$/;
const inputObjectArr = [];

function handleSubmit(evt) {
  evt.preventDefault();
  const form = evt.target;

  const userInput = form.elements.userinput.value;
  const userInputKey = userInput.trim().split('=');
  const inputObject = {};

  inputObject.name = userInputKey[0].trim();
  inputObject.value = userInputKey[1].trim();

  inputObjectArr.push(inputObject);
  const inputObjStrings = inputObjectArr.map(item => {
    return `${item.name}=${item.value}`;
  });
  const inputObjString = inputObjStrings.join('\n');

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
  textAreaInput.textContent = inputObjString;
}

const sortBtn = document.querySelector('.sort-btn');
sortBtn.addEventListener('click', handleClick);
