

// function expandform(val){
//     const company = document.getElementById('contact-us-form-company');
//     const position = document.getElementById('contact-us-form-position');
//     const enquiry = document.getElementById('contact-us-form-enquiry');
//     if(val == 'partner'){
//         company.style.display = "block";
//         position.style.display = "block";
//         enquiry.setAttribute('placeholder' , "Support/Proposal you're interested in?");
//     }else if(val == "fleetOwner"){
//         company.style.display = "block";
//         company.setAttribute('placeholder' , "Which Organisation do you belong to?");
//         position.style.display = "none";
//         enquiry.setAttribute('placeholder' , "Hey, What Do you want to Enquire About?");
//     }
//     else{
//         company.style.display = "none";
//         position.style.display = "none";
//         enquiry.setAttribute('placeholder' , "Your Enquiry?");
//     }
// }

// ------------------------burger icon--------------------------------------------------
const burgerContainer = document.querySelector(".burger-container");
const mobileNavbarLinks = document.querySelector(".mobile-navbar-links");
const mobileNavbarButton = document.querySelectorAll(".mobile-navbar-links div");
 
mobileNavbarButton.forEach(item => item.addEventListener('click' , ()=>{
        burgerContainer.classList.remove('close');
        mobileNavbarLinks.style.height = '0px';
        burgerOpen = true;
}));


let burgerOpen = true;
burgerContainer.addEventListener('click' , toggleMenu);

function toggleMenu(){
    if(burgerOpen){
        burgerContainer.classList.add('close');
        mobileNavbarLinks.style.height = '270px';
        // mobileNavbarLinks.style.animationName = "navbarOpenAnimation";
        burgerOpen = false;
    }else{
        burgerContainer.classList.remove('close');
        mobileNavbarLinks.style.height = '0px';
        // mobileNavbarLinks.style.animationName = "";
        burgerOpen = true;
    }
}

// ---------------------scroll to top-------------------

// scrollToTop = ()=>{
//     window.scroll({
//         top: 0, 
//         left: 0, 
//         behavior: 'smooth'
//       });
// }

// ----------------------------------------------------------------------------------------

// ---------------------changing the color of navbar on scroll--------------------------
const mainSectionDiv = document.getElementsByClassName('navbar-color-change-div')[0];
// const scrollToTopIcon = document.getElementsByClassName('scroll-to-top')[0];
// console.log(mainSectionDiv);
document.getElementsByClassName('desktop-navbar')[0].style.color = "white";
window.addEventListener('scroll' ,  () => {
    let distFromTopRect = mainSectionDiv.getBoundingClientRect();
    let distFromTop = distFromTopRect.top;
    
    if( distFromTop <= '-50'){
        document.getElementsByClassName('desktop-navbar')[0].style.backgroundColor = "white";
        document.getElementsByClassName('desktop-navbar')[0].style.color = "black";
        document.getElementsByClassName('mobile-navbar')[0].style.backgroundColor = "white";
        // scrollToTopIcon.style.display = "flex";
    }else{
        document.getElementsByClassName('desktop-navbar')[0].style.backgroundColor = "transparent";
        document.getElementsByClassName('desktop-navbar')[0].style.color = "black";
        document.getElementsByClassName('mobile-navbar')[0].style.backgroundColor = "transparent";
        // scrollToTopIcon.style.display = "none";
    }
    // if(distFromBottom <= '500'){
    //     document.getElementsByClassName('mobile-navbar')[0].style.backgroundColor = "white";
    //     scrollToTopIcon.style.display = "flex";
    // }else{
    //     
    //     scrollToTopIcon.style.display = "none";
    // }
});

//-----------------------------------------------------------------------------------------
