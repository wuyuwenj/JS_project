// import idle from'../vendor/idle.png'
import Platform from "./platform"
import Sprite  from "./Sprite"

class Player extends Sprite{
    static POS = {
        x: 200,
        y: 400
    }
    
    constructor(imageSrc,animations) {
        // console.log('play_pass1','this')
        
       
        // console.log('play_pass1')
        // console.log(animations)
        super([Player.POS.x, Player.POS.y], imageSrc,6,animations)
        this.gravity=0.4
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

            if (key === 'a' || key === 'd') {
                this.velocity.x = dir
            }
            if(key==='a'){
                this.switchSprite('left')
            }else if(key==='d'){
                this.switchSprite('right')
            }

        })
        addEventListener('keyup', ({ key }) => {
            // console.log("keyup:",key === 'a' || key==='d')
            if(key === 'a' || key==='d') {
                this.velocity.x = 0
            }
        })
     
       
    }

    switchSprite(name) {
        // console.log(this.animations)
        if (this.image === this.animations[name].image) return
        this.currentFrame = 0
        this.image = this.animations[name].image
        this.frame_rate = this.animations[name].frame_rate
        this.frameBuffer = this.animations[name].frame_buffer
        this.loop = this.animations[name].loop
        this.currentAnimation = this.animations[name]
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
        // console.log(this.velocity.x, "velocity bj")
        // console.log(this.velocity.y, "velocityy bj")
        if(this.velocity.y===0){
            this.velocity.y = -5
            this.onground = false
        }


    }

    //drawing char as a block for testing
    // draw(ctx) {
    //     // console.log("ctx,",ctx)
    //     ctx.fillStyle = 'red'
    //     ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    //     // ctx.drawImage(this.image, this.position.x,this.position.y)
    // }
    
    
}
export default Player