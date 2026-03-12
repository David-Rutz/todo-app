// todo-app script.js

// Function to load tasks from localStorage
function loadTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

// Function to save tasks to localStorage
function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to add a task
function addTask(task) {
    const tasks = loadTasks();
    tasks.push({ text: task, completed: false });
    saveTasks(tasks);
}

// Function to delete a task
function deleteTask(index) {
    const tasks = loadTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);
}

// Function to toggle task completion
function toggleTaskCompletion(index) {
    const tasks = loadTasks();
    tasks[index].completed = !tasks[index].completed;
    saveTasks(tasks);
}

// Function to filter tasks
function filterTasks(filter) {
    const tasks = loadTasks();
    if (filter === 'completed') {
        return tasks.filter(task => task.completed);
    } else if (filter === 'incomplete') {
        return tasks.filter(task => !task.completed);
    }
    return tasks; // return all tasks if filter is 'all'
}

// Example usage:
addTask('Finish homework');
deleteTask(0);
toggleTaskCompletion(0);
console.log(filterTasks('all'));