console.log('A')

// LOGIN ACTIONS
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const formsLoginSection = document.querySelectorAll('.form-container form');

registerBtn.addEventListener('click', () => {
  container.classList.add("active");
})

loginBtn.addEventListener('click', () => {
  container.classList.remove("active");
})

formsLoginSection.forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault()
    console.log(form)
    document.getElementById('login-section').classList.add('d-none');
    document.getElementById('loader').classList.remove('d-none')
  })
})