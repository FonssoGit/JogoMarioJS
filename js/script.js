const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const placar = document.querySelector('.placar h1')
const mobile = document.querySelector('body')
let pontoPlacar = 0


const jump = () =>{
    mario.classList.add('jump')
    setTimeout(()=> {
        mario.classList.remove('jump')
    }, 500)
    pontoPlacar ++
}

const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','')
    const cloudsPosition = clouds.offsetLeft
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = `none`
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = `none`
        mario.style.bottom  = `${marioPosition}px`
        mario.src = './img/mario-jump-images/game-over.png'
        mario.style.width = '70px'
        mario.style.marginLeft = '50px'
        clouds.style.animation = `none`
        clouds.style.left  = `${cloudsPosition}px`
        clearInterval(loop)
    }
    if(marioPosition >= pipePosition ){ 
        placar.innerHTML = `0${pontoPlacar }`
    }

}, 10)

mobile.addEventListener('click',()=>{
    mario.classList.add('jump')
    setTimeout(()=> {
        mario.classList.remove('jump')
    }, 400)
    pontoPlacar ++
})

document.addEventListener('keydown', jump)
