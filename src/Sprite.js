class Sprite{
    constructor(pos,imageSrc,frame_rate,animations){
        console.log("pass1")
        
        this.position = {
            x:pos[0],
            y:pos[1]
        }
        this.image = new Image()
        this.image.onload=()=>{
            this.loaded=true
            this.width=this.image.width/6
            this.height = this.image.height
        }
        this.image.src = imageSrc
        this.loaded=false
        this.frame_rate=frame_rate
        this.currentFrame = 0
        this.elapsedFrame = 0
        this.frameBuffer =6
        this.animations=animations
        console.log('animation:',animations)
        if(this.animations){
            for(let key in this.animations){
                const image=new Image()
                image.src=this.animations[key].imageSrc
                this.animations[key].image = image
            }
            console.log(this.animations)
        }
    }
    draw(ctx){
        // console.log("this.loaded", this.loaded)
        console.log('observe',this.width * (this.currentFrame % 6 ))
        if(!this.loaded)return
        const cropbox = {
            position:{
                x:this.width*(this.currentFrame%6),
                y:0
            },
            width: this.width,
            height: this.height,
        }
        ctx.drawImage(this.image, cropbox.position.x, cropbox.position.y,cropbox.width,cropbox.height,this.position.x,this.position.y,this.width,this.height)

    }

};
export default Sprite;



