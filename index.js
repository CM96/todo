// DOM VARIABLES

const button  = document.querySelector('button.button i');
const list    = document.querySelector('#list');
const newTodo = document.querySelector('input');
const dateP   = document.getElementById('date-p');

//VARIABLES FOR FUNCTIONALITY

const trash = 'fas fa-trash delete';
var key="todo";//for localstorage
var count=0;//to change key of localstorage dynamically

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
        // var checkbox=document.createElement('input');
        span.setAttribute('class',trash);
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
};
displayExistingTodos();

//CLEAR INPUT FIELD AFTER SUBMITTING TODO
const clearInput= ()=>{
    newTodo.value=" ";
}
//function add to do
    //in local storage
    const addItem= todo => {
        if(localStorage.length === 0){
            localStorage.setItem(key,todo);
            count++;

        }else{
            // key+=count;//append a number at the end of key
            localStorage.setItem(`${key}${count}`,todo);            
            count++;
        }
    };
    //in page
    function addTodo(){
        if(newTodo.value == ' ') {
            alert('Please enter something on the input field');
        }
        else{
            list.append(initEl(newTodo.value));
            addItem(newTodo.value);
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
    if(event.target.tagName.toLowerCase() === "li"){
         var li=  event.target;
        li.classList.toggle('line');
    }
});

//date
const day =(index)=>{
    var day;
    switch(index){
        case 1:
            day= 'Sunday';
            break;
        case 2:
            day= 'Monday';
            break;
        case 3:
            day= 'Tuesday';
            break;
        case 4:
            day= 'Wednesday';
            break;
        case 5:
            day= 'Thursday';
            break;
        case 6:
            day= 'Friday';
            break;
        case 7:
            day= 'Saturday';
            break;
    }
    return day;

}
const month= (index)=>{
    var month;
    switch(index){
        case 1:
            month= 'January';
            break;
        case 2:
            month= 'Febuary';
            break;
        case 3:
            month= 'March';
            break;
        case 4:
            month= 'April';
            break;
        case 5:
            month= 'May';
            break;
        case 6:
            month= 'June';
            break;
        case 7:
            month= 'July';
            break;
        case 8:
            month= 'August';
            break;
        case 9:
            month= 'September';
            break;
        case 10:
            month= 'October';
            break;
        case 11:
            month= 'November';
            break;
        case 12:
            month= 'December';
            break;
    }
    return month;
}
//event to display current date
function displayDate(){
    var today= new Date();
    dateP.innerHTML+=`${day(today.getDay()+1)} ${today.getDate()}, ${month(today.getMonth()+1)} ${today.getFullYear()}`;
}