// login formjs

const toggleAuth = document.getElementById('toggleAuth');
const formTitle = document.getElementById('formTitle');
const authButton = document.getElementById('authButton');
const loginFields = document.getElementById('loginFields');
const signupFields = document.getElementById('signupFields');
const linkText = document.querySelector('.link');

let isLoginForm = true;

toggleAuth.addEventListener('click', (e) => {
  e.preventDefault();
  isLoginForm = !isLoginForm;
  
  if (isLoginForm) {
      formTitle.textContent = 'Login Here';
      authButton.textContent = 'Login';
      loginFields.style.display = 'block';
      signupFields.style.display = 'none';
      linkText.innerHTML = 'Don\'t have an account?<br><a href="#" id="toggleAuth">Sign up</a> here';
  } else {
      formTitle.textContent = 'Register Here';
      authButton.textContent = 'Sign up';
      loginFields.style.display = 'none';
      signupFields.style.display = 'block';
      linkText.innerHTML = 'Already have an account?<br><a href="#" id="toggleAuth">Login</a> here';
  }
  
  // Re-attach event listener to new toggle link
  document.getElementById('toggleAuth').addEventListener('click', (e) => {
      e.preventDefault();
      toggleAuth.click();
  });
});
