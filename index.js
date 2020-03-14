//IMPORT OF FILES

import CurrentDate,{Time} from './time.js';

// DOM VARIABLES

const button  = document.querySelector('button.button i');
const list    = document.querySelector('#list');
const newTodo = document.querySelector('input');
const dateP   = document.getElementById('date-p');
const timeH   = document.querySelector('.timeH');

//VARIABLES FOR FUNCTIONALITY

const trash = 'fas fa-trash delete';

//get the key of a certain value from localstorage
const getKey= (value)=>{
    var key;
    if(localStorage.length === 0) return ' ';
    //if it's not then find key using a specific count
     else{
        var keyStored=Object.keys(localStorage);
        var itemCount=0;
        while(itemCount < localStorage.length){
            if(localStorage.getItem(keyStored[itemCount]) === value){
                key=keyStored[itemCount];//retrieve specific key
                return key;
            }
            else itemCount++;
        }
      }

    return 'Key not found!';
}
//create a new li
const initEl= (el)=>{
    var li = document.createElement("li");
        li.setAttribute('id', "item");

        // add span to li tag
        var span =  document.createElement("span");
        var button=document.createElement('button');
        span.setAttribute('class',trash);
        span.setAttribute('id', 'trash');
        button.setAttribute('id', 'checkmark');
        //appending children to li
        li.appendChild(button);
        li.appendChild(span);
        //add text to li tag
        li.append(document.createTextNode(el));
    
    return li;
}

//RETRIEVE ALL SAVED TODOS FROM LOCALSTORAGE
const getTodos= ()=>{
    let todos=[];//array of todos
    
  //check if local storage is empty. if it is then return an empty list
    if(localStorage.length === 0) return todos;
  //if it's not then find key using a specific count
    else{

        var keyStored=Object.keys(localStorage);
        var itemCount=0;

        while(itemCount < localStorage.length){
            todos.push(localStorage.getItem(keyStored[itemCount]));
            itemCount++;
        }
        return todos;
    }
}

//DISPLAY TODOS FROM LOCALSTORAGE
const displayExistingTodos=()=>{
    let items=getTodos();
    for (var item of items){
        var li=initEl(item);
        list.append(li);
    }
}
displayExistingTodos();

//CLEAR INPUT FIELD AFTER SUBMITTING TODO
const clearInput= ()=>{
    newTodo.value=" ";
}
//function add to do
    //in local storage
    //helper function to get the latest index of todos
    const getNumber= todos=>{
        let max=0;
        for(var todo of todos){
            let num=Number(todo[todo.length-1]);
            if(num> max){
                max=num;
            }
                
        }
        return max;
    } 
    const addItem= todo => {
        
        const key="todo";//for localstorage
        let count;//to change key of localstorage dynamically

        if(localStorage.length === 0){
            count=0;
            localStorage.setItem(`${key}${count}`,todo);

        }else{
            // there is a bug here!!!

            const keys=Object.keys(localStorage);
            let lastkey=getNumber(keys);
            count= lastkey+1;
            localStorage.setItem(`${key}${count}`,todo);      
        }
    };
    //in page
    function addTodo(){
        if(newTodo.value == ' ') {
            alert('Please enter something on the input field');
        }
        else{
            addItem(newTodo.value);
            list.append(initEl(newTodo.value)); 
            clearInput();
        } 
    }
//function to delete a todo
    //in local storage
    function deleteTodo(todo){
        var value=getKey(todo);
        localStorage.removeItem(value);

    }
//EVENT LISTENERS

button.addEventListener('click',addTodo);
newTodo.addEventListener('keydown', function(event){
     
    var keyPressed = event.which || event.keyCode;
    if(keyPressed  === 13){
        if(newTodo.value !== " "){
            addTodo();
        }else{
            alert('Please enter something on the input field');
        }
    }
    else{
        return;//also do not do anything if the key is not "enter"
    }
});
// event to delete a todo
list.addEventListener('click',(event)=>{
    if(event.target.tagName.toLowerCase() === "span"){
        var li=  event.target.parentNode;
        var value = event.target.parentNode.textContent;
        deleteTodo(value);
        list.removeChild(li);
    }
});
// event to mark todo as completed
list.addEventListener('click',function(){ 
    if(event.target.tagName.toLowerCase() === "button"){
         var li=  event.target.parentNode;
         var button=event.target;
         button.classList.toggle('bg');
        li.classList.toggle('line');
    }
});

//DISPLAY DATE AND TIME

function displayDate(){
    let today= new Date();
    const date= new CurrentDate();
    dateP.innerHTML+=`${date.getDay(today.getDay()+1)},  ${date.getMonth(today.getMonth()+1)} ${today.getDate()}, ${today.getFullYear()}`;
}
function displayTime(){
    let presentDay= new Date();
    let time= new Time(presentDay.getHours(), presentDay.getMinutes(), presentDay.getSeconds());
    timeH.innerHTML=time.getTime();
}
setInterval(displayTime, 1000);
displayDate();