//add task
const inputTask = document.getElementById("input-task");
const ulTasks = document.getElementById("list-of-task");
const addbtn = document.querySelector(".add-btn");

function addtask(){
    let taskname = inputTask.value ;
    if(!taskname){
        alert("please Enter Task ")
    }
    else{
        let li =document.createElement("li");
        let span= document.createElement("span");
        li.innerHTML= taskname;
        ulTasks.append(li)
        span.innerHTML="&times;";
        li.append(span);
    }
    inputTask.value= "";
    SavLocalStorge();
}

addbtn.addEventListener("click",addtask);
//check task
 ulTasks.addEventListener("click",(ev)=>{
    if(ev.target.tagName=== "LI"){
    ev.target.classList.toggle("checked");
    SavLocalStorge()
    }
    else if(ev.target.tagName==="SPAN"){
     ev.target.parentElement.remove();
     SavLocalStorge();
    }
 });

 // Enter 
 inputTask.addEventListener("keydown" , function(e){
    if(e.key === "Enter")
    {
        addtask();
    }
 })
 // LocalStorge Save 
 function SavLocalStorge(){
    localStorage.setItem("lists" , ulTasks.innerHTML)
 }
 function LoadTaskFormLocalStorge(){
   ulTasks.innerHTML = localStorage.getItem("lists");
 }

 LoadTaskFormLocalStorge();
 