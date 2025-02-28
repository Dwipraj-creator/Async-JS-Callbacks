function loadingScreen(){
    count = 0
   
    let stop = setInterval(() => {
        count ++
        console.log("Loading....")
        
        if(count === 5){
            clearInterval(stop)
        }

    }, 1000);
   
}
loadingScreen()