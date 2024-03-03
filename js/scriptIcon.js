const btn = document.querySelector('.bi-heart-fill');
var isActive = true;

btn.addEventListener('click', () => {
  isActive=! isActive;
  if(isActive){
    btn.classList.add('text-light');
    btn.classList.remove('text-secondary');
  }
  else{
    btn.classList.add('text-secondary');
    btn.classList.remove('text-light');
  }
})