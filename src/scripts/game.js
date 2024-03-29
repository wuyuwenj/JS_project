import Player from "./player"
import Tilemap from "./tilemap";
class Game {
    static DIM_X = 8*108;//864
    static DIM_Y = 8*64;//512
    constructor(ctx) {
        const ani_char={
            left:{
                frame_rate: 6,
                frame_buffer:6,
                loop:true,
                imageSrc:'Char_sprite_left.png'
            },
            right: {
                frame_rate: 6,
                frame_buffer: 6,
                loop: true,
                // imageSrc: 'image/Char_sprite.png'
                // imageSrc: './image/Char_sprite.png'
                // imageSrc: '../../image/Char_sprite.png'
                imageSrc: 'Char_sprite.png'
            },
        }
        this.level=0
        this.maxlevel=2;
        this.change_level=false
        // this.bullets = []
        this.enemies = []
        this.platforms=[]
        this.ducks=[]
            this.addPlatform(this.level)
            this.addDucks(this.level)
        
        this.image = new Tilemap([0, 0], 'level1.png')
        this.player = new Player('Char_sprite.png', ani_char)

    }

    addPlatform(current_level){
        
        let parsedCollisions = collision_levels[current_level].parse2D()
        this.platforms = parsedCollisions.createObjectsFrom2D()

    }

    addDucks(current_level){
        let ducks = duckmaps[current_level].parse2D()
        this.ducks = ducks.createObjectsFrom2D()
    }

    draw(ctx){
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y)
        // console.log(this.platform,'allplatform')
        if(this.change_level){
            this.updatemap()
        }
        // console.log(this.platforms)
        // for(let i=0;i<this.platforms.length;i++){
        //     this.platforms[i].draw(ctx)
        // }
        // console.log('pass1')
        if(this.level===2){
            
        }
        this.image.draw(ctx)
        // console.log('pass2')
        // console.log(this.level)
        this.player.draw(ctx)
        // console.log('pass3')
        this.updateFrames()
    }
    // add(obj){
    //     if(obj instanceof Bullet){
    //         this.bullets.push(obj)
    //     }
    // }
    updatemap(){
        const ani_char = {
            left: {
                frame_rate: 6,
                frame_buffer: 6,
                loop: true,
                imageSrc: 'Char_sprite_left.png'
            },
            right: {
                frame_rate: 6,
                frame_buffer: 6,
                loop: true,
                imageSrc: 'Char_sprite.png'
            },
        }
        this.platforms = []
        this.ducks = []

        if(this.level<=this.maxlevel){
        this.addPlatform(this.level)
        this.addDucks(this.level)
        }
        if(this.level===0){
            this.image = new Tilemap([0, 0], 'level1.png')
        }else if(this.level===1){
            this.image = new Tilemap([0, 0], 'level2.png')
        }else if(this.level===2){
            this.image = new Tilemap([0, 0], 'level3.png')
        }
        
        this.change_level = false
        this.player.position={
            x:200,
            y:400
        }
        this.player.updateHitbox()
    }
    updateFrames() {
        this.player.elapsedFrame++
        if(this.player.elapsedFrame%this.player.frameBuffer===0){
            if (this.player.currentFrame < this.player.frame_rate - 1) this.player.currentFrame++
            else this.player.currentFrame = 0
        }
    }
}
export default Game;