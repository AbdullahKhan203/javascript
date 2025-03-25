let tasks=[];
let addTaskBtn=document.querySelector('#addButton')

console.log("addTaskBtn",addTaskBtn)


function displayTasks(){
    let tasks=JSON.parse(localStorage.getItem('addTask'))
    // console.log(tasks)
    tasks.map((task,i)=>{
let tableRow=`
<tr key={i}>
            <td class="title">${task.title}</td>
            <td class="description">${task.description}</td>
            <td class="dueDate">${task.dueDate}</td>
            <td><div style="display: flex;justify-content: center;align-items: center;"><input class='dueDateCheckBox' type="checkbox" name="" id=""></div></td>
          <td>  <button class='updateBtn' data-id='${task.id}'>Update Task</button></td>
         <td><button class='deleteBtn'  data-id='${task.id}'>Delete Task</button></td>
        
            
        </tr>
        `;

        // <td><button  id="update-btn"  onclick="anotherUpdateButton(${task.id})">Update Task</button></td>
        // <td><button class='deleteBtn' onclick="deleteTask(${task.id})">Delete Task</button></td>
        // <td><button class='deleteBtn'  data-id='${task.id}'>Delete Task</button></td>
        // <td>  <button onclick="anotherUpdateButton(${task.id}, event)">Update Task</button></td>

        document.querySelector(".signle-task").innerHTML+=tableRow
    })   

}
// window.onload=function() {
   
// }
// displayTasks()
window.addEventListener('load',displayTasks)





function AddTask(){
    let title=document.querySelector("#title").value;
    let description=document.querySelector("#description").value;
    let dueDate=document.querySelector("#date").value;
if(!title){
 alert("plz enter title")
 return
}
if(!description){
 alert("plz enter description")
 return
}
if(!dueDate){
 alert("plz enter dueDate")
 return
}

const myTask={
    id:Math.random(),
    title,
    description,
    dueDate,
    isComplete:false,
    datePassed:false
}



 let getTasks=JSON.parse(localStorage.getItem("addTask")) || []
 if(getTasks.length>0){
    getTasks.push(myTask)
    localStorage.setItem("addTask",JSON.stringify(getTasks))
  
 }else{
    tasks.push(myTask)
    localStorage.setItem("addTask",JSON.stringify(tasks))
 }
 document.getElementById("title").value="";
 document.getElementById("description").value="";
 document.getElementById("date").value="";
}

addTaskBtn.addEventListener('click',()=>{
    console.log("add task buton clicked")
    AddTask()
    document.querySelector(".signle-task").innerHTML="";
    displayTasks()

})



// function displayTasks(){
//     let getTask=JSON.parse(localStorage.getItem('addTask'))
//     console.log(getTask)
// }
// displayTasks()





function deleteTask(id){
    console.log('delete button clicked',id)
    let getList=JSON.parse(localStorage.getItem("addTask"))
    console.log(getList,id);

   const remainItems=getList.filter((task,i)=>{
         return task.id!=id
    })
    console.log("remain items",remainItems)


    localStorage.setItem("addTask",JSON.stringify(remainItems))
    
    
  }



  let deleteButton=document.querySelector('#deleteBtn')
console.log("deleteButton",deleteButton)

// let finalUpdateBtn=document.querySelector('.finalUpdateButton')
// console.log("finalUpdateBtn",finalUpdateBtn)
let tableBody=document.querySelector('.signle-task')

tableBody.addEventListener('click',(e)=>{
    if(e.target &&  e.target.classList.contains('deleteBtn')){
        // const row = e.target.closest('tr'); // Assuming the delete button is inside a table row
        // row.remove(); // Deletes the entire row
        // console.log('Todo deleted');
        let taskId=e.target.getAttribute('data-id')
        console.log('Task ID while deleting:', taskId);
        if (taskId) {
            console.log('Before delete:', document.querySelector('.signle-task')); 

            deleteTask(taskId); // Now it has the right id

            console.log('After delete:', document.querySelector('.signle-task')); 

            document.querySelector('.signle-task').innerHTML = ''; // Clear the container
            displayTasks(); // Redisplay updated task list
        } else {
            console.log('Task ID not found');
        }



    }


    if(e.target && e.target.classList.contains('updateBtn')){
        let taskId=e.target.getAttribute('data-id')
        console.log('Task ID while updating:', taskId);
        if (taskId) {
        if(e.target && e.target.classList.contains("cancelUpdateTask")){
            cancelUpdateTask()
            e.target.innerText="Update Task";
            e.target.classList.toggle("cancelUpdateTask")
            document.querySelector('.finalUpdateButton').style.display="none"
        }else{
            updateTask(taskId)
            console.log("target element wihle updating",e.target)
         e.target.innerText="cancel update task"
         e.target.classList.toggle("cancelUpdateTask")
         document.querySelector('.finalUpdateButton').style.display="block"

        }
           

        
    
        } else {
            console.log('Task ID not found');
        }

      
    }

})


function updateTask(taskId){
    let getTasks=JSON.parse(localStorage.getItem('addTask'))
    console.log("getTask in updating block",getTasks);
    
    let editAbleTask=getTasks.filter((task)=>{
      return task.id==taskId
    })
    console.log("editAbleTask",editAbleTask)
    document.getElementById('title').value=editAbleTask[0].title
    document.getElementById('description').value=editAbleTask[0].description
    document.getElementById('date').value=editAbleTask[0].dueDate

    document.querySelector('.todo-main').addEventListener('click',(e)=>{
        if(e.target && e.target.classList.contains('finalUpdateButton')){
          let title = document.getElementById('title').value;
          let description = document.getElementById('description').value;
          let dueDat = document.getElementById('date').value;


          finalUpdateTask(taskId,title,description,dueDat)
        }
    })
}
function cancelUpdateTask(){
    document.querySelector('#title').value=""
    document.querySelector('#description').value=""
    document.querySelector('#date').value=""


}


function finalUpdateTask(taskId,ti,des,da){
      let getTasks=JSON.parse(localStorage.getItem('addTask'))
      console.log("getTasks in finalUpdateTask function",getTasks)
      
      let finalIndex;
      let editAbleTask= getTasks.filter((task,i)=>{
        finalIndex=i;
        return task.id==taskId
      })
      console.log("finalIndex",finalIndex)

      editAbleTask[0].title=ti
      editAbleTask[0].description=des
editAbleTask[0].dueDate=da

getTasks[finalIndex]=editAbleTask[0]

 localStorage.setItem("addTask",JSON.stringify(getTasks))

 document.querySelector('.signle-task').innerHTML = ''; // Clear the container
 displayTasks(); // Redisplay updated task list

      console.log("editAbleTask in finalUpdateTask function",editAbleTask)
     
}

// let topFields=document.querySelector('.todo-main')

// topFields.addEventListener('click',(e)=>{
//     if(e.target && e.target.classList.contains('finalUpdateButton')){
         
//     }
// })



