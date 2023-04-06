import GameView from "./scripts/game_view";
import Game from "./scripts/game";
// import './index.scss'

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')

    canvas.width = Game.DIM_X;
    canvas.height = Game.DIM_Y;

    const loading = document.createElement('div');
    loading.innerText = 'Loading...';
    document.body.appendChild(loading);

    const gamePromise = new Promise((resolve, reject) => {
        const game = new Game();
        game.loadImages()
            .then(() => {
                resolve(game);
            })
            .catch((error) => {
                reject(error);
            });
    });

    gamePromise.then((game) => {
        const gameview = new GameView(ctx, game);
        gameview.start();
        document.body.removeChild(loading);
    }).catch((error) => {
        console.error(error);
        loading.innerText = `Error: ${error.message}`;
    });
});
