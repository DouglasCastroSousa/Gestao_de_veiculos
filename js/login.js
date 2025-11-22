(() => {
  // Tornar meu Javascript mais seguro com uma analise sintatica e tratamento de erros mais rigoroso
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  //transforma em uma lista de arrays, e diz que daca uma deve executar a seguinte função:
  Array.from(forms).forEach(form => {
    //escuta o evento de submit dentro do formulario
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        //se for invalido ele irá impedir que o formulario seja enviado e não permitirá que se repita os mesmos comandos para outro formulario
        event.preventDefault()
        event.stopPropagation()

        //cria um array de cada elemento do formulario, identifica se o elemento é input e se é invalido
        //pega a mensagem de erro do input invalido com base no id e apresenta ela
        Array.from(form.elements).forEach(input => {
          if (input.tagName !== 'INPUT' || !input.required) return;

          if (!input.validity.valid && input.id == 'email') {
            const error_message = input.validationMessage
            document.getElementById('email-invalido').innerHTML = error_message;
          } else if (!input.validity.valid && input.id == 'senha') {
            const error_message = input.validationMessage
            document.getElementById('senha-invalida').innerHTML = error_message;
          }

        })

      }
      //no final de tudo adiciona a classe daquele formulario o was-validated
      form.classList.add('was-validated')
    }, false)
  })
})()