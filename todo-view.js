function updateToDoView(){
    document.getElementById("app").innerHTML = /*HTML*/`
    <div class="listChoiceDiv"><h1 onclick="updateToDoView()">To Do List</h1><h2 onclick="updateShoppingView()">Shopping List</h2></div>
    `;
}