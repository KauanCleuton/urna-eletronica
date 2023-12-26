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

let votosPaulo = 0
let votosJacare = 0
let votosEmBranco = 0
let votosLula = 0
let votosBolsonaro = 0
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
    },
    candidato3: {
        number: 13,
        nome: "Luiz Inácio Lula da Silva",
        partido: "Partido dos Trabalhadores (PT)",
        imageUrl: 'img/lula.png'
    },
    candidato4: {
        number: 22,
        nome: "Jair Messias Bolsonaro",
        partido: "Partido Liberal",
        imageUrl: 'img/jair.jpg'
    }
};

buttonConfirm.addEventListener('click', ({ target }) => {
    if (target.dataset.js === "blank-button") {
        boxOne.classList.add('hide');
        boxTwo.classList.add('hide');
        textFinal.classList.remove('hide');
        caixaCandidato.classList.add('hide');
        audioUrna.play();
        blankButton.setAttribute('disabled', "true")
        return;
    }

    if (target.dataset.js === 'correct-button') {
        if (boxTwo.innerText.trim() !== "" && !isNaN(boxTwo.innerText)) {
            boxTwo.textContent = "";
            caixaCandidato.classList.add('hide');
        } else if (boxOne.innerText.trim() !== "" && !isNaN(boxOne.innerText)) {
            boxOne.textContent = "";

        }
        correctButton.setAttribute('disabled', "true")
        return;
    }

    if (target.dataset.js === 'confirm-button') {
        numberVoto = parseInt(boxOne.textContent + boxTwo.textContent);
    
        boxOne.classList.add('hide');
        boxTwo.classList.add('hide');
        textFinal.classList.remove('hide');
        caixaCandidato.classList.add('hide');
        confirmButton.setAttribute('disabled', "true")
        audioUrna.play();
    
        if (numberVoto !== candidatos.candidato1.number && numberVoto !== candidatos.candidato2.number && numberVoto !== candidatos.candidato3.number && numberVoto !== candidatos.candidato4.number) {
            boxOne.classList.add('hide');
            boxTwo.classList.add('hide');
            textFinal.classList.remove('hide');
            caixaCandidato.classList.add('hide');

            if (localStorage.getItem('votosEmBranco')) {
                votosEmBranco = parseInt(localStorage.getItem('votosEmBranco'));
            }
            votosEmBranco++;
            localStorage.setItem('votosEmBranco', votosEmBranco.toString());

        } else if (numberVoto === candidatos.candidato1.number) {
            if (localStorage.getItem('votosPaulo')) {
                votosPaulo = parseInt(localStorage.getItem('votosPaulo'));
            }
            votosPaulo++;
            localStorage.setItem('votosPaulo', votosPaulo.toString());
        } else if (numberVoto === candidatos.candidato2.number) {
            if (localStorage.getItem('votosJacare')) {
                votosJacare = parseInt(localStorage.getItem('votosJacare'));
            }
            votosJacare++;
            localStorage.setItem('votosJacare', votosJacare.toString());
        } else if (numberVoto === candidatos.candidato3.number) {
            if (localStorage.getItem('votosLula')) {
                votosLula = parseInt(localStorage.getItem('votosLula'));
            }
            votosLula++;
            localStorage.setItem('votosLula', votosLula.toString());
        } else if (numberVoto === candidatos.candidato4.number) {
            if (localStorage.getItem('votosBolsonaro')) {
                votosBolsonaro = parseInt(localStorage.getItem('votosBolsonaro'));
            }
            votosBolsonaro++;
            localStorage.setItem('votosBolsonaro', votosBolsonaro.toString());
        }
        
        return;
    }
    
});

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
            }
            if (candidatos.candidato2.number === numberVoto) {
                spanNome.textContent = candidatos.candidato2.nome;
                spanNumber.textContent = candidatos.candidato2.number;
                spanPartido.textContent = candidatos.candidato2.partido;
                caixaCandidato.classList.remove('hide');
                const imageUrl = candidatos.candidato2.imageUrl;
                document.querySelector('.assets-main').setAttribute('src', imageUrl);
            }
            if (candidatos.candidato3.number === numberVoto) {
                spanNome.textContent = candidatos.candidato3.nome;
                spanNumber.textContent = candidatos.candidato3.number;
                spanPartido.textContent = candidatos.candidato3.partido;
                caixaCandidato.classList.remove('hide');
                const imageUrl = candidatos.candidato3.imageUrl;
                document.querySelector('.assets-main').setAttribute('src', imageUrl);
            }
            if (candidatos.candidato4.number === numberVoto) {
                spanNome.textContent = candidatos.candidato4.nome;
                spanNumber.textContent = candidatos.candidato4.number;
                spanPartido.textContent = candidatos.candidato4.partido;
                caixaCandidato.classList.remove('hide');
                const imageUrl = candidatos.candidato4.imageUrl;
                document.querySelector('.assets-main').setAttribute('src', imageUrl);
            }
        }
    });
});