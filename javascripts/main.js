$(function() {

    var clock = $('.clock').FlipClock({

    });

    clock.setCountdown(true);
    clock.setTime(3600);
    clock.start();

});