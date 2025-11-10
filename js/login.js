const form = document.getElementById('form_login')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const validacao = document.getElementById('validar_erro')

form.addEventListener('submit', (e) => {
    let valido = true
    validacao.innerHTML = '';
    let mensagens = ''

    if (email.value.trim() == '') {
        e.preventDefault()
        mensagens += '<div class="text-danger mb-1">• Preencha o e-mail<br></div>'
        valido = false
    }else{
        mensagens += '<div class="text-success mb-1">• Preencha o e-mail<br></div>'
    }

    if (senha.value == '') {
        e.preventDefault()
        mensagens += '<div class="text-danger mb-1">• Preencha a senha<br></div>'
        valido = false
    }else{
        mensagens += '<div class="text-success mb-1">• Preencha a senha<br></div>'
    }

    if (!email.checkValidity()) {
        e.preventDefault()
        mensagens += '<div class="text-danger mb-1">• Formato do e-mail inválido (Exemplo@gmail.com)<br></div>'
        email.style.borderColor = 'red'
        email.style.borderWidth = '3px'
        valido = false
    } else {
        email.style.borderColor = 'green'
        email.style.borderWidth = '3px'
        mensagens += '<div class="text-success mb-1">• Formato do e-mail inválido (Exemplo@gmail.com)<br></div>'
    }

    if (!senha.checkValidity()) {
        e.preventDefault()
        mensagens += '<div class="text-danger mb-1">• Formato da senha inválido (Conter pelo menos 6 digitos)<br></div>'
        senha.style.borderColor = 'red'
        senha.style.borderWidth = '3px'
        valido = false
    } else {
        senha.style.borderColor = 'green'
        senha.style.borderWidth = '3px'
        mensagens += '<div class="text-success mb-1">• Formato da senha inválido (Conter pelo menos 6 digitos)<br></div>'
    }

    if (valido) {

        if (email.value == 'pessoa@gmail.com' && senha.value == '123456') {
            alert('Login realizado')
        } else {
            e.preventDefault()
            validacao.innerHTML = '<div class="text-success mb-1">• Preencha o e-mail<br></div><div class="text-success mb-1">• Preencha a senha<br></div><div class="text-success mb-1">• Formato do e-mail inválido (Exemplo@gmail.com)<br></div><div class="text-success mb-1">• Formato da senha inválido (Conter pelo menos 6 digitos)<br></div>';
            validacao.innerHTML += '<div class="text-danger mb-1">• email ou senha de login incorretos</div>'
        }
    } else {
        validacao.innerHTML = mensagens;
        return;
    }
})