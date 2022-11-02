let canvas = document.getElementById("canvas")
let scoreid = document.getElementById("score")
let ctx = canvas.getContext('2d')
import bord_food_sanake from './bord_food_sanake.js'

// defind the canvas height and widht
canvas.width = 1000
canvas.height = 520
console.log(ctx)

// defind the main porgrame
let body = new bord_food_sanake(ctx, canvas.width/2.2, canvas.height/2.2,)
function gameloop(){
    body.bord(0, 0, canvas.width, canvas.height)
    body.sanakehead(30, 30,'red')
    body.SanakeFood(30, 30,'green')
    let score = body.sacore()
    scoreid.innerHTML = score
    let gameover = body.isgameover(canvas.width, canvas.height)
    if(gameover){
        alert('Game over: Start the game, press. Ctrl + R...')
        
    }
}


setInterval(gameloop, 1000/60);
// gameloop()
// document.addEventListener("keydown", (e)=>{
//     if(e.code == 'Enter'){
//         setInterval(gameloop, 1000/60);
//     }

// })

