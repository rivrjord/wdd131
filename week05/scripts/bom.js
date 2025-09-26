// const input = document.querySelected('#favshap');
// const button = document.querySelector('button');
// const list = document.querySelector('');

const input = document.getElementById('favchap');
const button = document.getElementById('addButton');
const list = document.getElementById('list');

// Get stored list or default to empty array
let chaptersArray = getChapterList() || [];

// Display any saved chapters on load
chaptersArray.forEach(chapter => displayList(chapter));

button.addEventListener('click', function() {
    // check if input is blank
    if (input.value.trim() ==='') {
        // call the displayList with the input value
        displayList(input.value);

        // Push the input value into the chaptersArray
        chaptersArray.push(input.value);

        // Update localStorage
        setChapterList();

        // clear input
        input.value = '';
        input.focus();
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


function displayList(item) {
    
    // create li
    const li = document.createElement('li');
    
    // create delete button
    const deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    // append delete button to li
    li.append(deleteButton);

    // append li to list
    list.append(li);

    // delete functionality
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
    // console.log('I like to copy code rather than type it myself');
}


