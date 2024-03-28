function updateToDoView(){
    document.getElementById("app").innerHTML = /*HTML*/`
    <div class="listChoiceDiv"><h1 onclick="updateToDoView()">To Do List</h1><h2 onclick="updateShoppingView()">Shopping List</h2></div>
    <br>
    <br>
    <table id="toDoTable">
    ${drawToDoList()}
    </table>
    <br>
    <br>
    <button>Add a Task</button>
    
    `;
}

function drawToDoList (){
    let toDoHTML = `
        <tr>
            <th>Task to Do</th>
            <th>Done the Task</th>
            <th>Edit or Remove Task</th>
        </th> 
    `;
    for (let i=0; i<toDoList.length; i++){
        
    }

    return toDoHTML;
}