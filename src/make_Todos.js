
const modal = document.querySelector("#modal");
const openModal = document.querySelector("#addItem");


class ToDo{             //ToDo class makes the todo objects
  constructor (title,description,dueDate,priority){
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
  }
}

openModal.addEventListener("click", () => {    // add new todo item button and shows form modal
  modal.showModal();
});

function createTodo(e) {    //get values from form
  
  e.preventDefault();  // prevents auto page reload upon submission

  var title = document.querySelector('#title').value;
  var description = document.querySelector('#description').value;
  var dueDate = document.querySelector('#dueDate').value;
  var priority = document.querySelector('#priority').value;

  let todoItem = new ToDo(title, description, dueDate, priority); // call class and make todo object
  
  //todosArray.push(todoItem);   //add todo object to the array
  modal.close();
  return todoItem;
  
}


// export the todos array which contains our todos objects to 
//DOM.js so they can be added to the DOM

export { createTodo }  



