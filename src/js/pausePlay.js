
const pausePlay = (element) => {
    if (element.paused) {
        element.play()
    } else {
        element.pause()
    }
}

export default pausePlay;