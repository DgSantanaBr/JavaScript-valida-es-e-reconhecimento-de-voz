const elementoChute = document.getElementById('chute')

//API
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()
//adicionamos um evento e acessa a propriedade “results”, depois as duas arrays de índice “0” e por fim o “transcript” que é onde fica o conteúdo falado.
recognition.addEventListener('result', onSpeak)

//arrays de índice “0” e “transcript”
function onSpeak(e){
  chute = e.results[0][0].transcript
  exibeChuteNaTela(chute)
  //validação do valor de chute de acordo com numero secreto
  verificaSeChuteTemValorValido(chute)
}

//Seleciona o audio transcrito no e(vento), e insere na const elementoChute estilizando e inserindo o valor de chute.
function exibeChuteNaTela(chute){
  elementoChute.innerHTML = `
  <div> Você disse :</div>
  <span class = "box">${chute}</span>
  `
}

recognition.addEventListener('end', () => recognition.start())
