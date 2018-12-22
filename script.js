let btn = document.querySelector('button');
let list = document.querySelector('ul');


function getVal(){
    let item = document.querySelector('input').value;
    let newLi=document.createElement('li');
    newLi.textContent=item;
    list.appendChild(newLi);
}

btn.addEventListener('click', getVal);
