const userInput = document.querySelector('#favchap')
const menuButton = document.querySelector('#menuButton')
const menuList = document.querySelector('#list')


menuButton.addEventListener('click', function () {
  if (userInput.value.trim() !== '') {
    const list = document.createElement('li');

    const deleteButton = document.createElement('button');

    list.textContent = userInput.value;

    deleteButton.textContent = '❌';

    list.append(deleteButton);

    menuList.append(list);

    deleteButton.addEventListener('click', function () {
      menuList.removeChild(list);
      userInput.focus();
    })

    userInput.value = '';
  }
  userInput.focus();
})