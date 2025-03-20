function sidebar() {
   var x = document.getElementById("mySidebar");
   var z = document.getElementById("textsb");
   var y = document.getElementById("cont");
   var a = document.getElementById("imgs");

   if(x.style.display == "none") {
       x.style.display = "block";
       z.style.color = "white";
     
       y.style.transition = "ease-in-out";
       y.style.transitionDuration = "1000ms";
    
   }else {
       x.style.display = "none";
       z.style.color = "black";
      
   
       
   } 


   if(x.style.display == "block") {
    z.style.marginTop = "50px";
    a.style.marginTop = "40px";

   }else {
    z.style.marginTop = "-50px";
    a.style.marginTop = "-60px";
   }

 
    
}