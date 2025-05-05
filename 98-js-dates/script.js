const myDate=new Date()
const isoDate='2025-05-03T05:09:30.624Z'
console.log(myDate)   //in form of object

// console.log(myDate.toLocaleString());   //5/2/2025, 11:24:11 PM  ...  mm/dd//yyyy 
// console.log(myDate.toLocaleDateString());   //if we need only time not date
// console.log(myDate.toLocaleString('en-GB'));  //02/05/2025, 23:26:41  ...  dd/mm//yyyy
// for 12 hour format
// console.log(myDate.toLocaleString('en-GB',{hour12:true}));   //2/5/2025, 11:24:11 PM  ...  dd/mm//yyyy + 12 hour format
// if we want only date not time then we can write
// console.log(myDate.toLocaleDateString('en-GB'));   //2/5/2025 ...  dd/mm//yyyy 
// if we want only date
// console.log(myDate.getFullYear());  //2025
// console.log(myDate.getMonth());  //4, in form of array value from 0 to 11
// console.log(myDate.getDate());  //2
// console.log(myDate.getDay());  //2025
// console.log(myDate.getHours());  //Seconds form 1jan 1970
// console.log(myDate.getMinutes());  
// console.log(myDate.getSeconds());  //Seconds form 1jan 1970
// console.log(myDate.getMilliseconds());  //milliseconds form 1jan 1970
// console.log(myDate.getTimezoneOffset());  //milliseconds form 1jan 1970
// basicall method toISOString() does two works first is convert in iso format and also convert in UTC format
// console.log(myDate.toISOString());  //2025-05-02T19:34:51.292Z ,here Z represend it is universal time zone,if it givesonly Z then it means it is time of UTC,it we watch like +530Z then it means it has 5:30 hours different form UTC. 
console.log(myDate.toJSON());  // to transfer in JSON
// Basiclly the Date() depend upon device setting,it give time according to the device selected UTC time.
console.log(myDate.toString()); //both myDate and myDate.toString() give same output but difference in myDate give object and myDate.toString() give string
console.log(myDate.toUTCString()); //means it give current UTC time means time of englsnd


console.log("local year",myDate.getFullYear()); //gives local version
console.log("UTC year",myDate.getUTCFullYear()); //gives UTC version
console.log("local month",myDate.getMonth()); //gives local month
console.log("UTC month",myDate.getUTCMonth()); //gives UTC month according to englsnd
console.log("local date",myDate.getDate()); //gives local date(means your browser calculate according to your device)
console.log("UTC date",myDate.getUTCDate()); //gives UTC date according to englsnd
console.log("local day",myDate.getDay()); //gives local day(means your browser calculate according to your device)
console.log("UTC day",myDate.getUTCDay()); //gives UTC day according to englsnd
console.log("local hours",myDate.getHours()); //gives local hours
console.log("UTC hours",myDate.getUTCHours()); //gives UTC hours
console.log("local minutes",myDate.getMinutes()); //gives local hours
console.log("UTC minutes",myDate.getUTCMinutes()); //gives UTC hours
console.log("local seconds",myDate.getSeconds()); //gives local seconds
console.log("UTC seconds",myDate.getUTCSeconds()); //gives UTC seconds
console.log("local Milliseconds",myDate.getMilliseconds()); //gives local Milliseconds
console.log("UTC Milliseconds",myDate.getUTCMilliseconds()); //gives UTC Milliseconds
console.log("timestamp",myDate.getTime()); //for getting timestamp in millisecond



// if we keep timestamp in new Date(),the we get the current time stamp in string mode,means not in millisecond, but in manula time,
let captureTimeStamp=new Date(1746348616081)
console.log(captureTimeStamp.toString());
console.log(captureTimeStamp.getMinutes());
console.log(captureTimeStamp.getSeconds());






let zeroTime=new Date(0)
console.log(zeroTime.toString());
console.log(zeroTime.toUTCString());














