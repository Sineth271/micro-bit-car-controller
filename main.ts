radio.setGroup(120)
basic.forever(function () {
    if (BitPlayer.KeyPressed(BitPlayerKey.key_A)) {
        radio.sendNumber(1)
    } else if (BitPlayer.KeyPressed(BitPlayerKey.key_R)) {
        radio.sendNumber(2)
    } else if (BitPlayer.KeyPressed(BitPlayerKey.key_L)) {
        radio.sendNumber(3)
    } else if (BitPlayer.KeyPressed(BitPlayerKey.key_D)) {
        radio.sendNumber(4)
    } else if (BitPlayer.KeyPressed(BitPlayerKey.key_B)) {
        radio.sendNumber(5)
    } else if (BitPlayer.KeyPressed(BitPlayerKey.key_C)) {
        radio.sendNumber(6)
    } else {
        radio.sendNumber(0)
    }
})
