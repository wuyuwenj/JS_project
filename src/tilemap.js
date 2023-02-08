class Tilemap {
    constructor(pos, imageSrc) {
        console.log("pass1")

        this.position = {
            x: pos[0],
            y: pos[1]
        }
        this.image = new Image()
        this.image.onload = () => {
            this.loaded = true
        }
        this.image.src = imageSrc
        this.loaded = false

    }
    draw(ctx) {
        console.log("this.loaded", this.loaded)
        if (!this.loaded) return
        // ctx.save()
        // ctx.scale(8,8)
        ctx.drawImage(this.image, this.position.x, this.position.y)
        // ctx.restore()
    }

};
export default Tilemap;