const formContainer=document.getElementsByClassName("enterprise-pop-up-form")[0],backgroundBlur=document.getElementsByClassName("enterprise-blur-page")[0],appearForm=()=>{formContainer.style.top="50%",backgroundBlur.style.display="block"},disappearForm=()=>{formContainer.style.top="-50%",backgroundBlur.style.display="none"};$(document).ready((function(){let e=$("#enterprise-contact-us-form");e.submit((function(r){r.preventDefault(),$.ajax({type:"POST",url:"http://localhost:8000/form/enterprise-form",data:e.serialize(),success:()=>{$(".enterprise-form-message-after-submission").css({display:"flex"}),e.css({display:"none"})},error:e=>{console.log(e)}})}))}));