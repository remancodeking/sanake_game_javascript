export default class bord_food_sanake {
  constructor(ctx, x, y){
    this.ctx = ctx 
    this.x = x
    this.y = y
    this.left = false
    this.right = false
    this.top= false
    this.bottom = false
    this.speed = 4
    this.foodx = 100
    this.foody = 100
    this.food_g_x = 950
    this.food_g_y = 500
    this.s_number = 0
  }
  bord(x,y, width,height){
    this.ctx.fillStyle = "#00002c"
    this.ctx.lineWidth = 10
    this.ctx.lineJoin = 'bevel'
    this.ctx.shadowColor = '#d53'
    this.ctx.shadowBlur = 4
    this.ctx.fillRect(x,y ,width,height)
  }
  sanakehead(width, height,bg){
    if(this.right){
        this.x += this.speed
    }
    else if(this.left){
        this.x -= this.speed
    }
    else if(this.top){
        this.y -= this.speed
    }
    else if (this.bottom){
        this.y += this.speed
    }
    this.ctx.fillStyle = bg
    this.ctx.fillRect(this.x,this.y ,width,height)
    

    document.addEventListener('keydown', (e)=>{
        switch (e.code) {
            case 'ArrowUp':
                this.left = false
                this.right = false
                this.top= true
                this.bottom = false
                break;
            case 'ArrowDown':
                this.left = false
                this.right = false
                this.top= false
                this.bottom = true
                break;
            case 'ArrowRight':
                this.left = false
                this.right = true
                this.top= false
                this.bottom = false
                break;
            case 'ArrowLeft':
                this.left = true
                this.right = false
                this.top= false
                this.bottom = false
                break;
        
            default:
                break;
        }
        
    })
  }
SanakeFood(width, height,bg){
    this.ctx.fillStyle = bg
    this.ctx.fillRect(this.foodx,this.foody ,width,height)
    // let condetion= this.x <= x+4
    let m = 20
    let p = 20
    let condetion= this.x >= this.foodx-m && this.x <= this.foodx+p
    let condetiony = this.y >= this.foody-m && this.y <= this.foody+p
    if(condetion && condetiony){
        let foodpositionx = Math.floor(Math.random() * this.food_g_x)
        let foodpositiony = Math.floor(Math.random() * this.food_g_y)
        this.foodx = foodpositionx
        this.foody = foodpositiony
        this.s_number += 1
    } 
}
isgameover(winx, winy){
    if(this.x >= winx || this.y >= winy){
        return true
    }
    else if(this.x <= 0 || this.y <= 0){
        return true
    }
    return false
}
sacore(){
    return this.s_number
}
}
