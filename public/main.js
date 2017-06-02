function handleMenu(){
  const menu = document.getElementById('hamburger-menu')
  const firstSpan = document.getElementById('first-span')
  const secondSpan = document.getElementById('second-span')
  const thirdSpan = document.getElementById('third-span')
  if(!menu.style.animationName){
    menu.style.animationName = "slide-down"
    firstSpan.style.animationName = 'rotate-down'
    secondSpan.style.display = 'none'
    thirdSpan.style.animationName = 'rotate-up'
  }
  else if(menu.style.animationName === 'slide-up'){
    menu.style.animationName = "slide-down"
    firstSpan.style.animationName = 'rotate-down'
    secondSpan.style.display = 'none'
    thirdSpan.style.animationName = 'rotate-up'
  }
  else{
    menu.style.animationName = "slide-up"
    firstSpan.style.animationName = 'rotate-down-reset'
    secondSpan.style.display = 'block'
    thirdSpan.style.animationName = 'rotate-up-reset'
  }
}
