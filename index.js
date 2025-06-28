const logDiv=document.getElementById("log");
const stateDiv=document.getElementById("state");
const startBtn=document.getElementById("start-btn");
const stopBtn=document.getElementById("stop-btn");


function handlerDown(e){
    logDiv.textContent = `Key ${e.key} Pressed Down`;
    stateDiv.textContent = `Key is down`;
}
function handlerUp(e){
    logDiv.textContent = `Key ${e.key} Pressed Up`;
    stateDiv.textContent = `Key is Up`;
}


startBtn.addEventListener("click", ()=>{
    document.addEventListener("keydown",handlerDown);
    document.addEventListener("keyup",handlerUp);

    startBtn.disabled=true;
    stopBtn.disabled=false;
    
})

stopBtn.addEventListener("click", ()=>{
    document.removeEventListener("keydown",handlerDown);
    document.removeEventListener("keyup",handlerUp);
    logDiv.textContent="";
    stateDiv.textContent="";
    startBtn.disabled=false;
    stopBtn.disabled=true;
})


