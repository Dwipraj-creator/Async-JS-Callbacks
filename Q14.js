console.log("Begin"); 
setTimeout(() => { console.log("Timeout Task"); }, 0); 
Promise.resolve().then(() => { console.log("Promise Task"); }); 
console.log("End");
// first the Begain and End log will be printed 
// because Begain and End will go directly to call stack
// so in call stack has the principal of first in first out
// so Begain and End will be exsicuted 
// then the promise Task will be printed 
// though we first wright the set timeout function 
// the reason  behind it is when we call setTimeout function 
// it will directly go to the Wed API insted of call stack 
// then the pice of code will go tho call stack queue
// then there was a Event loop that chanel the code from 
// call back queue to call stack 
// but the rule of Event loop is that call stack should be empty
// when Event loop passing some code and the call back queue
// should be  not empty
// thats why when the Evet loop try to pass the code to call stack
// there will be onother code in the call stack and thats Promise task
// so Event loop will wait for the call stack to be empty
// meanwhile the promise task will be excuted and call stack will be empty
// Then the Event loop wil throw the setTimeout code in callstack
// and than at the last the Time out task wil be excuted
