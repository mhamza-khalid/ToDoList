
function createProject(){

    const projectCard = document.createElement('div');   //create a card containing project name
    projectCard.classList.add('projectCard');

    const projectName = document.querySelector('#newProject').value;   //get the project name

    projectCard.innerHTML = projectName  // add the name to the card

    return projectCard;

}

export { createProject };