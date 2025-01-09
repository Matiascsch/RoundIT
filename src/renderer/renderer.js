// Menu Buttons Handlers
window.api.onUpdateTheme((event, theme) => document.documentElement.style.setProperty('--scheme', theme));


// Login Validations
const validateInputsLogin = (value) => {
  const regex = /[!@#$%^&*(),.?":{}|<>]/;

  return regex.test(value);
}

document.getElementById("form_login").addEventListener("submit", e => {
  e.preventDefault()

  const DATA = new FormData()

  e.target.querySelectorAll("input").forEach(element => {
    if (validateInputsLogin(element.value)) {
      element.parentElement.querySelector(".input_error").textContent = "Hay algo mal en este valor!";
      throw Error("Caracteres Especiales en este input!")
    }

    DATA.append(element.id, element.value)
  });

  fetch('http://localhost:3000/api/hello')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the JSON from the response
    })
    .then(data => {
      console.log(data); // Handle the data
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
})