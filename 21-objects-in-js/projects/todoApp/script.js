
let tasks=[];
function AddTask(){
    let title=document.getElementById("title").value;
let description=document.getElementById("description").value;
let dueDate=document.getElementById("date").value;
// console.log(typeof dueDate)
// if title is empty  title="" then empty string cinsidred falsy and cndition would not work,so we use not operator to make this condition reverse.
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

function deleteTask(id){
    let getList=JSON.parse(localStorage.getItem("addTask"))
    console.log(getList,id);

   const remainItems=getList.filter((task,i)=>{
         return task.id!=id
    })
    console.log("remain items",remainItems)


    localStorage.setItem("addTask",JSON.stringify(remainItems))
    
    
  }



function displayTasks(){
  let tasks=JSON.parse(localStorage.getItem("addTask"))


  console.log("tasks",tasks);
//   const taskShowDiv=document.querySelector(".single-task")
//   console.log("taskShowDiv",taskShowDiv);

tasks.map((task,i)=>{
//   console.log(task)
let tableRow=`
<tr key={i}>
            <td>${task.title}</td>
            <td>${task.description}</td>
            <td>${task.dueDate}</td>
            <td><div style="display: flex;justify-content: center;align-items: center;"><input type="checkbox" name="" id=""></div></td>
            <td><button  onclick="updateTask(${task.id})">Update Task</button></td>
            <td><button onclick="deleteTask(${task.id})">Delete Task</button></td>
            
        </tr>
        `;
        
        
        document.querySelector(".signle-task").innerHTML+=tableRow
    })

  

}
displayTasks()








function updateTask(id){
  let storeTasks=JSON.parse(localStorage.getItem("addTask"))
  console.log("storeTasks",storeTasks)
 let index=storeTasks.findIndex(task=>task.id==id)
  console.log("findTask",index)


  let task=storeTasks[index]
  console.log("task",task)

  document.getElementById("title").value=task.title;
  document.getElementById("description").value=task.description;
  document.getElementById("date").value=task.dueDate;

}



















































































// function AddTask(title,description,dueData){
//     let task={
//         id: Math.random(),
//         title,
//         description,
//         dueData,
//         isCompleted:false,
//        }

//        tasks.push(task)
//        console.log(`task ${task.id} is added`)

// }
// function displayTasks(){
//     console.log(tasks)
// }

// function updateTask(id,title,description){

//     // console.log("id",id)
//     let getTask=tasks.find(task=>task.id==id)
//     // console.log("find task is",getTask)
//     getTask.title=title
//     getTask.description=description
//     console.log("finally updated get task",getTask)
// }

// function completeTask(id){

//     let getTask=tasks.find(task=>task.id==id)
//     getTask.isCompleted=true
//     console.log(`task ${getTask.title} is completed.`,getTask)

// }


// function deleteTask(id){
     
     
//     let findTask=tasks.find(task=>task.id==id)
//     let getTask=tasks.filter(task=>task.id!=id)

//     console.log(`task ${findTask.title} is deleted Successfully.`,getTask)

// }


// AddTask("JS","learn JS","4,2,2025")
// AddTask("TS","learn TS","4,2,2025")
// AddTask("learn React","learn react","4,2,2025")
// AddTask("learn NEXT","learn react","4,2,2025")
// displayTasks()
// let lastTask=tasks[tasks.length-1]
// updateTask(lastTask.id,"typescript","learn typescript")
// displayTasks()
// let firstTask=tasks[0]
// completeTask(firstTask.id)
// displayTasks()
// deleteTask(firstTask.id)


