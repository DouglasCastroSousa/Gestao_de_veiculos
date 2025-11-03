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
        mensagens += '• Preencha o e-mail<br>'
        valido = false
    }
    
    if (senha.value == '') {
        e.preventDefault()
        mensagens += '• Preencha a senha<br>'
        valido = false
    }
    
    if (!email.checkValidity()) {
        e.preventDefault()
        mensagens += '• Formato do e-mail inválido (Exemplo@gmail.com)<br>'
        email.style.borderColor = 'red'
        valido = false
    } else {
        email.style.borderColor = 'green'
    }

    if (!senha.checkValidity()) {
        e.preventDefault()
        mensagens += '• Formato da senha inválido (Conter pelo menos 6 digitos)<br>'
        senha.style.borderColor = 'red'
        valido = false
    } else {
        senha.style.borderColor = 'green'
    }

    if (valido) {

        if (email.value == 'diegocastro@gmail.com' && senha.value == '123456') {
            alert('Login realizado')
        } else {
            e.preventDefault()
            validacao.innerText = 'email ou senha de login incorretos'
        }
    }else{
        validacao.innerHTML = mensagens;
        return;
    }
})
