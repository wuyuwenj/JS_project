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
        // this.levels=1;
        this.endingLevel=3;
        
    }

    start() {
        this.bindKeyHandlers();
        
      
        window.requestAnimationFrame(this.animate.bind(this))
    }
    ChangeToLosingScreen(currentgame){
        document.getElementById('canvas').style.display = 'none';
        document.getElementById('Game-over-screen').style.display = 'flex';

        document.getElementById("restart-game-button").addEventListener("click", function () {
            currentgame.level = 0;
            currentgame.updatemap();

            document.getElementById("Game-over-screen").style.display = "none";
            document.getElementById("canvas").style.display = "block";
        });
        document.getElementById("main-menu-button").addEventListener("click", function () {
            currentgame.level = 0;
            currentgame.updatemap();
            document.getElementById("Game-over-screen").style.display = "none";
            document.getElementById("game-description").style.display = "flex";
        });
        
    }
    ChangeToWinningScreen(currentgame,ctx){
        document.getElementById('canvas').style.display = 'none';
        document.getElementById('winning-screen').style.display = 'flex';

        document.getElementById("win-restart-game-button").addEventListener("click", function () {
            currentgame.level = 0;
            currentgame.updatemap();


            document.getElementById("winning-screen").style.display = "none";
            document.getElementById("canvas").style.display = "block";
            currentgame = new Game(this.ctx);
        });

        document.getElementById("win-main-menu-button").addEventListener("click", function () {
            currentgame.level = 0;
            currentgame.updatemap();

            document.getElementById("winning-screen").style.display = "none";
            document.getElementById("game-description").style.display = "flex";
            currentgame = new Game(this.ctx);

        });
    }
    animate(time) {
        // let timeDelta = time - this.lastTime;
        let triggerHoriCol=false;
        if(this.game.level===this.endingLevel){
            this.game.player.position = {
                x: 200,
                y: 400
            }
            this.game.player.velocity = {
                x: 0,
                y: 0
            }
            this.ChangeToWinningScreen(this.game,this.ctx);
            
        }
        // console.log(this.game.player.position.y,"current y")
        // console.log(this.game.player.position.x, "current x")

        this.player1 = this.game.player
        this.platforms = this.game.platforms
        this.velapply()
        this.player1.updateHitbox()
        const hitboxX = this.game.player.hitbox.position.x;
        this.HorizontalCollisions()
        // console.log(triggerHoriCol,"aftrer horizontal")
        this.applyGravity()
        
        if (this.game.player.position.x > 635.9) {
            this.game.player.position.x = 635.9

        }
        this.player1.updateHitbox()
        

        this.VerticalCollisions(this.player1.position.x, this.player1.position.y, triggerHoriCol);
        if(this.game.change_level===false){
            this.collidewithduck()
        }

        if(keys.r.pressed===true){
            this.game.updatemap()
            keys.r.pressed=false
        }
        this.game.draw(this.ctx);
        this.player1.updateHitbox()
  
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
            const collisionBlock = this.platforms[i];
            //check if a collusion with a block is happening
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
                const prevPositionY = this.player1.position.y - this.player1.velocity.y;
                const wasAboveBlock = prevPositionY + this.player1.hitbox.height <= collisionBlock.position.y;
                const wasBelowBlock = prevPositionY >= collisionBlock.position.y + collisionBlock.height;

                //check if the player is on top or below of the block
                //would push back the player even on a flat surface if not added
                if (wasAboveBlock || wasBelowBlock) {
                    continue;
                }

                //push back out the block
                if (this.player1.velocity.x < 0) {
                    const offset = this.player1.hitbox.position.x - this.player1.position.x;
                    this.player1.position.x = collisionBlock.position.x + collisionBlock.width - offset + 0.01;
                    break;
                }
                //push back out the block
                if (this.player1.velocity.x > 0) {
                    const offset = this.player1.hitbox.position.x - this.player1.position.x
                    this.player1.position.x = collisionBlock.position.x - this.player1.hitbox.width - offset - 0.1;
                    break;
                }
            }
        }
    }


    applyGravity() {
        this.player1.velocity.y += this.player1.gravity
        this.player1.position.y += this.player1.velocity.y
    }

    VerticalCollisions(updatedX, updatedY, triggerHoriCol) {
        for (let i = 0; i < this.platforms.length; i++) {
            const collisionBlock = this.platforms[i]

            if (
                this.player1.hitbox.position.x <
                collisionBlock.position.x + collisionBlock.width &&
                this.player1.hitbox.position.x + this.player1.hitbox.width >
                collisionBlock.position.x &&
                this.player1.hitbox.position.y + this.player1.hitbox.height >
                collisionBlock.position.y &&
                this.player1.hitbox.position.y <
                collisionBlock.position.y + collisionBlock.height
            ) {
                
               
                // Top collision
                if (this.player1.velocity.y > 0 ) {
                    this.player1.velocity.y = 0;
                    const offset = this.player1.hitbox.position.y - this.player1.position.y + this.player1.hitbox.height;
                    this.player1.position.y = collisionBlock.position.y - offset - 0.001;

                    break;
                }

                // Bottom collision
                if (this.player1.velocity.y < 0 ) {
                    this.player1.velocity.y = 0;
                    const offset = this.player1.hitbox.position.y - this.player1.position.y;
                    this.player1.position.y = collisionBlock.position.y + collisionBlock.height - offset + 0.001;

                    break;
                }
            }
        }
    }

}




export default GameView;
