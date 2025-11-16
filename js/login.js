(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()

        Array.from(form.elements).forEach(input => {
          if(input.tagName !== 'INPUT' || !input.required) return;

          if(!input.validity.valid && input.id == 'email'){
            const error_message = input.validationMessage
            document.getElementById('email-invalido').innerHTML = error_message;
          }else if (!input.validity.valid && input.id == 'senha'){
            const error_message = input.validationMessage
            document.getElementById('senha-invalida').innerHTML = error_message;
          }
          
        })

      }
      form.classList.add('was-validated')
    }, false)
  })
})()