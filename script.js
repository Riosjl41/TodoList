//create selectors
let btnEnter = document.querySelector('button');
let list = document.querySelector('ul');
list.setAttribute('class','list-group list-group');
let input = document.querySelector('input');


//function to add item to list
function addItem(){
    //create new list item
    let newLi=document.createElement('li');
    newLi.setAttribute('class','list-group-item');
    //get input value
    let item=input.value;
    //add input to list item
    newLi.textContent=item;
    //clear input field
    input.value='';
    //create check button
    let chkBtn = document.createElement('button');
    //create delete button
    let delBtn = document.createElement('button');
    //set strikethrough class for check button
    chkBtn.setAttribute('class', 'btn-outline-success btn-sm')
    //set delete class for delete button
    delBtn.setAttribute('class','del btn-outline-danger btn-sm');
    //add text to buttons
    chkBtn.innerHTML=' &#10003;';
    delBtn.innerHTML='X';
    //add buttons to list item
    newLi.appendChild(chkBtn);
    newLi.appendChild(delBtn);
    //add list item to list
    list.appendChild(newLi);

}

//runs function to add new item for when enter button is clicked
btnEnter.addEventListener('click', addItem);
   
//handle click event for when delete button is clicked 
list.addEventListener('click', function(e){
        //check that the button is being clicked
        if(e.target.className=='del btn-outline-danger btn-sm'){
            const delLi=e.target.parentElement;
            list.removeChild(delLi);
        }
        if(e.target.className=='btn-outline-success btn-sm'){
            const chkLi=e.target.parentElement;
            chkLi.setAttribute('class','list-group-item chk');
        }
})


