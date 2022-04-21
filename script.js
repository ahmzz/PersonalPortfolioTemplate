let loginBtn=document.getElementById('loginBtn')
let signupForm=document.querySelector('._signup')
let loginForm=document.querySelector('._login')
let btnOverlay=document.querySelector('.btn_overlay')

let signupBtn=document.getElementById('signupBtn')

loginBtn.addEventListener('click',()=>{
    loginForm.style.display="flex";
    signupForm.style.display="none";
    btnOverlay.style.left="0%";

})

signupBtn.addEventListener('click',()=>{
    loginForm.style.display="none";
    signupForm.style.display="flex";
    btnOverlay.style.left="50%";

})






