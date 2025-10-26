const mainForm = document.querySelector('.form');
mainForm.addEventListener('submit', handleSubmit);

const textAreaInput = document.querySelector('.form-textarea');

const validation = /^[a-zA-Z0-9 =]+$/;
const inputObjectArr = [];

function handleSubmit(evt) {
  evt.preventDefault();
  const form = evt.target;

  const userInput = form.elements.userinput.value;

  if (userInput === '') {
    return alert('Please enter name and value!');
  }
  if (!userInput.includes('=')) {
    return alert('Please enter data in format "name=value"');
  }
  if (!validation.test(userInput)) {
    return alert('Please enter only English letters and numbers!');
  }

  const userInputKey = userInput.trim().split('=');
  const inputObject = {};

  inputObject.name = userInputKey[0].trim();
  inputObject.value = userInputKey[1].trim();

  inputObjectArr.push(inputObject);

  displayData(inputObjectArr);

  form.reset();
}
//відображення уведеної інформації
function displayData(arr) {
  const inputObjStrings = arr.map(item => {
    return `${item.name}=${item.value}`;
  });
  const inputObjString = inputObjStrings.join('\n');
  textAreaInput.textContent = inputObjString;
}

// сортування
const sortBtn = document.querySelector('.sort-btn');
sortBtn.addEventListener('click', handleClickByName);

function handleClickByName(arr) {
  const newArray = inputObjectArr.toSorted((firstItem, secondItem) =>
    firstItem.name.localeCompare(secondItem.name)
  );
  const newInputObjStrings = newArray.map(item => {
    return `${item.name}=${item.value}`;
  });
  const inputObjString = newInputObjStrings.join('\n');
  textAreaInput.textContent = inputObjString;
}
