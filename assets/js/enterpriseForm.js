const formContainer = document.getElementsByClassName('enterprise-pop-up-form')[0];
const backgroundBlur = document.getElementsByClassName('enterprise-blur-page')[0];

const appearForm = ()=>{
    formContainer.style.top = "56%";
    backgroundBlur.style.display = "block";
}

const disappearForm = ()=>{
    formContainer.style.top = "-50%";
    backgroundBlur.style.display = "none";
}

$(document).ready(function(){
    let enquiryForm = $('#enterprise-contact-us-form');
    enquiryForm.submit(function(e){
        e.preventDefault();
        $.ajax({
            type : 'POST',
            url : '/form/enterprise-form',
            data :enquiryForm.serialize(),
            success : () =>{
                $('.enterprise-form-message-after-submission').css({
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
// $(document).ready(function(){
//     let enquiryForm = $('#enterprise-contact-us-form');
//     enquiryForm.submit(function(e){
//         e.preventDefault();
//         $.ajax({
//             type : 'POST',
//             url : 'http://localhost:8000/form/enterprise-form',
//             data :enquiryForm.serialize(),
//             success : () =>{
//                 $('.enterprise-form-submission-message').css({
//                     "display" : "flex"
//                 })
//                 enquiryForm.css({
//                     "display" : "none"
//                 })
//             },
//             error : (err)=>{
//                 console.log(err);
//             }
//         })
//     })
// })