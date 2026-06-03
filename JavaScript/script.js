 console.log("Det fiúnkar!!")

 document.addEventListener("keypress", (event) => {

     console.log(event);

if(event.key == "w"){
         document.getElementById("w").style = "color:blue";
     }

});