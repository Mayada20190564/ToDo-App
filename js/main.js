let taskCaed = document.querySelector('#taskCard');
let btnAdd = document.querySelector('#btnAdd');
let btnClose = document.querySelector('.close');
let btnClose2 = document.querySelector('#close');
let taskInput = document.querySelector('#taskInput');
let AllTasks = document.querySelector('.allTasks');
let noTasks = document.querySelector('.noTasks');
let btnAddNow = document.querySelector('.addNow');
let Valid = document.querySelector('.invalid');
let btnValid = document.querySelector('.invalid button')

// === show task card====
let showCard = ()=>{
    taskCaed.classList.add('show');
}
btnAdd.addEventListener('click' , showCard);

// === close task card
let closeCard = ()=>{
    taskCaed.classList.remove('show');
}
btnClose.addEventListener('click' , closeCard);
btnClose2.addEventListener('click' , closeCard);
// === Add Task ======
let addTask = ()=>
{
    let taskData = taskInput.value;
    // input validation ===
    if(taskData.trim() == "" || taskData.length < 3 || taskData.length > 20){
        Valid.classList.remove('hide');
    }else{
       AllTasks.innerHTML += `<div class=" newTask alert alert-info">
       <h5 class="d-inline text-center"> ${taskData}</h5>
       <i class="far fa-times-circle float-right delete"></i>
      </div>`
      noTasks.classList.add('hide');
      closeCard();
    }
    taskInput.value = "";
}
btnAddNow.addEventListener('click', addTask);
// === close aler validation =====
let closeAlert = ()=>{
    Valid.classList.add('hide');
}
btnValid.addEventListener('click' , closeAlert);

// ==== delete task ====
document.addEventListener('click' , (e)=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
    if(AllTasks.children.length == 0){
        noTasks.classList.remove('hide');
    }
  
})

// === Check / unCheck ==
document.addEventListener('click' , (e)=>{
    if(e.target.classList.contains('newTask')){
        e.target.classList.toggle('check');
    }
})
// .childElementCount >> return number of children
// .children >> return array fo children (.children.length return number...)
// .childNods >> 
// .firstElementChild >> return element
// .lastElementChild >> return element

