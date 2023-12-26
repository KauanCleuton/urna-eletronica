nada demais
if (target.dataset.js === 'confirm-button') {
        numberVoto = parseInt(boxOne.textContent + boxTwo.textContent);

        if (numberVoto !== candidatos.candidato1.number && numberVoto !== candidatos.candidato2.number && numberVoto !== candidatos.candidato3.number && candidatos.candidato4.number) {
            boxOne.classList.add('hide');
            boxTwo.classList.add('hide');
            textFinal.classList.remove('hide');
            caixaCandidato.classList.add('hide');
            audioUrna.play();

            if (localStorage.getItem('votosEmBranco')) {
                votosEmBranco = parseInt(localStorage.getItem('votosEmBranco'));
            }
            votosEmBranco++;
            localStorage.setItem('votosEmBranco', votosEmBranco.toString());

        }
        if (numberVoto === candidatos.candidato1.number) {
            boxOne.classList.add('hide');
            boxTwo.classList.add('hide');
            textFinal.classList.remove('hide');
            caixaCandidato.classList.add('hide');
            audioUrna.play();
            if (localStorage.getItem('votosPaulo')) {
                votosPaulo = parseInt(localStorage.getItem('votosPaulo'));
            }
            votosPaulo++
            localStorage.setItem('votosPaulo', votosPaulo.toString());
        }
        if (numberVoto === candidatos.candidato2.number) {
            boxOne.classList.add('hide');
            boxTwo.classList.add('hide');
            textFinal.classList.remove('hide');
            caixaCandidato.classList.add('hide');
            audioUrna.play();
            if (localStorage.getItem('votosJacare')) {
                votosJacare = parseInt(localStorage.getItem('votosJacare'));
            }
            votosJacare++;
            localStorage.setItem('votosJacare', votosJacare.toString());
        }
        if (numberVoto === candidatos.candidato3.number) {
            boxOne.classList.add('hide');
            boxTwo.classList.add('hide');
            textFinal.classList.remove('hide');
            caixaCandidato.classList.add('hide');
            audioUrna.play();
            if (localStorage.getItem('votosLula')) {
                votosLula = parseInt(localStorage.getItem('votosLula'));
            }
            votosLula++
            localStorage.setItem('votosLula', votosLula.toString());
        }
        if (numberVoto === candidatos.candidato4.number) {
            boxOne.classList.add('hide');
            boxTwo.classList.add('hide');
            textFinal.classList.remove('hide');
            caixaCandidato.classList.add('hide');
            audioUrna.play();
            if (localStorage.getItem('votosBolsonaro')) {
                votosBolsonaro = parseInt(localStorage.getItem('votosBolsonaro'));
            }
            votosBolsonaro++;
            localStorage.setItem('votosBolsonaro', votosBolsonaro.toString());
        }
    }