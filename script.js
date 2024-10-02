// Add a new task
document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') return;

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = taskText;

    // Complete button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.className = 'complete-btn';
    completeBtn.addEventListener('click', function() {
        span.classList.toggle('completed');
        completeBtn.textContent = 'Completed';
        completeBtn.classList.add('completed');
    });

    // Update button
    const updateBtn = document.createElement('button');
    updateBtn.textContent = 'Update';
    updateBtn.className = 'update-btn';
    updateBtn.addEventListener('click', function() {
        const updatedTask = prompt('Update the task:', span.textContent);
        if (updatedTask !== null && updatedTask.trim() !== '') {
            span.textContent = updatedTask.trim();
        }
    });

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(updateBtn);
    li.appendChild(deleteBtn);

    document.getElementById('task-list').appendChild(li);

    taskInput.value = ''; // Clear input field after adding task

    // Apply dark mode to new tasks
    if (document.body.classList.contains('dark-mode')) {
        li.classList.add('dark-mode');
    }
});

// Search functionality
document.getElementById('search-task').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    const tasks = document.querySelectorAll('#task-list li');

    tasks.forEach(function(task) {
        const taskText = task.firstChild.textContent.toLowerCase();
        if (taskText.includes(searchValue)) {
            task.style.display = '';
        } else {
            task.style.display = 'none';
        }
    });
});

// Toggle between dark and light mode
document.getElementById('theme-toggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.container').classList.toggle('dark-mode');
    document.querySelectorAll('input[type="text"]').forEach(input => {
        input.classList.toggle('dark-mode');
    });
    document.querySelectorAll('li').forEach(task => {
        task.classList.toggle('dark-mode');
    });
    document.querySelectorAll('button').forEach(button => {
        button.classList.toggle('dark-mode');
    });
});
