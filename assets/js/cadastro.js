const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const senha2 = document.getElementById('senha2');

// show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// show success message
function showSuccess(input) {
  formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//check email is valid
function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Por favor, insira um email válido');
  }
}

//check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} é necessário`);
    } else {
      showSuccess(input);
    }
  });
}

//check input lenght
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} deve ter pelo menos ${min} caracteres`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} deve ter no máximo ${max} caracteres`);
  } else {
    showSuccess(input);
  }
}

// check senhas match

function checksenhasMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'As senhas não coincidem');
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([username, email, senha, senha2]);
  checkLength(username, 3, 20);
  checkLength(senha, 6, );
  checkEmail(email);
  checksenhasMatch(senha, senha2);
});
