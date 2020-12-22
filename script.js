/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
setInterval(() => {
    const timer = new Date();
    let mins = timer.getMinutes();

    let minutesLeft = mins % 15;

    if (minutesLeft == 0) {
        // console.log('Hiiii');
        var audio = new Audio('https://cdn.glitch.com/3f341d4f-9097-4a04-84df-c420f0b63127%2Fwatersound.mp3?v=1604661569707');

        audio.play();
    } else {
        minutesLeft = 15 - minutesLeft;
    }

    document.querySelector('#time').textContent = `${minutesLeft} minutes left`;
}, 60000)