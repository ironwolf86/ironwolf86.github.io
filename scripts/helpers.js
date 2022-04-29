/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
 document.getElementById("sideNav").style.width="250px";
 document.getElementById("main").style.marginLeft="250px";
 document.getElementById("navIcon").style.visibility = "hidden";
 document.body.style.backgroundColor="rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
 document.getElementById("sideNav").style.width="0";
 document.getElementById("main").style.marginLeft="0";
 document.getElementById("navIcon").style.visibility = "visible";
 document.body.style.backgroundColor="black";
}


function settingsDialog() {
   closeNav();
}
