import Game from "./game";
import { action } from "./util";
import { collide } from "./util"
import Sprite from "./Sprite";
import Tilemap from "./tilemap";
class GameView {
    
    constructor(ctx) {
        this.ctx = ctx;
        this.game = new Game(ctx);
        this.lastTime = 0;
        this.levels=1;
        
        
    }

    start() {
        console.log('pass')
        this.bindKeyHandlers();
        
      
        window.requestAnimationFrame(this.animate.bind(this))
    }

    animate(time) {
        let timeDelta = time - this.lastTime;
        // console.log("this.game.player", this.player1.position)
        this.player1 = this.game.player
        this.platforms = this.game.platforms
        this.velapply()
        this.player1.updateHitbox()
        this.HorizontalCollisions()
        this.applyGravity()
        this.player1.updateHitbox()
        this.VerticalCollisions()
        // console.log(this.game.change_level,"level!!")
        if(this.game.change_level===false){
            this.collidewithduck()
        }
        console.log('pass')
        console.log('key', keys.r)
        if(keys.r===true){
            console.log('r pressed')
        }
        // console.log(this.game.ducks[0], "ducksss!!")
        this.game.draw(this.ctx);
        this.player1.updateHitbox()
        // console.log(this.player1.position)
        // console.log(this.game.platforms)
        // console.log(this.player1.hitbox.position.x)
        // console.log(this.player1.hitbox.x)
        // console.log(this.player1.hitbox)
        //hitbox
        // this.ctx.fillStyle = 'red'
        // this.ctx.fillRect(this.player1.hitbox.position.x, this.player1.hitbox.position.y, this.player1.hitbox.width, this.player1.hitbox.height)
        this.lastTime = time;
        window.requestAnimationFrame(this.animate.bind(this))
    }

    velapply(){
        this.game.player.position.y += this.game.player.velocity.y
        this.game.player.position.x += this.game.player.velocity.x
    }
    
    collidewithduck(){
        // console.log(this.game.platforms)
        // console.log(this.game.ducks[this.game.level])
        for(let i=0;i<this.game.ducks.length;i++){

            if (this.game.ducks[i] &&this.game.player.hitbox &&collide(this.game.player.hitbox, this.game.ducks[i]) != 'none'){
                this.game.level++
                this.game.change_level = true
            }
        }
    }

    bindKeyHandlers() {
        key('a', () => this.game.player.move(-2));
        key('d', () => this.game.player.move(2));
        key('w', () => this.game.player.jump());
        // key('enter', () => this.game.player.shoot());
    }
    //checking collision on top and bottom
    HorizontalCollisions() {
        for (let i = 0; i < this.platforms.length; i++) {
            const collisionBlock = this.platforms[i]
            
            // if a collision exists
            if (
                this.player1.hitbox.position.x <=
                collisionBlock.position.x + collisionBlock.width &&
                this.player1.hitbox.position.x + this.player1.hitbox.width >=
                collisionBlock.position.x &&
                this.player1.hitbox.position.y + this.player1.hitbox.height >=
                collisionBlock.position.y &&
                this.player1.hitbox.position.y <=
                collisionBlock.position.y + collisionBlock.height
            ) {
                // console.log('collusion!!!','hor')
                //push back out the block
                if (this.player1.velocity.x < -0) {
                    const offset = this.player1.hitbox.position.x - this.player1.position.x
                    this.player1.position.x =collisionBlock.position.x + collisionBlock.width - offset + 0.01
                    break
                }
                //push back out the block
                if (this.player1.velocity.x > 0) {
                    const offset = this.player1.hitbox.position.x - this.player1.position.x + this.player1.hitbox.width
                    this.player1.position.x = collisionBlock.position.x - offset - 0.01
                    break
                }
            }
        }
    }

    applyGravity() {
        this.player1.velocity.y += this.player1.gravity
        this.player1.position.y += this.player1.velocity.y
    }

    VerticalCollisions() {
        for (let i = 0; i < this.platforms.length; i++) {
            const collisionBlock = this.platforms[i]

            if (
                this.player1.hitbox.position.x <=
                collisionBlock.position.x + collisionBlock.width &&
                this.player1.hitbox.position.x + this.player1.hitbox.width >=
                collisionBlock.position.x &&
                this.player1.hitbox.position.y + this.player1.hitbox.height >=
                collisionBlock.position.y &&
                this.player1.hitbox.position.y <=
                collisionBlock.position.y + collisionBlock.height
            ) {
                // console.log('collusion!!!','vert!')
                //push back out the block
                if (this.player1.velocity.y < 0) {
                    this.player1.velocity.y = 0
                    const offset = this.player1.hitbox.position.y - this.player1.position.y
                    this.player1.position.y =
                        collisionBlock.position.y + collisionBlock.height - offset + 0.001
                    break
                }
                //push back out the block
                if (this.player1.velocity.y > 0) {
                    this.player1.velocity.y = 0
                    const offset =
                        this.player1.hitbox.position.y - this.player1.position.y + this.player1.hitbox.height
                    this.player1.position.y = collisionBlock.position.y - offset - 0.001
                    break
                }
            }
        }
    }
}




export default GameView;
