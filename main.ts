radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.analogWritePin(AnalogPin.P12, 400)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.analogWritePin(AnalogPin.P15, 320)
    } else if (receivedNumber == 2) {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P12, 600)
        pins.digitalWritePin(DigitalPin.P16, 1)
        pins.analogWritePin(AnalogPin.P15, 200)
    } else if (receivedNumber == 0) {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.analogWritePin(AnalogPin.P15, 0)
    } else if (receivedNumber == 3) {
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.analogWritePin(AnalogPin.P12, 200)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.analogWritePin(AnalogPin.P15, 400)
    } else if (receivedNumber == 4) {
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.analogWritePin(AnalogPin.P12, 400)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.analogWritePin(AnalogPin.P15, 200)
    } else {
    	
    }
})
radio.setGroup(19)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
