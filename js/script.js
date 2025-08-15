const addBtn=document.getElementById('add-btn');
const tasksEl=document.getElementById('tasks');
let tasks=JSON.parse(localStorage.getItem('tasks'))||[];
function saveTasks(){localStorage.setItem('tasks',JSON.stringify(tasks));renderTasks();}
function renderTasks(){tasksEl.innerHTML='';tasks.forEach((task,index)=>{const row=document.createElement('tr');row.innerHTML=`<td>${task.title}</td><td>${task.date||'-'}</td><td>${task.priority}</td><td>${task.completed?'Completed':'Pending'}</td><td><button onclick="toggleComplete(${index})">${task.completed?'Undo':'Complete'}</button><button onclick="deleteTask(${index})">Delete</button></td>`;tasksEl.appendChild(row);});}
function toggleComplete(index){tasks[index].completed=!tasks[index].completed;saveTasks();}
function deleteTask(index){tasks.splice(index,1);saveTasks();}
addBtn.addEventListener('click',()=>{const title=document.getElementById('task-title').value;const date=document.getElementById('task-date').value;const priority=document.getElementById('task-priority').value;if(title){tasks.push({title,date,priority,completed:false});saveTasks();document.getElementById('task-title').value='';document.getElementById('task-date').value='';}});
renderTasks();
