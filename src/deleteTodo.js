 

function addDeleteButton(){     //adds a button to delete a todo item

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '✔';
    deleteButton.classList.add('deleteButton');
    deleteItem(deleteButton);
    return deleteButton;
}


function deleteItem(button){        // delete item functionallity

   let delButton = button;
   delButton.addEventListener('click', (event)=>{
         var item = event.target.parentElement;
         var parent = item.parentElement;
         parent.classList.add('hide');
   })

}

export { addDeleteButton }