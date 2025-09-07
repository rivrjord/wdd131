// const input = document.querySelected('#favshap');
// const button = document.querySelector('button');
// const list = document.querySelector('');

const input = document.getElementById('favchap');
const button = document.getElementById('addButton');
const list = document.getElementById('list');

button.addEventListener('click', function() {
    // check if input is blank
    if (input.value.trim() ==='') {
        alert('Please enter a value.');
        input.focus();
        return;
    }
    // create li
    const li = document.createElement('li');

    // populate li with input value
    li.textContent = input.value;
            
    // create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';

    // append delete button to li
    li.appendChild(deleteButton);

    // append li to list
    list.appendChild(li);

    // clear input
    input.value = '';

    // delete functionality
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
    })
    // Always return focus to input
    input.focus();
});


