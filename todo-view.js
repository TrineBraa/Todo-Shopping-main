function updateToDoView(){
    document.getElementById("app").innerHTML = /*HTML*/`
    <div class="listChoiceDiv"><h1 onclick="updateToDoView()">To Do List</h1><h2 onclick="updateShoppingView()">Shopping List</h2></div>
    <br>
    <br>
    <table id="toDoTable">
    ${drawToDoList()}
    </table>
    <br/>
    <br/>
    <label for="newTask">New Task:</label><input id="newTask" type=text><br/>
    <br/>
    <label for="newFrequent">Frequency:</label><input id="newFrequent" type=text>
    <button onclick="addNewTask()">Add a Task</button>
    
    `;
}

function drawToDoList (){
    let toDoHTML = `
        <tr>
            <th>Task to Do</th>
            <th>Frequency of Task</th>
            <th>Done the Task</th>
            <th>Edit or Remove Task</th>
        </th>`;
    for (let i=0; i<toDoList.length; i++){
        const foundTask = toDoList[i]
        const checkedHTML = foundTask.task ? 'checked="checked"' : '';
        if (!foundTask.editmode){
            toDoHTML += `
                    <tr>
                    <th>${toDoList[i].task}</th>
                    <th>${toDoList[i].howOften}</th>
                    <th><input class="taskCheck" onchange="changeTask(this, ${i})" type = "checkbox" ${checkedHTML}/></th> 
                    <th><button onclick="editTask(${i})">Edit</button><button onclick="deleteTask(${i})">Delete</button></th>
                    </tr>
                `;
        } else {
            toDoHTML+=`
                    <th><input id="editTask${i}" type="text" value="${toDoList[i].task}"/> </th>
                    <th><input id="frequent${i}" type="text" value="${toDoList[i].howOften}"/></th>
                    <th><input onchange="changeTask(this, ${i})" type = "checkbox" ${checkedHTML}/></th> 
                    <th><button onclick="updateTask(${i})">Save change</button></th>
                    </tr>
            `;
        }
    }

    return toDoHTML;
    }

    function updateTask(index){
        const id = `editTask${index}`;
        const time = `frequent${index}`;
        const inputTag = document.getElementById(id);
        const timeInput = document.getElementById(time);
        toDoList[index].task = inputTag.value;
        toDoList[index].howOften = timeInput.value;
        toDoList[index].editmode = false;
        updateToDoView()
    }