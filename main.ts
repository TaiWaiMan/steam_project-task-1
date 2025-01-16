radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        255,
        SuperBit.enMotors.M2,
        255
        )
    } else if (receivedNumber == 2) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -255,
        SuperBit.enMotors.M2,
        -255
        )
    } else if (receivedNumber == 3) {
        rotate += 10
        SuperBit.Servo(SuperBit.enServo.S1, rotate)
    } else if (receivedNumber == 4) {
        rotate += 10
        SuperBit.Servo(SuperBit.enServo.S1, rotate)
    } else if (receivedNumber == 0) {
        SuperBit.MotorStopAll()
        SuperBit.Servo(SuperBit.enServo.S1, 0)
    }
})
let rotate = 0
radio.setGroup(50)
rotate = 0
SuperBit.MotorRunDual(
SuperBit.enMotors.M1,
0,
SuperBit.enMotors.M1,
0
)
SuperBit.Servo(SuperBit.enServo.S1, 0)
for (let index = 0; index < 10; index++) {
    SuperBit.Music(SuperBit.enMusic.entertainer)
}
