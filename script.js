const MAIN = document.querySelector('.main')
const LEFT = document.querySelector('.main__img-1')
const RIGHT = document.querySelector('.main__img-2')

LEFT.addEventListener('mouseenter',() => MAIN.classList.add('left'))
LEFT.addEventListener('mouseleave',() => MAIN.classList.remove('left'))

RIGHT.addEventListener('mouseenter',() => MAIN.classList.add('right'))
RIGHT.addEventListener('mouseleave',() => MAIN.classList.remove('right'))

