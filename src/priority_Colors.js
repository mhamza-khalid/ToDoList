
function addColor(objectArray1){

    let objectArray = objectArray1;  // objectArray contains the todo objects

    const card = document.querySelectorAll('.color');
    
    let cardobjectArray = Array.from(card);   // contains all the todo card elements

    for (let i = 0; i < objectArray.length; i++){
          //console.log(objectArray.length);

          if( objectArray[i].priority === 'High'){
             cardobjectArray[i].classList.add('highPriorityColor')
          }
          else if( objectArray[i].priority === 'Medium'){
            cardobjectArray[i].classList.add('mediumPriorityColor')
         }
         else if( objectArray[i].priority === 'Low'){
            cardobjectArray[i].classList.add('lowPriorityColor')
         }
    }
}

export { addColor } //export the function to be used and add colors according to priority;