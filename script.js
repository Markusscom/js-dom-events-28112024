const title = document.getElementById('title');
const list = document.getElementById('list');
const addItemButton = document.getElementById('add-item');
const removeItemButton = document.getElementById('remove-item');
const highlightTitleButton = document.getElementById('highlight-title');
const toggleListButton = document.getElementById('toggle-list');

addItemButton.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(newItem);
});

removeItemButton.addEventListener('click', () => {
    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }
});

highlightTitleButton.addEventListener('click', () => {
    title.classList.toggle('highlight');
});

toggleListButton.addEventListener('click', () => {
    list.classList.toggle('hidden');
});

title.setAttribute('data-info', 'Learn how to manipulate the DOM');
console.log(title.getAttribute('data-info'));

title.style.color = 'blue';
title.style.fontSize = '2rem';
