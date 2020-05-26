

function expandform(val){
    const company = document.getElementById('contact-us-form-company');
    const position = document.getElementById('contact-us-form-position');
    const enquiry = document.getElementById('contact-us-form-enquiry');
    if(val == 'partner'){
        company.style.display = "block";
        position.style.display = "block";
        enquiry.setAttribute('placeholder' , "Support/Proposal you're interested in?");
    }else if(val == "fleetOwner"){
        company.style.display = "block";
        company.setAttribute('placeholder' , "Which Organisation do you belong to?");
        position.style.display = "none";
        enquiry.setAttribute('placeholder' , "Hey, What Do you want to Enquire About?");
    }
    else{
        company.style.display = "none";
        position.style.display = "none";
        enquiry.setAttribute('placeholder' , "Your Enquiry?");
    }
}

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
    console.log('clicked');
    if(burgerOpen){
        burgerContainer.classList.add('close');
        mobileNavbarLinks.style.height = '50%';
        burgerOpen = false;
    }else{
        burgerContainer.classList.remove('close');
        mobileNavbarLinks.style.height = '0px';
        burgerOpen = true;
    }
}
// ----------------------------------------------------------------------------------------