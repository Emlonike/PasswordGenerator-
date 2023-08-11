document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generate');
    const passwordText = document.getElementById('password');
    
    generateButton.addEventListener('click', function() {
      const generatedPassword = generatePassword();
      passwordText.textContent = generatedPassword;
    });
  });
  
  function generatePassword() {
    const length = 18; // Change the desired password length
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+="; // Characters to choose from
    let password = "";
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    
    return password;
  }
  
  
