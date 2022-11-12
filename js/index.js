options = {
    year: 'numeric', month:'long', day:'numeric',
    hour:'numeric', minute:'numeric', second: 'numeric'
};


const clock= () => dateTime.innerText=new Intl.DateTimeFormat('en-EN', options).format(new Date())
clock()
setInterval(clock, 1000);








function toggle(e){
    const eyefield=document.querySelector('#${e.target.id}').nextElementSibling;
    const password=eyefield.getAttribute('type') === 'password' ? 'text':'password';
    eyefield.setAttribute('type',password);

}


const togglepassword=document.getElementById('togglePassword');
const togglepassword1= document.getElementById('togglepassword1');
togglepassword.addEventListener('click',toggle);
togglepassword1.addEventListener('click',toggle);




