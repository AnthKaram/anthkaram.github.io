/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu
*/
click = true;
function openMenu(){
    let button =
    document.getElementById("menuButton");

    if (click === true) {
        button.innerHTML='&#9776;';
        click = false;
        
    } else {
        button.innerHTML='&#10005;';
        click=true;
    }
}