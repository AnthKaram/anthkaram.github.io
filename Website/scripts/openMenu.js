/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu
*/
function openMenu(){
    var x =
    document.getElementById("links");
    let button =
    document.getElementById("menuButton");

    if (x.style.display === "grid") {
        x.style.display = "none";
        button.innerHTML='&#9776;';
        
    } else {
        x.style.display = "grid";
        button.innerHTML='&#10005;';
    }
}