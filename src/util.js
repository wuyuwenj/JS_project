import Platform from "./platform";
// export const collide=(player, platform) => {
//     // console.log(platform)
//     const dx = (player.position.x + player.width / 2) - (platform.position.x + platform.width / 2);
//     const dy = (player.position.y + player.height / 2) - (platform.position.y + platform.height / 2);
//     const width = (player.width + platform.width) / 2;
//     const height = (player.height + platform.height) / 2;
//     const crossWidth = width * dy;
//     const crossHeight = height * dx;
//     let collision = 'none';
//     //
//     // console.log("???")
//     if (Math.abs(dx) <= width && Math.abs(dy) <= height) {
//         if (crossWidth > crossHeight) {
//             collision = (crossWidth > (-crossHeight)) ? 'bottom' : 'left';
//         } else {
//             collision = (crossWidth > -(crossHeight)) ? 'right' : 'top';
//         }
//     }
//     return (collision);
// }

Array.prototype.parse2D = function () {
    const rows = []
    for (let i = 0; i < this.length; i += 108) {
        rows.push(this.slice(i, i + 108))
    }

    return rows
}

Array.prototype.createObjectsFrom2D = function () {
    const objects = []
    this.forEach((row, y) => {
        row.forEach((symbol, x) => {
            if (symbol === 236) {
                objects.push(new Platform([x*8,y*8]))
                
            }
        })
    })

    return objects
}

// export const action=(player,platform)=>{
//     let player_left = player.position.x//a
//     let player_top = player.position.y//b
//     let player_right = player.position.x+player.width//c
//     let player_bot = player.position.y+player.height//d

//     let platform_left = platform.position.x//e
//     let platform_top = platform.position.y//f
//     let platform_right = platform.position.x + platform.width//g
//     let platform_bot = platform.position.y + platform.height//h

//     if (player_bot >= platform_top && platform_right >= player_left && platform_left <= player_right){
//         return 'top'
//     } else{
//         return null
//     }
//     // } else if (player_left<=platform_right&&platform_right >= player_top && platform_top <= player_right){
//     //     return 'right'
//     // } else if (platform_top >= player_bot && platform_left <= player_bot && platform_bot >= player_left){
//     //     return 'top'
//     // } else if (platform_top <= player_right &&platform_left <= player_bot && platform_bot >= player_left){
//     //     return 'bot'
//     // } else{
//     //     return 'none'
//     // }
// }
// export const dist = (pos1, pos2) => Math.sqrt((pos1[0] - pos2[0]) ** 2 + (pos1[1] - pos2[1]) ** 2)

//                   b                          f
//               _________                   _________   
//              |         |                 |         | 
//              |         |  c              |         |
//          a   |         |            e    |         | g
//              |         |                 |         |
//               ---------                   ---------
//                  d                           h
// if (dir === 'top') {
//     if ()
//     } else if (dir === 'left') {

// } else if (dir === 'right') {

// } else if (dir === '')