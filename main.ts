input.onButtonPressed(Button.A, function () {
    radio.sendString("pozik")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("biotza ")
})
radio.onReceivedString(function (receivedString) {
    if ("pozik" == receivedString) {
        basic.showString("A")
    }
    if ("triste " == receivedString) {
        basic.showString("B")
    }
    if ("biotza " == receivedString) {
        basic.showString("A+B")
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("triste ")
})
radio.setGroup(10)
