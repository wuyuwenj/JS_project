import GameView from "./game_view";
import Game from "./game";

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')

    canvas.width = Game.DIM_X;
    
    canvas.height = Game.DIM_Y;
 
    
    const gameview = new GameView(ctx);
    gameview.start();

    

});

