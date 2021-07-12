
const div = document.createElement('div')
const ul = document.createElement('ul')
const li = document.createElement('li')
const a  = document.createElement('a')
const li2 = document.createElement('li')

div.prepend(ul)
ul.prepend(li)
li.prepend(a)
a.prepend.href = "https://instagram.com/intocode"
a.prepend('Наш Инстаграм')

ul.append(li2)
li.prepend(a)
a.href = "https://intocode.ru"
a.prepend('наш сайт')
console.log(div)


let arr = ["html", "css", "js"]
const ul = document.createElement('ul')
for(let i = 0 ; i < arr.length ; i++){
     const li = document.createElement('div')
     ul.prepend(li)
}



console.log(ul)