let visibleMenu = false;
//Function that hides or shows the menu
function showHideMenu() {
    document.getElementById("nav").classList = visibleMenu ? "" : "responsive";
    visibleMenu = !visibleMenu;
}

function select() {
    //hide the menu once I select an option
    document.getElementById("nav").classList = "";
    visibleMenu = false;
}

//Function that applies skill animations
function effectSkills() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//I detect scrolling to apply the skill bar animation
window.onscroll = function () {
    effectSkills();
} 