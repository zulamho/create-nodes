const div_red = document.createElement('div')
const div_green = document.createElement('div')
const div_blue = document.createElement('div')
div_red.className = 'red'
div_green.className = 'green'
div_blue.className = 'blue'

div_blue.prepend('я вложен')

div_red.prepend(div_green)

div_green.prepend(div_blue)

div_blue.prepend('я вложен')

console.log(div_green)