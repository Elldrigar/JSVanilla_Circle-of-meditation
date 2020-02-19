const container = document.getElementById('container');
const text = document.querySelector('.text');

const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
    text.innerText = 'Wdech !';

    setTimeout(() => {
        text.innerText = 'Trzymaj !';

        setTimeout(() => {
            text.innerText = 'Wypuść !';
        }, holdTime);
    }, breathTime);
}

setInterval(breathAnimation, totalTime);