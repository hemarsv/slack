var dropdown=document.getElementById("dropdown-content");

function showMenu(){
    dropdown.style.display="block";
}
function hideMenu(){

    dropdown.style.display="none";
    console.log("hello");
}
var navLink=document.getElementById("navLink");
function hiddenMenu(){
    navLink.style.right="-200px";
}
function shownMenu(){
    navLink.style.right="0";
}