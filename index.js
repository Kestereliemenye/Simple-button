const go = document.querySelector('.content'); 
const btn = document.querySelector('.submit-btn');

btn.addEventListener('click', pushContent);

function pushContent(e){
  alert(go.value);
}