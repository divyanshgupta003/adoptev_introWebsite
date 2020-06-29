$(document).ready(function(){
    let enquiryForm = $('#enquirySubmitForm');
    enquiryForm.submit(function(e){
        e.preventDefault();
        $.ajax({
            type : 'POST',
            url : '/form/enquiry',
            data :enquiryForm.serialize(),
            success : () =>{
                $('.form-submission-after-message').css({
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