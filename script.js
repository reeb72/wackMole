const cursor = document.querySelector('.cursor')
const holes = [...document.querySelectorAll('.hole')]
var gameoverscreen;
//converts into an array to allow random selection

const scoreElm = document.querySelector('.score span')
let score = 0
const sound = new Audio("au.wav")

let background = document.querySelector('#bg');
background.addEventListener('mousedown', () => {
    background.style.backgroundColor= 'red'
})
background.addEventListener('mouseup', () => {
    background.style.backgroundColor= 'lightgreen'
})

function run(){
    var canvas = document.getElementById("gameScreen");
    const i = Math.floor(Math.random() * holes.length)
    const hole = holes[i]

    let timer = null

    const img = document.createElement('img')
    img.classList.add('mole')
    img.src = 'Images/mole.png'
    //adding the mole image

    img.addEventListener('click', () => {
        score += 1
        sound.play()
        scoreElm.textContent = score
        img.src = 'Images/hurt.png'
        clearTimeout(timer)
        setTimeout(() => {
            hole.removeChild(img)
            run()
        }, 100)

        gameoverscreen = document.getElementById("gameOver");
    })

    hole.appendChild(img)

    timer = setTimeout(() => {
        hole.removeChild(img)
        run()
    }, 2500)
}
run()

window.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY + 'px'
    cursor.style.left = e.pageX + 'px'
})
window.addEventListener('mousedown', () => {
    cursor.classList.add('hammerdown')
})
window.addEventListener('mouseup', () => {
    cursor.classList.remove('hammerdown')
})

