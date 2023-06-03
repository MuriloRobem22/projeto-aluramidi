function tocaSom(idElementoAudio) {
  const elemento = document.querySelector(idElementoAudio).play()

  if (elemento === null) {
    console.log('elemento não encontrado')
  }

  if (elemento != null) {
    elemento.play()
  }
}

const listaDeTeclas = document.querySelectorAll('.tecla')

for (i = 0; i < listaDeTeclas.length; i++) {
  const tecla = listaDeTeclas[i]
  const instrumento = tecla.classList[1]
  const idAudio = `#som_${instrumento}`

  tecla.onclick = function () {
    tocaSom(idAudio)

    tecla.onkeydown = function (evento) {
      console.log(evento.code === 'Space')
      if (evento.code === 'Space' || evento.code === 'Enter') {
        tecla.classList.add('ativa')
      }
    }

    tecla.onkeyup = function () {
      tecla.classList.remove('ativa')
    }
  }
}
