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
 input.addEventListener('blur', doIt)
 function doIt(e){
    let newDiv = document.createElement('div');
    newDiv.innerHTML = input.value;
    input.replaceWith(newDiv);

 }

