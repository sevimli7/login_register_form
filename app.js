

 'use strict'
 var menu=document.querySelector(".right");
 var icon=document.querySelector("#icon");
icon.addEventListener('click',goster);
console.log(menu)
 
 function goster(){
    
 
     if(menu.style.display=="block"){
         menu.style.display="none";
           
     }else{
         menu.style.display="block";
     }
 }
 
