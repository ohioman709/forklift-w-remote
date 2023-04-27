radio.onReceivedNumber(function (receivedNumber) {
    Action = receivedNumber
})
function Forward () {
    wuKong.setAllMotor(100, 100)
}
function ForkUp () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 60)
}
function ForkDown () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 6)
}
function Backward () {
    wuKong.setAllMotor(-100, -100)
}
let Action = 0
joystickbit.initJoystickBit()
radio.setGroup(25)
basic.showIcon(IconNames.Sword)
basic.forever(function () {
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        radio.sendNumber(6)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        radio.sendNumber(7)
    } else {
    	
    }
})
basic.forever(function () {
    if (Action == 6) {
        ForkUp()
    }
})
basic.forever(function () {
    if (Action == 7) {
        ForkDown()
    }
})
