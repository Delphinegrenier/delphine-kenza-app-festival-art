const btn = document.querySelector('.bi-heart-fill');
var isActive = true;

btn.addEventListener('click', () => {
  isActive=! isActive;
  console.log("hello")
  if(isActive){
    console.log('test if')
    btn.classList.add('text-light');
    btn.classList.remove('text-secondary');
  }
  else{
    console.log('test else')
    btn.classList.add('text-secondary');
    btn.classList.remove('text-light');
  }
})