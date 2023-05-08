

 function login(){
     document.getElementById('user-name').value='';
     document.getElementById('confirm-password3').value='';

    }



function fun(){
    document.getElementById('firstname').value='';
    document.getElementById('lastname').value='';
    document.getElementById('email').value='';
    document.getElementById('pass-word').value='';
    document.getElementById('confirm-password').value='';
}




function togglepassword(e){
    const buttontarget=e.target.parentNode;
    
    const type=buttontarget.previousElementSibling.getAttribute("type");
    if (type==="password"){
        buttontarget.previousElementSibling.setAttribute("type", "text");
        buttontarget.setAttribute("data-password-lock","isunlocked");
       return
    }
    buttontarget.previousElementSibling.setAttribute("type", "password");
    buttontarget.setAttribute("data-password-lock","islocked");

}


const passwordButton=document.querySelectorAll('.password_btn')
passwordButton.forEach((btn) => btn.addEventListener('click',togglepassword));










options = {
    year: 'numeric', month:'long', day:'numeric',
    hour:'numeric', minute:'numeric', second: 'numeric'
};


const clock= () => dateTime.innerText=new Intl.DateTimeFormat('en-EN', options).format(new Date())
clock()
setInterval(clock, 1000);




function Onsubmithandler(eventobject){
    Onsubmithandler.preventDefault();
}



document.querySelector('#mainform').addEventListener('sumbit',Onsubmithandler)











