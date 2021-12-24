let form =document.getElementById('addForm');
let itemList= document.getElementById('items');


//Form submmit event

form.addEventListener('submit', addItem);

//Add Item'

function addItem(e){
e.preventDefault();
let input= document.querySelector('input[type="text"]').value
let li=document.createElement('li');
li.innerHTML='<li>'+input +`<button class= "btn btn-danger btn-sm float-right delete">x<button>`+ '<li>';
//console.log(li)

li.classList.add('list-group-item');
itemList.appendChild(li);
}