input.onButtonPressed(Button.A, function () {
    start = true
    basic.showIcon(IconNames.Triangle)
})
input.onGesture(Gesture.FreeFall, function () {
    if (freefall == false) {
        freefall = true
        endtime = input.runningTime()
        basic.showArrow(ArrowNames.South)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber((endtime - starttime) / 1000)
})
input.onGesture(Gesture.ThreeG, function () {
    if (start) {
        if (liftoff == false) {
            liftoff = true
            starttime = input.runningTime()
            basic.showArrow(ArrowNames.North)
        }
    }
})
let starttime = 0
let endtime = 0
let start = false
let freefall = false
let liftoff = false
liftoff = false
freefall = false
start = false
basic.showIcon(IconNames.No)
