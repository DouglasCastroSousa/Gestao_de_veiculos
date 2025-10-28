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
async function loadmessage(){
  const mensagem = document.getElementById("boas_vindas");
  const url = 'https://api.adviceslip.com/advice';

  const response = await fetch(url);
  const datas = await response.json();

  mensagem.textContent = datas.slip.advice; // coloca o conselho no HTML

}

loadmessage();
