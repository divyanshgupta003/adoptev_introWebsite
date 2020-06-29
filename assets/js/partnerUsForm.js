const formContainer = document.getElementsByClassName('partner-us-pop-up-form')[0];
const backgroundBlur = document.getElementsByClassName('partner-us-blur-page')[0];
const crossButton = document.getElementsByClassName('.partner-us-blur-page-cross-mark')[0];

const appearForm = ()=>{
    formContainer.style.top = "56%";
    backgroundBlur.style.display = "block";
}

const disappearForm = ()=>{
    formContainer.style.top = "-50%";
    backgroundBlur.style.display = "none";
}

$(document).ready(function(){
    let enquiryForm = $('#partner-us-form-submission');
    enquiryForm.submit(function(e){
        e.preventDefault();
        $.ajax({
            type : 'POST',
            url : '/form/partner-us-form',
            data :enquiryForm.serialize(),
            success : () =>{
                $('.partner-us-form-message-after-submission').css({
                    "display" : "flex"
                })
                enquiryForm.css({
                    "display" : "none"
                })
            },
            error : (err)=>{
                console.log(err);
            }
        })
    })
})