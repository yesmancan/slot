'use strict';

let slotarmbox = document.getElementsByTagName('slotarmbox')[0];
let slotarm = document.getElementsByTagName('slotarm')[0];
let slotarmball = document.getElementsByTagName('slotarmball')[0];

let box0 = document.querySelector('slotbox > box:nth-child(1) > elem');
let box1 = document.querySelector('slotbox > box:nth-child(2) > elem');
let box2 = document.querySelector('slotbox > box:nth-child(3) > elem');
let stop = document.querySelector('rect0 > stop');
let completed = 0;
let counter = Number(-210);
let StartA, StartB, StartC;
let UserCoin = 10;
let items = [{
        'id': 0,
        'name': 'banans',
        'height': 62
    },
    {
        'id': 1,
        'name': 'bar',
        'height': 1155
    },
    {
        'id': 2,
        'height': 1000,
        'name': 'cherry'
    },
    {
        'id': 3,
        'name': 'grapes',
        'height': 885
    },
    {
        'id': 4,
        'name': 'lemon',
        'height': 750
    },
    {
        'id': 5,
        'name': 'orange',
        'height': 605
    },
    {
        'id': 6,
        'name': 'seven',
        'height': 480
    },
    {
        'id': 7,
        'name': 'watermelon',
        'height': 330
    },
    {
        'id': 8,
        'name': 'win',
        'height': 200
    }
];

let SlotRun = () => {
    UserCoin--;
    let timea = Math.floor(Math.random() * 1200);
    StartA = setInterval(() => {
        timea += 200;
        box0.style = 'background-position-y: ' + timea + 'px';
    }, 100);
    let timeb = Math.floor(Math.random() * 1200);
    StartB = setInterval(() => {
        timeb += 200;
        box1.style = 'background-position-y: ' + timeb + 'px';
    }, 100);
    let timec = Math.floor(Math.random() * 1200);
    StartC = setInterval(() => {
        timec += 200;
        box2.style = 'background-position-y: ' + timec + 'px';
    }, 100);
    document.querySelectorAll('slotarmcont > slotarm')[0].style = 'bottom: -145px;';
    document.querySelectorAll('slotarmcont > slotarmball')[0].style = 'top: 570px;';

    setTimeout(() => {
        document.querySelectorAll('slotarmcont > slotarm')[0].style = 'bottom: 135px;';
        document.querySelectorAll('slotarmcont > slotarmball')[0].style = 'top: 32px;';
    }, 500);

    stop.style = 'visibility: visible;'
    stop.addEventListener('click', SlotStop);

    slotarmbox.removeEventListener('click', SlotRun);
    slotarm.removeEventListener('click', SlotRun);
    slotarmball.removeEventListener('click', SlotRun);
};

let SlotStop = () => {
    clearInterval(StartA);
    clearInterval(StartB);
    clearInterval(StartC);

    let rand0 = getRandom(9);
    let rand1 = getRandom(9);
    let rand2 = getRandom(9);

    box0.style = 'background-position-y: ' + items[rand0].height + 'px';
    box1.style = 'background-position-y: ' + items[rand1].height + 'px';
    box2.style = 'background-position-y: ' + items[rand2].height + 'px';

    stop.addEventListener('click', SlotStop);
    stop.style = 'visibility: hidden;'

    if (rand0 === rand1 === rand2) {
        alert('ez win')
        UserCoin += 10;
    }
    console.log(UserCoin);
    slotarmbox.addEventListener('click', SlotRun);
    slotarm.addEventListener('click', SlotRun);
    slotarmball.addEventListener('click', SlotRun);
};
let getRandom = (val) => {
    return Math.floor(Math.random() * val);
};
(() => {
    slotarmbox.addEventListener('click', SlotRun);
    slotarm.addEventListener('click', SlotRun);
    slotarmball.addEventListener('click', SlotRun);
})();