const buttons = Array.from(document.querySelectorAll('.button'));
const blankButton = document.querySelector('.blank-button');
const correctButton = document.querySelector('.correct-button');
const confirmButton = document.querySelector('.confirm-button');
const boxOne = document.querySelector('.caixa1');
const boxTwo = document.querySelector('.caixa2');
const textFinal = document.querySelector('.fim');
const buttonConfirm = document.querySelector('.button-confirm');
const spanNome = document.querySelector('.nome');
const caixaCandidato = document.querySelector('.candidato');
const spanNumber = document.querySelector('.numero');
const spanPartido = document.querySelector('.partido');
let numberVoto = "";
const audioUrna = new Audio('./audio/urna.mp3');

const votosPaulo = 0
const votosJacare = 0
const votosEmBranco = 0
let candidatos = {
  candidato1: {
    number: 69,
    nome: "Paulo Plinio",
    partido: "Partido do Pobre Feliz (PPF)",
    imageUrl: 'img/paulo-candidato.png'
  },
  candidato2: {
    number: 71,
    nome: "Jacare Pereira",
    partido: "União Jacare (UJ)",
    imageUrl: 'img/jacare.pereira.png'
  }
};

buttonConfirm.addEventListener('click', ({ target }) => {
  if (target.dataset.js === "blank-button") {
    boxOne.classList.add('hide');
    boxTwo.classList.add('hide');
    textFinal.classList.remove('hide');
    caixaCandidato.classList.add('hide');
    audioUrna.play();
    return;
  }

  if (target.dataset.js === 'correct-button') {
    if (boxTwo.innerText.trim() !== "" && !isNaN(boxTwo.innerText)) {
      boxTwo.textContent = "";
      caixaCandidato.classList.add('hide');
    } else if (boxOne.innerText.trim() !== "" && !isNaN(boxOne.innerText)) {
      boxOne.textContent = "";

    }
  }

  if (target.dataset.js === 'confirm-button') {
    numberVoto = parseInt(boxOne.textContent + boxTwo.textContent);

    if (numberVoto !== candidatos.candidato1.number && numberVoto !== candidatos.candidato2.number) {
      boxOne.classList.add('hide');
      boxTwo.classList.add('hide');
      textFinal.classList.remove('hide');
      caixaCandidato.classList.add('hide');
      audioUrna.play();
      ++votosEmBranco
    }
    if (numberVoto === candidatos.candidato1.number) {
      boxOne.classList.add('hide');
      boxTwo.classList.add('hide');
      textFinal.classList.remove('hide');
      caixaCandidato.classList.add('hide');
      audioUrna.play();
      ++votosEmBranco
    }
    if (numberVoto === candidatos.candidato2.number) {
      boxOne.classList.add('hide');
      boxTwo.classList.add('hide');
      textFinal.classList.remove('hide');
      caixaCandidato.classList.add('hide');
      audioUrna.play();
      ++votosEmBranco

    }
  }});

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (boxOne.innerText.trim() === "") {
        boxOne.textContent = button.textContent;
        boxTwo.textContent = "";
      } else if (boxTwo.innerText.trim() === "") {
        boxTwo.textContent = button.textContent;
        const numberVoto = parseInt(boxOne.innerText + boxTwo.innerText);
        if (candidatos.candidato1.number === numberVoto) {
          spanNome.textContent = candidatos.candidato1.nome;
          spanNumber.textContent = candidatos.candidato1.number;
          spanPartido.textContent = candidatos.candidato1.partido;
          caixaCandidato.classList.remove('hide');
          const imageUrl = candidatos.candidato1.imageUrl;
          document.querySelector('.assets-main').setAttribute('src', imageUrl);
        } else if (candidatos.candidato2.number === numberVoto) {
          spanNome.textContent = candidatos.candidato2.nome;
          spanNumber.textContent = candidatos.candidato2.number;
          spanPartido.textContent = candidatos.candidato2.partido;
          caixaCandidato.classList.remove('hide');
          const imageUrl = candidatos.candidato2.imageUrl;
          document.querySelector('.assets-main').setAttribute('src', imageUrl);
        }
      }
    });
  });