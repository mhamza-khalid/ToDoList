import { createTodo } from "./make_Todos";
import { addColor } from "./priority_Colors";
import { createButton } from "./expandButton";
import { addDeleteButton } from "./deleteTodo";
import { createEditButton } from "./editButton";
import { createProject } from "./addProjects";
import './style.css';

const sideBar = document.querySelector('#sideBar');
const addItem = document.querySelector('#submitProject');

const cardHolder = document.querySelector('#todoCards');  //parent card holder in which todo cards are added
 
const closeModal = document.querySelector(".form");

let array = [];  // global array containing our todo objects

//When form is submitted, call the createTodo function
// This returns a todo object that is pushed into the global array
//then call addDetails which injects todo object properties into the DOM for display

closeModal.addEventListener("submit", (e)=>   
{
    let toDo = createTodo(e);
    console.log(toDo);
    array.push(toDo);
    console.log(array);
    
    cardHolder.appendChild(addDetails(toDo));

    closeModal.reset();   //clears form history
    addColor(array);      //adds color to cards depending on priority
});

/*addItem.addEventListener('click', ()=>{
    const content = createProject();

    if(content.innerHTML === ''){
        return
    }
    else{
        sideBar.appendChild(content);
    }
})*/


function addDetails(toDo) {    //create divs, populate them and append to DOM

    
    //var toDoArray = array;

    const templateTodo = document.createElement('div');  // create and append title, priority etc to templateTodo
    const title = document.createElement('div');
    const date = document.createElement('div');
    const description = document.createElement('div');
    const priority = document.createElement('div');

    templateTodo.classList.add('color');
    templateTodo.classList.add('templateTodo');

    title.innerHTML = '<strong>Title</strong>:' + ' ' + toDo.title;
    description.innerHTML =  '<strong>Description:</strong><br><textarea class="description2" rows="6" cols="40" placeholder="Notes">' + toDo.description + '</textarea>'
    date.innerHTML =  '<strong>Due Date:</strong>' + ' ' + toDo.dueDate;
    priority.innerHTML =  '<strong>Priority:</strong>' + ' ' + toDo.priority;


    date.appendChild(createButton());     // adds a button to expand the cards next to date area 
    date.appendChild(addDeleteButton(array));   //adds a delete/done button to remove todo item

    date.appendChild(createEditButton());   // adds a button to edit a todo item

    templateTodo.appendChild(title);
    templateTodo.appendChild(date);
    templateTodo.appendChild(description);
    templateTodo.appendChild(priority);
    

    return templateTodo;

}











