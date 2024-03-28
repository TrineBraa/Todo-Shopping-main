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
        if (!foundItem.editmode){
        mainHTML += `<tr>
                    <th>${shoppingList[i].itemName}</th>
                    <th><input class="shoppingCheck" onchange="changeIsDone(this, ${i})" type = "checkbox" ${checkedHTML}/></th> 
                    <th><button onclick="editshopping(${i})">Edit</button><button onclick="deleteTheItem(${i})">Delete</button></th>
                    </tr>
                `;
        } else {
            mainHTML +=`
                    <th><input id="editItem${i}" type="text" value="${shoppingList[i].itemName}"/></th>
                    <th><input onchange="changeIsDone(this, ${i})" type = "checkbox" ${checkedHTML}/></th> 
                    <th><button onclick="updateItem(${i})">Save change</button></th>
                    </tr>
            `;
        }
    }
    return mainHTML;
}



function updateItem(index){
    const id = `editItem${index}`;
    const inputTag = document.getElementById(id);
    shoppingList[index].itemName = inputTag.value;
    shoppingList[index].editmode = false;
    updateShoppingView()
}

