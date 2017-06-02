function handleMenu(){
  const menu = document.getElementById('hamburger-menu')
  if(!menu.style.animationName){
    menu.style.animationName = "slide-down"
  }
  else if(menu.style.animationName === 'slide-up'){
    menu.style.animationName = "slide-down"
  }
  else{
    menu.style.animationName = "slide-up"
  }
}
