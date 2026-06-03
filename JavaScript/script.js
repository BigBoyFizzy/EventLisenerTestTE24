 console.log("Det fiúnkar!!")

 document.addEventListener("keydown", (event) => {

     console.log(event);


    document.getElementById(event.code).style = "background-color:red";
     
    if( event.code == "Enter"){
        document.getElementById("lowE").style = "background-color:red";
    }
});

document.addEventListener("keyup", (event) => {

     console.log(event);


    document.getElementById(event.code).style = "background-color:black";
     if( event.code == "Enter"){
        document.getElementById("lowE").style = "background-color:black";
    }

});

