var i = 0;
var txt = '"The only time success comes before work is in the dictionary. So fight for your dreams! Nobody else will do it for you. Start today because yesterday you said tomorrow." -quotes I live by. ';
var speed = 120;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("power").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


const validateForm = () =>{
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');
    if(name.value === ''){
        document.getElementById('error-name').innerHTML="Please fill in your name"
        name.select();
        name.focus();
    }else{
        document.getElementById('error-name').innerHTML=""
    }
    if(email.value === ''){
        document.getElementById('error-email').innerHTML="Please fill in your e-mail address"
        email.select();
        email.focus();
    }else{
        document.getElementById('error-email').innerHTML=""
    }
    if(message.value === ''){
        document.getElementById('error-message').innerHTML="Please fill in your message"
        message.select();
        message.focus();
    }else{
        document.getElementById('error-message').innerHTML=""
    }
    if(name.value === '' || email.value === '' || message.value === ''){
        return false;
    }else{
        document.getElementById('feedback').innerHTML="Your message has been successfully sent. Thanks for leaving me a message! -Daniel"
    }
    return true;
}