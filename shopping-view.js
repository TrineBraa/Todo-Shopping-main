updateShoppingView()
function updateShoppingView(){
    document.getElementById("app").innerHTML = /*HTML*/`
    <div class="listChoiceDiv"><h1 onclick="updateShoppingView()">Shopping List</h1><h2 onclick="updateToDoView()">To Do List</h2></div>
    <br/>
    <br/>
    <div id="shoppingContainer">
    <table id="shoppingTable">
        ${drawShoppingList()}
    </table>
        <br/>
        <br/>     
    <input id="NewItem" type=text>
    <button onclick="addNewItem()">Add a New Item</button>
    <button onclick="removeMarkers()">Remove all markers</button>
    </div>
    
    `;
}

function drawShoppingList(){
    let mainHTML = `
            <tr>
                <th>What to buy</th>
                <th>Found Item</th>
                <th>Edit or remove item</th>
            </tr>`;
    for (let i = 0; i < shoppingList.length; i++){
        const foundItem = shoppingList[i]
        const checkedHTML = foundItem.isFound ? 'checked="checked"' : '';
        mainHTML += `<tr>
                    <th>${shoppingList[i].itemName}</th>
                    <th><input onchange="changeIsDone(this, ${i})" type = "checkbox"/>${checkedHTML}</th>
                    <th><button>Edit</button><button>Delete</button></th>
                    </tr>
                `;
    }
    return mainHTML;
}

function changeIsDone(checkbox, index){
    shoppingList[index].isFound = checkbox.checked;
    drawShoppingList()
}

function removeMarkers(){
    
}