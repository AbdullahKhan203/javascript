window.addEventListener('load',()=>{
    displayStoredTasksInInputField('description');
    findEmptyField();
    displayCheckboxStatusInCheckBox();
    cutTheText();
})

let tasks=[
//     {id:1,
//     isDone:false,
//     description:""
// },
//     {id:2,
//     isDone:false,
//     description:""
// },
//     {id:3,
//     isDone:false,
//     description:""
// },
]


function getTasks(){
// let getTasks=localStorage.setItem("myTasks",JSON.stringify(tasks))  || []
// console.log("tasks ",getTasks);
let getTasks=localStorage.getItem("myTasks") || null;

if(getTasks==null){
console.log("i think you are visit here first time");
let generateTasks=[
        {id:1,
        isDone:false,
        description:""
    },
        {id:2,
        isDone:false,
        description:""
    },
        {id:3,
        isDone:false,
        description:""
    },
    ]
// getTasks.push(generateTasks)
localStorage.setItem("myTasks",JSON.stringify(generateTasks))
let getTasks=JSON.parse(localStorage.getItem("myTasks"))
console.log(getTasks) 
return getTasks;
}else{
    console.log("you are old cummer");
    
    let getTasks=JSON.parse(localStorage.getItem("myTasks"))
    console.log(getTasks)
    return getTasks;
}

}
getTasks()

// function getTasks(){
//    let getTasks=JSON.parse(localStorage.getItem("myTasks"))
//    console.log("tasks get sucessfully from localStorage",getTasks);
//    return getTasks;
// }



// function addTasks(){

// }

function addDescription(desc,i){
    let gettedTasks=getTasks()
    // console.log("addDescription function working",gettedTasks);
    console.log(gettedTasks[i].description=desc);
    localStorage.setItem("myTasks",JSON.stringify(gettedTasks))

     
}

// addDescription("ali",2)



// let tasks=`
// <div class="task-div-${i}">
//         <div class="custom-checkbox">
//         <input class="radio"  type="checkbox" name="" id="radio" >
//         <label for="radio">
//             <img src="/assets/imgs/Vector-check-img.svg" alt="" height="15" width="15">
//         </label>
//     </div>
//         <input class="description" type="text" name="" id="" >
//     </div>
// `

function displayTasks(){
    for(let i=0;i<3;i++){
        let tasks=`
<div class="task-div" >
        <div class="custom-checkbox">
        <input class="radio radio-${i}"  type="checkbox" name=""  >
        <label for="radio">
            <img src="/assets/imgs/Vector-check-img.svg" alt="" height="15" width="15">
        </label>
    </div>
        <input class="description  input-${i}" type="text" name="" id="" >
    </div>`
        document.querySelector('.three-tasks').innerHTML+=tasks
    }
}
displayTasks()
// document.querySelector('.three-tasks').innerHTML=tasks

function displayStoredTasksInInputField(property){
     let getTasks=JSON.parse(localStorage.getItem('myTasks'))
      let tasks;
    if(getTasks.every(obj=>obj.hasOwnProperty(property))){
        tasks = getTasks.map((obj)=>obj[property])
    }
    console.log("tasks",tasks)

    for(let i=0;i<3;i++){
        document.querySelector(`.input-${i}`).value=tasks[i]
    }




    
}
// displayStoredTasksInInputField();

function findEmptyField(){
    let findField=JSON.parse(localStorage.getItem('myTasks'))
    console.log(findField);
         
   let isFieldEmpty=findField.map(obj=>obj['description']).some((elem)=>{
    return elem==""
 })
    console.log("isFieldEmpty",isFieldEmpty);

    

    let checkBoxes = document.querySelectorAll('.radio')
    if(isFieldEmpty){
            for(let x of checkBoxes){
                x.setAttribute("disabled","")
            }
        }else{
            for(let x of checkBoxes){
                x.removeAttribute("disabled")
            }
        // x.setAttribute("disabled","")

    }
    return isFieldEmpty;
    
}

console.log("findEmptyField",findEmptyField())







// document.addEventListener("DOMContentLoaded", function() {
//     let taskField = document.querySelector('.task-div');
//     console.log(taskField);
// });

