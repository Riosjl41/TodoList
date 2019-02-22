//////////CREATE SELECTORS
const btnEnter = document.querySelector('#addBtn');
const btnClear = document.querySelector('#clrBtn')
const list = document.querySelector('ul');
list.setAttribute('class','list-group list-group');
const input = document.querySelector('input');


//////////EVENT HANDLERS

//runs function to add new item for when "add" button is clicked
btnEnter.addEventListener('click', addItem);

//runs function to clear list
btnClear.addEventListener('click', clrItems);

//runs function to get local storage items once DOM is loaded
document.addEventListener('DOMContentLoaded', getItems);


//function to add item to list
function addItem(e){
    //check to see that input isn't empty
    if(input.value!== ''){
    //create new list item
    let newLi=document.createElement('li');
    newLi.setAttribute('class','list-group-item');
    //get input value
    let item=input.value;
    //add input to list item
    newLi.textContent=item;
    //create delete button
    let delBtn = document.createElement('button');
     //create check button
    let chkBtn = document.createElement('button');
    //set delete class for delete button
    delBtn.setAttribute('class','del btn-outline-danger btn-sm float-right ml-1');
     //set strikethrough class for check button
    chkBtn.setAttribute('class', 'btn-outline-success btn-sm float-right');
    //add text to buttons
    chkBtn.innerHTML='Complete';
    delBtn.innerHTML='Delete';
    //add buttons to list item
    newLi.appendChild(delBtn);
    newLi.appendChild(chkBtn);
    //add list item to list
    list.appendChild(newLi);

     //store in local storage
     storeItem(input.value);
    //clear input field
    input.value='';
    //prevent submitting of form
    e.preventDefault();
    }
}


//check for and create items from local storage
function getItems(){
    let items;
    if(localStorage.getItem('items') === null){
        items= [];
    }
    else{
        items = JSON.parse(localStorage.getItem('items'));
    }

    items.forEach(function(item){
        //create new list item
     //create new list item
     let newLi=document.createElement('li');
     newLi.setAttribute('class','list-group-item');
     //add input to list item
     newLi.textContent=item;
     //create delete button
     let delBtn = document.createElement('button');
      //create check button
     let chkBtn = document.createElement('button');
     //set delete class for delete button
     delBtn.setAttribute('class','del btn-outline-danger btn-sm float-right ml-1');
      //set strikethrough class for check button
     chkBtn.setAttribute('class', 'btn-outline-success btn-sm float-right');
     //add text to buttons
     chkBtn.innerHTML='Complete';
     delBtn.innerHTML='Delete';
     //add buttons to list item
     newLi.appendChild(delBtn);
     newLi.appendChild(chkBtn);
     //add list item to list
     list.appendChild(newLi);
    })

}

//function to add item to local storage
function storeItem(item){
    let items;
    if(localStorage.getItem('items') === null){
        items= [];
    }
    else{
        items = JSON.parse(localStorage.getItem('items'));
    }

    items.push(item);

    localStorage.setItem('items', JSON.stringify(items));
}


//runs function to add new item for when "Enter" key is clicked on keyboard
input.addEventListener("keyup", function(e) {
    // Cancel the default action, if needed
    event.preventDefault();
    if (event.keyCode === 13) {
      // Trigger function
      addItem();
    }
});

//handle click event for when delete/check button is clicked 
list.addEventListener('click', function(e){
        //check that the button is being clicked
        if(e.target.classList.contains('del')){
            const delLi=e.target.parentElement;
            list.removeChild(delLi);
        }
        else if(e.target.classList.contains('btn-outline-success')){
            const chkLi=e.target.parentElement;
            chkLi.classList.toggle('chk');
        }
})

//function to clear list
function clrItems (e){
    e.preventDefault();
    //Clear out ul 
    list.innerHTML='';
}




