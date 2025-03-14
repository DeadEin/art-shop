let kot = document.querySelector('.kot')
let card = document.querySelector('.card')
       card.addEventListener('click', function (e) {
       kot.style.transform = `translate(${ e.pageX - 25}px, ${e.pageY - 25}px)`
       kot.style.opasity = 1
    anime({
    targets: '.kot',
    opasity: 0,
    scale: 2,
    display: 'none',
    duration: 2000
    })
})
