
function disappear(){
    const divForm=document.querySelector('click_btn')
    divForm.style.display.none
}


const formitself= document.getElementById('form')
formitself.addEventListener("click", disappear)









function toggle (){
    const eyefield  = document.querySelector('#Password');
    const password =eyefield.getAttribute('type') === "password" ? "type" : "password"

    eyefield.setAttibute('type', type) 
}


const togglePassword =document.getElementbyId('togglePassword');
Password.addEventListener('click', toggle)

this.classList.toggle('fa-eye')




