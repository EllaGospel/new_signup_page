const togglePassword=document.querySelector('#togglePassword');
const password=document.querySelector('#Password');

togglePassword.addEventListener('click',function () {

const type=password.getAttribute("type") ==="password" ?"text" : "Password";
password.getAttribute("type",type);

this.classList.toggle("fa-eye-low-vision")



});


