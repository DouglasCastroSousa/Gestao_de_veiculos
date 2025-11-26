const botaoCor = document.getElementById('btn_cor')

botaoCor.addEventListener('click', () => {
    if(document.body.dataset.bsTheme == 'dark'){
        document.body.dataset.bsTheme = 'light'
    }else{
        document.body.dataset.bsTheme = 'dark'
    }
})
