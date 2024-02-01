const content = document.querySelector('.word');
const btn = document.querySelector('.edit-btn');
const input = document.createElement('input');


btn.addEventListener('click', edit);
function edit(e){
    let text = content.innerHTML;
    input.type = 'text';
    input.value= text;
    content.innerHTML = '' ;
    content.appendChild(input);
    input.focus();
    input.setSelectionRange(text.length, text.length);
    
}

console.log(content.value);