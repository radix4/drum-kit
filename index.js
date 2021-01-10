window.addEventListener('keydown', playSound)

// 'keydown' attribute gives keyCode
function playSound(event) {
  // parameter targets the whole tag
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
  console.log(key)

  if (!audio) return // no key found

  audio.currentTime = 0
  audio.play()
}
