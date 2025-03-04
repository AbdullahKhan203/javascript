const username = 'Anurag'
let userAge = 25
var a = 50


debugger
function subtract() {
  const x = 15
  const y = 18
  console.log(x - y)
  console.log(username)

  function child(){
    const childName='Golu';
    console.log(childName);
    console.log(y)

    {
        const num1=78;
        console.log(num1)
    }
    
    function grandChild(){
        const grandChild='molu';
        console.log(grandChild);
        
    }
    grandChild()
    
    
}
  child()
}

subtract()

console.log('Program Ended')