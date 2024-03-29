'use strict'

let input=document.getElementById('input1');
let clickon=document.getElementById('buttonclick');
let list2=document.getElementById('list');
let deleteitem1=document.getElementById('deleteitem');
let formElement=document.getElementById('formtext');

clickon.addEventListener('click',function(){
    
    let infoText = input.value;
    // console.log(info);
    if(infoText==='')return;

    let item=document.createElement('li');
    item.textContent = infoText;

   
    let item2=document.createElement('button');
    item2.textContent='delete item';
    item2.addEventListener('click',function(){
        item.remove();
        item2.remove();

    })

    list2.appendChild(item);
    list2.appendChild(item2);

    input.value='';
})

deleteitem1.addEventListener('click',function(){
    list2.innerHTML='';
})



