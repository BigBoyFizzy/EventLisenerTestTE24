 console.log("Det fiúnkar!!")

 document.addEventListener("keydown", (event) => {

     console.log(event);


    document.getElementById(event.code).style = "background-color:black";

    if( event.code == "Enter"){
        document.getElementById("lowE").style = "background-color:black";
    }
});

document.addEventListener("keyup", (event) => {

     console.log(event);


    document.getElementById(event.code).style = "background-color:pink";

     if( event.code == "Enter"){
        document.getElementById("lowE").style = "background-color:pink";
    }

});

