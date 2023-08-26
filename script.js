let result="";
let inputNum=document.getElementById("input");
let buttons=document.querySelectorAll("button");

let a=Array.from(buttons);
a.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=="="){
            result=eval(result);
            inputNum.value=result;
        }
        else if(e.target.innerHTML=="DEL"){
            result=result.substring(0,result.length-1);
            inputNum.value=result;

        }
        else if(e.target.innerHTML=="AC"){
            result="";
            inputNum.value=result;
        }
        else{
            result+=e.target.innerHTML;
            inputNum.value=result;
        }
    })
})