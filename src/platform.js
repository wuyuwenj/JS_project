class Platform{
    constructor(pos){
        // console.log("inplatform")
        this.position = {
            x:pos[0],
            y:pos[1]
        }
        this.width = 8
        this.height = 8
        // console.log("inplatform",this.position)
    }

    draw(ctx){
        // ctx.fillStyle = 'black'
        // ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    
}

export default Platform