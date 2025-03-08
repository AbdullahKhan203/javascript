const maths={
    add: function(a,b){
        return a+b;
    },
    square:function(a){
        return a**a
    },
    sub:function(a,b){
        return a-b
    },
    // new and short way to make method.
    multi(a,b){
     return a*b;
    },
    cube(num){
      return num**3
    }
}

console.log(maths.add(5,5));
console.log(maths.square(5,5));
console.log(maths.sub(5,10));
console.log(maths.multi(5,10));
console.log(maths.cube(10));
 