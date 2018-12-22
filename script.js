let btn = document.querySelector('button');
let list = document.querySelector('ul');


function getVal(){
    let input = document.querySelector('input');
    item=input.value;
    let newLi=document.createElement('li');
    newLi.textContent=item;
    list.appendChild(newLi);
    input.value='';
}

btn.addEventListener('click', getVal);
