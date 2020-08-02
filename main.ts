input.onButtonPressed(Button.A, function () {
    basic.showNumber(Math.round((endtime - starttime) / 100))
})
input.onGesture(Gesture.FreeFall, function () {
    if (freefall == false) {
        freefall = true
        endtime = input.runningTime()
        basic.showArrow(ArrowNames.South)
    }
})
input.onGesture(Gesture.ThreeG, function () {
    if (liftoff == false) {
        liftoff = true
        starttime = input.runningTime()
        basic.showArrow(ArrowNames.North)
    }
})
let starttime = 0
let endtime = 0
let freefall = false
let liftoff = false
basic.showIcon(IconNames.Yes)
liftoff = false
freefall = false
