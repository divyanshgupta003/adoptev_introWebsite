

function expandform(val){
    const company = document.getElementById('contact-us-form-company');
    const position = document.getElementById('contact-us-form-position');
    const enquiry = document.getElementById('contact-us-form-enquiry');
    if(val == 'partner'){
        company.style.display = "block";
        position.style.display = "block";
        enquiry.setAttribute('placeholder' , "Support/Proposal you're interested in?");
    }else{
        company.style.display = "none";
        position.style.display = "none";
        enquiry.setAttribute('placeholder' , "Your Enquiry?");
    }
}