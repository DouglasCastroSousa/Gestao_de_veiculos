const DIV_GRAF1 = document.getElementById('grafico1');
const DIV_GRAF2 = document.getElementById('grafico2');

new Chart(DIV_GRAF1, {
    type: 'bar',
    data: {
      labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
      datasets: [{
        label: 'Visita ao site',
        data: [45, 42, 34, 51, 46],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


  new Chart(DIV_GRAF2, {
    type: 'line',
    data: {
      labels: ['Março', 'Abril', 'Maio'],
      datasets: [{
        label: 'Vendas do Ano',
        data: [123, 156, 189],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

// adicionando API ao meu dashboard
async function loading_message() {
    const texto = document.getElementById("boas_vindas");
    const advice_url = 'https://api.adviceslip.com/advice';

    const resposta = await fetch(advice_url);
    const dados = await resposta.json();

    const mensagem_em_ingles = dados.slip.advice;
    
    const texto_para_url = encodeURIComponent(mensagem_em_ingles)
    const lingua_origem = "en";
    const lingua_objetivo = "pt";

    const translate_url = `https://api.mymemory.translated.net/get?q=${texto_para_url}&langpair=${lingua_origem}|${lingua_objetivo}`;

    const resposta_trad = await fetch(translate_url);
    const dados_trad = await resposta_trad.json();

    texto.textContent = (dados_trad.responseData.translatedText);
}

loading_message();

