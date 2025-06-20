document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // Create <li> element for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create Remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn'); // ✅ Use classList.add instead of className

        // Event to remove the task
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // Add remove button to the list item, then add list item to task list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input
        taskInput.value = '';
    }

    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
