const arr = [{name: 'Google',url: 'https://google.com'},{name: 'Instagram',url: 'https://instagram.com'},{name: 'intocode',url: 'https://intocode.ru'},]
function render(link) {
    const ul = document.createElement('ul');
    
    for(let i = 0 ; i < link.length ; i++){
    const li = document.createElement('li')
    const a = document.createElement('a')
      a.setAttribute('href', i.url);
      a.textContent = arr[i].name;
        li.prepend(a);
        ul.append(li);
    }
    return document.body.append(ul)

} 
console.log(render(arr))

