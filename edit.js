const content = document.querySelector('.word');
const btn = document.querySelector('.edit-btn');
const input = document.createElement('input');

btn.addEventListener('click', edit);
function edit(e){
    content.replaceWith(input);

}