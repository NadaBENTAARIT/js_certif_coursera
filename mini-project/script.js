// Get the HTML elements
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("textInput"); // Corrigé: "textInput" comme dans le HTML
const taskList = document.getElementById("taskList");

// Create a task counter
let taskId = 1;

// Function to add a new task
function addTask(event) {
    event.preventDefault(); // Prevent the page from refreshing
    const taskText = taskInput.value.trim(); // Get the task text and trim spaces

    if (taskText !== "") { // Ensure the input is not empty
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class='delete-btn'>Delete</button>
        `;

        taskList.appendChild(taskItem); // Add the task to the list
        taskInput.value = ""; // Clear the input after adding the task
        taskId++;

        // Add event listener to delete button
        const deleteBtn = taskItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', deleteTask);
    } else {
        console.log("Task text is empty, please enter a task.");
    }
}

// Function to delete a task
function deleteTask(event) {
    const taskItem = event.target.parentElement;  // 1. Obtenir l'élément parent (li) du bouton ( qui est target)cliqué
    console.log(taskItem);  // 2. Afficher cet élément dans la console (pour vérifier)
    taskList.removeChild(taskItem);  // 3. Supprimer cet élément (le <li>) de la liste des tâches
}


// Add event listener to the form
taskForm.addEventListener("submit", addTask);

