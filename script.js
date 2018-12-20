let btn = document.querySelector('button');
let list = document.getElementById('ul');



function getVal(){
    let item = document.querySelector('input').value;
    //console.log(item);
    let newLi=document.createElement('LI');
    list.appendChild(newLi);
}

btn.addEventListener('click', getVal);
