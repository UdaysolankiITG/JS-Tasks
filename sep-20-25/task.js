
const addTaskBtn = document.getElementById("addTaskBtn");
const viewTasksBtn = document.getElementById("viewTasksBtn");
const addNoteBtn = document.getElementById("addNoteBtn");

const addTaskModal = document.getElementById("addTaskModal");
const viewTasksModal = document.getElementById("viewTasksModal");
const addNoteModal = document.getElementById("addNoteModal");

const closeTask = document.getElementById("closeTask");
const closeView = document.getElementById("closeView");
const closeNote = document.getElementById("closeNote");

const taskForm = document.getElementById("taskForm");
const noteForm = document.getElementById("noteForm");
const taskList = document.getElementById("taskList");
const noteList = document.getElementById("noteList");


let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let notes = JSON.parse(localStorage.getItem("notes")) || [];


addTaskBtn.onclick = () => addTaskModal.style.display = "block";
viewTasksBtn.onclick = () => {
    viewTasksModal.style.display = "block";
    renderTasks();
};
addNoteBtn.onclick = () => addNoteModal.style.display = "block";

closeTask.onclick = () => addTaskModal.style.display = "none";
closeView.onclick = () => viewTasksModal.style.display = "none";
closeNote.onclick = () => addNoteModal.style.display = "none";

window.onclick = e => {
    if (e.target === addTaskModal) addTaskModal.style.display = "none";
    if (e.target === viewTasksModal) viewTasksModal.style.display = "none";
    if (e.target === addNoteModal) addNoteModal.style.display = "none";
}


taskForm.addEventListener("submit", e => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const desc = document.getElementById("desc").value;
    const date = document.getElementById("date").value;
    const priority = document.getElementById("priority").value;

    tasks.push({ title, desc, date, priority, completed: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskForm.reset();
    addTaskModal.style.display = "none";
});

function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, i) => {
        const li = document.createElement("li");
        li.className = 'task-item-card';
        li.innerHTML = `
            <div class="task-item">
                <div class="priority-indicator ${task.priority}"></div>
                <div class="task-info">
                    <strong>${task.title}</strong>
                    <small>Due: ${task.date} - Priority: ${task.priority}</small>
                    ${task.desc ? `<p>${task.desc}</p>` : ''}
                </div>
            </div>
            <div class="task-actions">
                <button onclick="toggleComplete(${i})" aria-label="Toggle Complete">
                    <img src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png" alt="Complete">
                </button>
                <button onclick="deleteTask(${i})" aria-label="Delete Task">
                    <img src="https://img.icons8.com/material-outlined/24/000000/trash.png" alt="Delete">
                </button>
            </div>
        `;
        if (task.completed) {
            li.style.textDecoration = "line-through";
            li.style.opacity = "0.7";
        }
        taskList.appendChild(li);
    });
}

function toggleComplete(i) {
    tasks[i].completed = !tasks[i].completed;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

function deleteTask(i) {
    tasks.splice(i, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}


noteForm.addEventListener("submit", e => {
    e.preventDefault();
    const note = document.getElementById("noteInput").value;
    if (!note) return;
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
    noteForm.reset();
    renderNotes();
});

function renderNotes() {
    noteList.innerHTML = "";
    notes.forEach((n, i) => {
        const li = document.createElement("li");
        li.innerHTML = `${n} <button onclick="deleteNote(${i})">❌</button>`;
        noteList.appendChild(li);
    });
}

function deleteNote(i) {
    notes.splice(i, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    renderNotes();
}


renderNotes();