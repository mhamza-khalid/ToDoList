import { createButton } from "./expandButton";
import { addDeleteButton } from "./deleteTodo";
//import { addColor } from "./priority_Colors";


let editModal = document.querySelector('#editModal');
let closeModal = document.querySelector('.editModal');

var mainParent;
var todoArray = [];

function createEditButton(){    // make an option for user to edit a todo
    
    const editButton = document.createElement('button');
    editButton.innerHTML = 'Edit';
    editButton.classList.add('editButton');
    editButtonLogic(editButton);
    return editButton;
}

function editButtonLogic(editButton){      

    editButton.addEventListener('click', (e)=>{       // when click edit, open modal to allow editing 
        /*let x = e.target.parentNode;
        let p = x.parentNode;
        let ch1 = p.childNodes[0];
        let title = prompt('Enter New Title');
        ch1.innerHTML = '<strong>Title</strong>:' + ' ' + title;*/ 

    
        let element = e.target.parentNode;
        let parent = element.parentNode;  // the todo card (parent) has 4 children, the title, the due date, the description,
        mainParent = parent                          // the priority
        
        let fullTitle = mainParent.childNodes[0];
        let title = fullTitle.innerHTML.slice(23).trim();  // get the orignal title
        //console.log(title)

        let fullDate = mainParent.childNodes[1];
        let date = fullDate.innerHTML.slice(26,37).trim()  // get the orgnal date
        //console.log(date)   
        
        let fullPriority = mainParent.childNodes[3];   // get the orignal Priority
        let priority = fullPriority.innerHTML.slice(26).trim();
        //console.log(priority);

        let titleInput = document.querySelector('#newTitle');
        let newDueDate = document.querySelector('#newDueDate');
        let newPriority = document.querySelector('#newPriority');
       
 
        titleInput.value = title;   // add orignal values to the edit modal
        newDueDate.value = date;
        newPriority.value = priority;

        editModal.showModal();    // open modal to allow user to enter new values

        //editedDetails(parent);
         
        closeModal.addEventListener("submit", (e)=>{    // when user is done editing and clicks done button
            e.preventDefault();
    
            let title = document.querySelector('#newTitle').value;
            let date = document.querySelector('#newDueDate').value;
            let priority = document.querySelector('#newPriority').value;
             
            let changeTitle = mainParent.childNodes[0];
            let changeDate = mainParent.childNodes[1];
            let changePriority = mainParent.childNodes[3];
            
            changeTitle.innerHTML = '<strong>Title</strong>:' + ' ' + title;
            changeDate.innerHTML = '<strong>Due Date:</strong>' + ' ' + date;

            changeDate.appendChild(createButton());     // adds a button to expand the cards next to date area 
            changeDate.appendChild(addDeleteButton());   //adds a delete/done button to remove todo item
            changeDate.appendChild(createEditButton());   // adds a button to edit a todo item

    
            changePriority.innerHTML = '<strong>Priority:</strong>' + ' ' + priority;

            changeColor(changePriority)

            editModal.close();
            })
    });

}

function changeColor(changePriority){   // change the priority color logic
                                         // downside: couldn't use the change color module, lesser code reusabillity
    let prio = changePriority;
    console.log(prio);
    console.log(mainParent)

    if( prio.textContent.includes('High')){
        mainParent.classList.remove('lowPriorityColor')
        mainParent.classList.remove('mediumPriorityColor')
        mainParent.classList.add('highPriorityColor')
     }
     else if( prio.textContent.includes('Medium')){
        mainParent.classList.remove('lowPriorityColor')
        mainParent.classList.remove('highPriorityColor')
        mainParent.classList.add('mediumPriorityColor')

    }
    else if(prio.textContent.includes('Low')){
        mainParent.classList.remove('highPriorityColor')
        mainParent.classList.remove('mediumPriorityColor')
        mainParent.classList.add('lowPriorityColor')
    }
    
}

export { createEditButton }