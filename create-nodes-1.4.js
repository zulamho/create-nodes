const ul = document.createElement('ul')
ul.classList.add('list')
const li = document.createElement('li')
li.prepend('привет, мир')
ul.prepend(li)
console.log(li)
console.log(ul)