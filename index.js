window.addEventListener('keydown', playSound)

// 'keydown' attribute gives keyCode
function playSound(event) {
  // parameter targets the whole tag
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)

  if (!audio) return // no key found

  audio.currentTime = 0
  audio.play()
  key.classList.add('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

function removeTransition(event) {
  if (event.propertyName !== 'transform') return // skip other properties, only focus transform
  this.classList.remove('playing') // this removes to the key element
}
