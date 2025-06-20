// Wait for the entire HTML document to be loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select the DOM elements
    const addButton = document.getElementById('add-task-btn');  // Button to add a task
    const taskInput = document.getElementById('task-input');    // Input field
    const taskList = document.getElementById('task-list');      // List to display tasks

    // Function to add a task
    function addTask() {
        // Get the task text and trim it
        const taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // Create a new <li> element for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create the "Remove" button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Assign an event to remove the task when button is clicked
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // Append the remove button to the <li>, then <li> to the <ul>
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Add event listener for the Add Task button
    addButton.addEventListener('click', addTask);

    // Add event listener for pressing Enter in the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
