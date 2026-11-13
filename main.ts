let sysMode = 0
let start_time = 0
input.onGesture(Gesture.ScreenUp, function () {
    sysMode = 0
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    sysMode = 1
    basic.showLeds(`
        . . . . .
        # # . . .
        . . # . .
        . . . # #
        . . . . .
        `)
    main_top(3)
})
input.onButtonPressed(Button.A, function () {
    main_top(0)
})
input.onGesture(Gesture.TiltLeft, function () {
    sysMode = 2
    basic.showLeds(`
        . . . . .
        . . . # #
        . . # . .
        # # . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    main_top(2)
})
input.onButtonPressed(Button.B, function () {
    main_top(1)
})
function timer_start () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    start_time = input.runningTime()
    while (10000 >= input.runningTime() - start_time) {
        if (input.runningTime() / 1000 % 1 > 0.5) {
            led.plot(2, 2)
        } else {
            led.unplot(2, 2)
        }
    }
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . # . . .
        . # . . .
        `)
}
function main_top (Type: number) {
    if (sysMode == 0) {
        if (Type == 0) {
            timer_start()
        } else if (Type == 1) {
        	
        } else {
        	
        }
    } else if (sysMode == 1) {
        basic.showString("" + input.temperature() + "c`")
    } else if (sysMode == 2) {
        if (Type == 0) {
        	
        } else if (Type == 1) {
        	
        } else {
        	
        }
    } else {
    	
    }
}
