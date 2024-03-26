function addNewItem(){
    shoppingList.push({itemName: NewItem.value, isFound: false,})
    NewItem.value = '';
    updateShoppingView();
}

