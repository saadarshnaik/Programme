var screen=document.getElementById('screen');
var show="";
var holder;

function myFunction(e){
    console.log(e.target.innerHTML)
    if (e.target.innerHTML=="AC"){
        screen.innerHTML="00";
        show="";

    }
   
    else if (e.target.innerHTML=="=") {
       var ans=eval(holder)
       screen.innerHTML=ans
       show=screen.innerHTML;
    } 
    
    else{
        show=show.concat(e.target.innerHTML)
        screen.innerHTML=show
        holder=screen.innerHTML;
        console.log(holder)
       
    };


}
