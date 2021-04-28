

let form  = document.getElementsByTagName('form')[0];
let email = document.getElementById('mail');
let error = document.querySelector('.error');
let inputField = document.querySelector('.input');


form.addEventListener("submit", function (evt) {
    evt.preventDefault()
  
  if (!email.validity.valid) {

    
    error.innerHTML = 'Вы ввели неправильный email адрес';
    error.className = "error active";
    
  } else {
      if(inputField.value == '') {
        error.innerHTML = 'Вы не ввели email адрес';
        error.className = "error active";
      } else {
        error.innerHTML = 'Ваша заявка отправлена'; 
        error.className = "error";
      }
  }
}, false);
