function timer(id, deadline) {
    // timer

    // const deadline = '2022-09-30 00:00';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            // можно просто new Date, вместо Date.parse(new Date())
            days = Math.floor((t / (1000 * 60 * 60 * 24))),
            hours = Math.floor(((t / (1000 * 60 * 60)) % 24)), //-2
            minutes = Math.floor((t / (1000 * 60)) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {

        if (num >= 0 && num < 10) {
            return (`0${num}`);
        } else {
            return num;
        }

    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();
        // что бы пропали значения таймера с HTML

        function updateClock() {

            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            function timeOut(timeValue, timeElement) {
                if (timeValue <= 0) {
                    timeElement.innerHTML = '00';
                }

            }
            timeOut(getZero(t.days), days);
            timeOut(getZero(t.hours), hours);
            timeOut(getZero(t.minutes), minutes);
            timeOut(getZero(t.seconds), seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                // days.innerHTML = 0;
                // hours.innerHTML = 0;
                // minutes.innerHTML = 0;
                // seconds.innerHTML = 0;
            }
        }

    }

    setClock(id, deadline);

}

export default timer;