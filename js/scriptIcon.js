const btn = document.querySelector('.bi-heart-fill');
var isActive = true;

btn.addEventListener('click', () => {
  isActive=! isActive;
  if(isActive){
    btn.classList.add('text-dark');
    btn.classList.remove('text-secondary');
    btn.classList.add('bg-secondary');
    btn.classList.remove('bg-primary');
  }
  else{
    btn.classList.add('text-secondary');
    btn.classList.remove('text-light');
    btn.classList.add('bg-primary');
    btn.classList.remove('bg-secondary');
  }
})