let taskFields;
// setTimeout(()=>{
    taskFields = document.querySelector('.three-tasks');
    console.log(taskFields);
    
    taskFields?.addEventListener('change',(e)=>{
        // console.dir(e.target.element)
        if(e.target.type=="text"){
             console.log(e.target.value)
             if(e.target &&  e.target.classList.contains('description')){
                if(e.target.classList.contains('input-0')){
                    console.log("you writing in input 0",e.target.value);
                    addDescription(e.target.value,0)
                    displayStoredTasksInInputField('description');
                    findEmptyField();
                }else if(e.target.classList.contains('input-1')){
                    console.log("you writing in input 1",e.target.value);
                    addDescription(e.target.value,1)
                    displayStoredTasksInInputField('description');
                    findEmptyField();
                }else{
                    console.log("you writing in input 2",e.target.value);
                    addDescription(e.target.value,2)
                    displayStoredTasksInInputField('description');
                    findEmptyField();
                }
             }

        }


        if(e.target.type=="checkbox"){
            // console.log("check event is working",e.target.type,findEmptyField())
            if(e.target && e.target.classList.contains('radio-0')){
                console.log("you check the checkbox 0",e.target.checked)
                updateTheStatusOFCheckbox(e.target.checked,0)
                displayCheckboxStatusInCheckBox();
                cutTheText();
            }else if(e.target && e.target.classList.contains('radio-1')){
                console.log("you check the checkbox 1",e.target.checked)
                updateTheStatusOFCheckbox(e.target.checked,1)
                displayCheckboxStatusInCheckBox();
                cutTheText();
                
            }else{
                console.log("you check the checkbox 2",e.target.checked)
                updateTheStatusOFCheckbox(e.target.checked,2)
                displayCheckboxStatusInCheckBox();
                cutTheText();
                
            }

         
        }

        

      






    })
// })

// taskField.add


function updateTheStatusOFCheckbox(stat,i){
    let gettedTasks=getTasks()
    console.log("gettedTasks in updateTheStatusOFCheckbox ",gettedTasks);
    gettedTasks[i].isDone=stat
    console.log("gettedTasks in updateTheStatusOFCheckbox after updation",gettedTasks);
    localStorage.setItem("myTasks",JSON.stringify(gettedTasks))

}
// updateTheStatusOFCheckbox(true,0)

function displayCheckboxStatusInCheckBox(){
    let gettedTasks=getTasks()
    let stats=document.querySelectorAll('.radio')
    console.log("stats",stats[1].checked);
    let statuses=gettedTasks.map(obj=>{
        return obj.isDone;
    })
    console.log("statuses",statuses);
    
    for(let i=0;i<3;i++){
        stats[i].checked=gettedTasks[i].isDone
    }

    let ans=statuses.some(elem=>elem==true)
    console.log("ans",ans);

    let fields=document.querySelectorAll('.description')
    console.log("fields",fields);
    
    if(ans){
       for(let field of fields){
        field.setAttribute("disabled","")
       }
    }else{
        for(let field of fields){
         field.removeAttribute("disabled")
        }
    }
    
    
    
}
// displayCheckboxStatusInCheckBox()




// function cutTheText(){
//     let gettedTasks=getTasks()
//     let fields=document.querySelectorAll('.description')
//     console.log("fields in cutTheText()",fields);
    
//     console.log("gettedTasks in cutTheText() ",gettedTasks);
//     for(let i=0;i<3;i++){
//         if(gettedTasks[i].isDone){
//         fields[i].style.textDecoration="lineThrough"
//         }else{

//         }
//     }
    
// }
// cutTheText()

// function cutTheText() {
//     console.log("cutTheText() function is called");
    
//     let gettedTasks = getTasks();
//     let fields = document.querySelectorAll('.description');

//     console.log("fields in cutTheText()", fields);
//     console.log("gettedTasks in cutTheText()", gettedTasks);
//     let progress=0;
//     for (let i = 0; i < fields.length; i++) { // Use fields.length instead of 3
//         if (gettedTasks[i] && gettedTasks[i].isDone) { // Check if task exists
//             fields[i].style.textDecoration = "line-through"; // Corrected
//             progress+=33.33;
//             document.querySelector(".progress").style.width=progress+"%"
//         }else {
//             fields[i].style.textDecoration = "none"; // Remove strike-through if unchecked
//             progress-=33.33;
//             document.querySelector(".progress").style.width=progress+"%"
         
//         }
//     }
// }

function cutTheText() {
    let gettedTasks = getTasks();
    let fields = document.querySelectorAll('.description');
    let progress = 0; 

    console.log("fields in cutTheText()", fields);
    console.log("gettedTasks in cutTheText()", gettedTasks);

    let totalTasks = fields.length; 
    let completedTasks = 0; 

    for (let i = 0; i < totalTasks; i++) {
        if (gettedTasks[i] && gettedTasks[i].isDone) {
            fields[i].style.textDecoration = "line-through"; 
            completedTasks++; 
        } else {
            fields[i].style.textDecoration = "none"; 
        }
    }

    
    progress = (completedTasks / totalTasks) * 100; 
    document.querySelector(".progress").style.width = progress + "%"; 
     if(progress==0){
        document.querySelector('.instruction-one>p').innerText="Raise the bar by completing your goals!"
        document.querySelector('.instruction-two>p').style.display="block"
        document.querySelector('.instruction-two>p').innerText="Please set all the 3 goals!"
        document.querySelector('.instruction-two>p').style.visibility = "visible";
        document.querySelector('.instruction-three>p').innerText="“Move one step ahead, today!”"
    }else{
        document.querySelector('.instruction-one>p').innerText="Just a step away, keep going!"
        document.querySelector('.instruction-two>p').style.visibility = "hidden";
        document.querySelector('.instruction-three>p').innerText="“Keep Going, You’re making great progress!”"

     }
    console.log("Progress:", progress + "%");
}

cutTheText();


cutTheText();











