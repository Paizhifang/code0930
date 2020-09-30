let DEGRESS = 0
input.onGesture(Gesture.Shake, function () {
    DEGRESS = randint(80, 100)
    if (DEGRESS >= 90) {
        basic.showNumber(DEGRESS)
        basic.showString("A+")
    } else if (DEGRESS >= 85) {
        basic.showNumber(DEGRESS)
        basic.showString("A")
    } else if (DEGRESS >= 80) {
        basic.showNumber(DEGRESS)
        basic.showString("A-")
    }
})
