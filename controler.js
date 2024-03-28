//shopping Controller

function addNewItem(){
    shoppingList.push({itemName: NewItem.value, isFound: false,})
    NewItem.value = '';
    updateShoppingView();
}

function changeIsDone(checkbox, index){
    shoppingList[index].isFound = checkbox.checked;
    drawShoppingList()
}


function deleteTheItem(index){
    shoppingList.splice(index,1);
    updateShoppingView()
}

function editshopping(index){
    shoppingList[index].editmode = true;
    updateShoppingView()
}


//To do controller

function addNewTask (){
    toDoList.push({task: newTask.value, howOften: newFrequent.value, isDone: false,})
    newTask.value = '';
    newFrequent.value = '';
   updateToDoView()
}

function changeTask (checkbox, index){
    toDoList[index].isDone = checkbox.checked;
    drawToDoList()
}

function deleteTask (index){
    toDoList.splice(index,1);
    updateToDoView()
}

function editTask(index){
    toDoList[index].editmode= true;
    updateToDoView()
}