// import idle from'../vendor/idle.png'
import Platform from "./platform"
import Sprite  from "./Sprite"

class Player extends Sprite{
    static POS = {
        x: 30,
        y: 400
    }
    
    constructor(imageSrc,animations) {
        console.log('play_pass1','this')
        
       
        console.log('play_pass1')
        console.log(animations)
        super([Player.POS.x, Player.POS.y], imageSrc,6,animations)
        this.gravity=0.3
        this.onground=true
        // this.width = 8
        // this.height = 8
        this.velocity = {
            x: 0,
            y: 1
        }
        this.animations=animations
        // this.image = createImage(idle)
        
    }

   
    move(dir){
        // console.log(dir)
        addEventListener('keydown', ({key})=>{
            // console.log(key)
            if (key === 'a' || key === 'd') {
                this.velocity.x = dir
            }

        })
        addEventListener('keyup', ({ key }) => {
            // console.log("keyup:",key === 'a' || key==='d')
            if(key === 'a' || key==='d') {
                this.velocity.x = 0
            }
        })
     
       
    }

    updateHitbox() {
        this.hitbox = {
            position: {
                x: this.position.x +18,
                y: this.position.y +16,
            },
            width: 10,
            height: 16,
        }
    }

    jump() {
        if(this.velocity.y===0){
            this.velocity.y = -5
            this.onground = false
        }
        
    }


    // draw(ctx) {
    //     // console.log("ctx,",ctx)
    //     ctx.fillStyle = 'red'
    //     ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    //     // ctx.drawImage(this.image, this.position.x,this.position.y)
    // }
    
    
}
export default Player