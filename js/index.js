function toggle (){
    const eyefield = document.querySelector('#togglePassword')
    const type =eyefield.getAttribute('type') === "password" ? "type" : "password"
   
    eyefield.setAttibute('type', type) 


}


const Password =document.getElementById(togglePassword)
Password.addEventListener('click', toggle)


