input.onButtonPressed(Button.A, function () {
    número_introducido += 10
})
input.onGesture(Gesture.Shake, function () {
    número_introducido = 0
})
input.onButtonPressed(Button.B, function () {
    número_introducido += 1
})
let número_introducido = 0
número_introducido = 0
basic.showString("" + (número_introducido))
basic.forever(function () {
    basic.showString("" + (número_introducido))
})
