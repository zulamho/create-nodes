let arr = ["html", "css", "js"]
const ul = document.createElement('ul')


function render(name) {
for(let i = 0 ; i < name.length ; i++){
  const li = document.createElement('li')
  ul.append(li)
  li.append(name[i])
}
 return document.body.append('ul')
}
render(arr)



console.log(ul)
