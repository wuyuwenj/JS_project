const keys = {
    w: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
    d: {
        pressed: false,
    },
}

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
            break
        case 'a':
            // move player to the left
            keys.a.pressed = true
            break
        case 'd':
            // move player to the right
            keys.d.pressed = true
            break
    }

})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'a':
            // move player to the left
            keys.a.pressed = false

            break
        case 'd':
            // move player to the right
            keys.d.pressed = false

            break
    }
})