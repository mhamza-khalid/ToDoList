
function createButton(){   // adds a button to exapnd the todo item
    
    const buttonExpand = document.createElement('button');
    buttonExpand.classList.add('buttonExpand');
    buttonExpand.innerHTML = "<strong>⌄</strong>"
    expandButton(buttonExpand);
    return buttonExpand

}

function expandButton(button){   // expand the card functionallity
     
    let buttonExpand = button;
    buttonExpand.addEventListener('click', (event)=>{

           let element = event.target.parentElement;
           let card = element.parentElement;
           card.parentElement.classList.toggle('expandCard');
           
    })
}


export {createButton}