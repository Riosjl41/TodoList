//create selectors
let btnEnter = document.querySelector('button');
let list = document.querySelector('ul');
let input = document.querySelector('input');


//function to add item to list
function addItem(){
    //create new list item
    let newLi=document.createElement('li');
    //get input value
    let item=input.value;
    //add input to list item
    newLi.textContent=item;
    //clear input field
    input.value='';
    //create delete button
    let delBtn = document.createElement('button');
    //set delete class for each button
    delBtn.setAttribute('class','del');
    //add text to button
    delBtn.innerHTML='Delete';
    //add delete button to list item
    newLi.appendChild(delBtn);
    //add list item to list
    list.appendChild(newLi);

}

//runs function to add new item for when enter button is clicked
btnEnter.addEventListener('click', addItem);
   
//handle click event for when delete button is clicked 
list.addEventListener('click', function(e){
        //check that the button is being clicked
        if(e.target.className=='del'){
            const delLi=e.target.parentElement;
            list.removeChild(delLi);
        }
})


