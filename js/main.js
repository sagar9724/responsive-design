let menuToggle = document.getElementById("menuToggle");
let menubar = document.getElementById("menubar");
menubar.maxHeight = "0vh";

function menuEvent(){

    if(menubar.style.maxHeight == "0vh")
    {
        menubar.style.visibility = "visible";
        menubar.style.maxHeight = "100vh";
    }
    else{
        menubar.style.maxHeight = "0vh";
        menubar.style.visibility = "hidden";
    }

}


// menuToggle.addEventListener("click",menuEvent);