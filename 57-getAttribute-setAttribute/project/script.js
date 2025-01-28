
function changeTheDay(){
    console.log("function is working");
    let mainDiv=document.querySelector('.main')
    // console.log(mainDiv)
    if(mainDiv.style.justifyContent=="start"){
        mainDiv.style.justifyContent="end" ;
        mainDiv.style.backgroundImage="url('./images/night.jpg')";
    document.querySelector('.inner').style.background="black"
}else{
    mainDiv.style.justifyContent="start"
    mainDiv.style.backgroundImage="url('./images/day.jpg')";
    document.querySelector('.inner').style.background="#ebbd47"
}



}