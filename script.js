function main(element) {
  let selectedDrop = element.getElementsByTagName('ul')[0]
  let arrow = element.getElementsByTagName('i')[0]
  if (selectedDrop.hidden) {
    selectedDrop.hidden = false
    arrow.style.transform = 'rotateZ(90deg)'
  }
  else {
    selectedDrop.hidden = true
    arrow.style.transform = ''
  }
}

for (let element_ of document.querySelectorAll('li#more')) {
  element_.onclick = element => main(element.srcElement)
}
