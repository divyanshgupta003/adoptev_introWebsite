
$(document).ready(function(){
    let enquiryForm = $('#enterprise-contact-us-form');
    enquiryForm.submit(function(e){
        e.preventDefault();
        $.ajax({
            type : 'POST',
            url : 'http://localhost:8000/form/enterprise-form',
            data :enquiryForm.serialize(),
            success : () =>{
                $('.enterprise-form-submission-message').css({
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