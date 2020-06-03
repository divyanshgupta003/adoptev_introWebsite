const backgroundOfPopUp = document.getElementsByClassName('job-openings-pop-up')[0];
const popUpForm = document.getElementsByClassName('job-openings-pop-up-container')[0];

function showJobOpeningsPopUp(){
    // e.preventDefault();
    backgroundOfPopUp.style.display = "block";
    popUpForm.style.animationName = "popUpFormAnimation";
}
function closePopForm(){
    backgroundOfPopUp.style.display = "none";
    popUpForm.style.animationName = "none";
}
// showJobOpeningsPopUp();