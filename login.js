const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const eyeIcons = document.querySelectorAll('.eye-icon');
const passwordInputs = document.querySelectorAll('.password');
const PasswordInput = document.getElementById('password1');

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Loop through each password input
passwordInputs.forEach((passwordInput, index) => {
  passwordInput.addEventListener('input', function () {
    if (passwordInput.value === '') {
      eyeIcons[index].style.display = 'none'; // Hide the eye icon
    } else {
      eyeIcons[index].style.display = 'block'; // Show the eye icon
    }
  });

  // Add a click event listener to the eye icon
  eyeIcons[index].addEventListener('click', function () {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeIcons[index].classList.remove('fa-eye-slash');
      eyeIcons[index].classList.add('fa-eye');
    } else {
      passwordInput.type = 'password';
      eyeIcons[index].classList.remove('fa-eye');
      eyeIcons[index].classList.add('fa-eye-slash');
    }
  });
});


async function signUp() {
  const userData = {
      UserName: document.getElementById('username').value,
      UserEmail: document.getElementById('e-mail').value,
      UserPassword: document.getElementById('password1').value     
  };
  console.log(userData)
  try {
      const response = await fetch('https://localhost:7218/api/UserAccount', {
          method: 'POST',
          body: JSON.stringify(userData),
          headers: {
              "Content-Type": "application/json",
          },
      });
      
      if (!response.ok) {
          throw new Error('Failed to create Account');
      }
      
      alert('Account created successfully');
      UserName: document.getElementById('username').value = '';
      UserEmail: document.getElementById('e-mail').value = '';
      UserPassword: document.getElementById('password1').value = ''; 
      
      
  } catch (error) {
      console.error('Error:', error);
      alert('Failed to create Account, Please try again.');
  }
}

function valid() {
  var username = document.querySelector('.usernames').value;
  var password = document.querySelector('.password').value;

  if (username === "abishekpalungwa123@gmail.com" && password === "Abishek@123") {
    alert("Login successful");
    window.location.href = "/HomePage/homepage.html?loggedIn=true"; // Redirect to the desired page
  } else {
    alert("Invalid Username or Password");
  }
}