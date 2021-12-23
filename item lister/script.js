// let box=document.getElementById('box');
// box.addEventListener('mouseenter', runEvent);

//  function runEvent(e){
//           console.log('Event Type: '+e.type);
//           console.log(e.target.value);
//           document.getElementById('output').innerHTML='<h3>'+e.target.value+'<h3>';
//  }

//  function runEvent(e){
//     console.log('Event Type: '+e.type);
//     console.log(e.target.value);
//     document.getElementById('output').innerHTML='<h3>'+e.target.value+'<h3>';
// }


// itemInput.addEventListener('keydown', runEvent);



//algorith for item lister

//variables
//create a variable for the input
let input= document.querySelector('input[type="text"]')
let form=document.querySelector('form');
//console.log(input);
//console.log(form);

//create a variable for the button
let button=document.getElementById('button')
//console.log(button);




//add event listneer to the button 
// button.addEventListener('click', function(){
// console.log(input.value)
// }); 
button.addEventListener('click', addItem());

function addItem(){
    runEvent();
}

//  input.addEventListener('keydown', runEvent);



function runEvent(){
    input.addEventListener('keydown', function(e){
    let li=document.createElement('li');
    let listInput=li.innerHTML='<li>'+e.target.value+'<li>';
    //console.log(listInput);  
    li.appendChild(listInput);
    });

   
   
    
    //listInput.setAttribute ('class', 'list-group-item');
    //document.querySelector('ul').appendChild(li);
    

}
/*function for inserting listed item
function addInput(e)
console.log(e.target.value)
 let inputText document.getElementsByClassName('list-group-item').innerHTML='<li>'+e.target.value+'<li>';
 set attribute
 append child to UL
*/