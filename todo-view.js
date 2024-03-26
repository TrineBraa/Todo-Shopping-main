function updateToDoView(){
    document.getElementById("app").innerHTML = /*HTML*/`
    <div class="listChoiceDiv"><h2 onclick="updateShoppingView()">Shopping List</h2><h1 onclick="updateToDoView()">To Do List</h1></div>
    `;
}