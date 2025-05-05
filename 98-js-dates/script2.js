let userDob1='02/04/2000'    //is we apply Z in last then it get it as england time
let userDob2='03/06/1998'
let isoString='2000-04-02T12:00:00.300Z'
let timeStampDate=new Date(23)
let user4Dob=new Date(2000,11,12,4,30,15,300)
// another way
let [date,month,year]=userDob1.split('/')
let user5Dob=new Date(year,month-1,date)


//MM/DD/YYYY and YYYY/MM/DD        are accepted format
//DD/MM/YYYY unaccepted format
let user1Date=new Date(userDob1.split('/').reverse().join('/'))
let user2Date=new Date(userDob2.split('/').reverse().join('/'))
let user3Date=new Date(isoString)

console.log(user1Date);
console.log(user2Date);
console.log(user3Date);
console.log(timeStampDate);
console.log(user4Dob);
console.log(user4Dob.getMilliseconds());
console.log(user5Dob);


const user1AgeInMilliseconds=Date.now()-user1Date.getTime()
const user2AgeInMilliseconds=Date.now()-user2Date.getTime()

// console.log(user1AgeInMilliseconds);
// console.log(user2AgeInMilliseconds);

// console.log("hence",user2AgeInMilliseconds-user1AgeInMilliseconds);


// console.log({user1Date,user2Date});
// console.log(user1Date.getTime());
// console.log(user2Date.getTime());


console.log(user1Date.toLocaleDateString('en-GB'));










// getting date before 1970
const pastDate = new Date(1765, 0, 1);  // Jan 1, 1765
console.log(pastDate.toString());       // In your local time
console.log(pastDate.toUTCString());    // In UTC



// const date2 = new Date('1765-07-04T12:00:00Z');  // July 4, 1765 at 12:00 UTC
// console.log(date2.toString());     // Your local time
// console.log(date2.toUTCString());  // UTC time
