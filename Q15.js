var prom = prompt("Enter Your number to start a count down")
var sec = prom * 1000

function countDown(){
    let count = 0
    let stop = setInterval(() => {
        count ++;
        console.log("Your count down starts " , count , "And" , "Your count down will stop at " , prom)

        if (count ==prom){
            clearInterval(stop)
        }
        
    }, sec);
}

countDown()