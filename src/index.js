import GameView from "./scripts/game_view";
import Game from "./scripts/game";
// import './index.scss'

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')

    canvas.width = Game.DIM_X;
    canvas.height = Game.DIM_Y;

    // const loading = document.createElement('div');
    // loading.innerText = 'Loading...';
    // document.body.appendChild(loading);

    setTimeout(() => {
        const game = new Game();
        const gameview = new GameView(ctx, game);
        gameview.start();
        // document.body.removeChild(loading);
    }, 2000); // 2000ms delay for demonstration purposes only
});
