
// 変数宣言
var startBtn = document.getElementById('startA');
var isStart = false;
var roulette = document.getElementById('rouletteA');
var result = '';
var intervalID = -1;
var username = [];

// 行きたい場所を配列にぶち込む
usernameA = ["じゃがいもさん 【@potatotippusu】",
    "😊 【@vNZrS6uc0h0U5ju】",
    "コグマ♂さん 【@ycor3XaS2USqqpM】",
    "だいふくさん 【@p0e6MFlFtN4ziMo】",
    "junshinさん 【youtube】"
    ];

// スタートボタンを押したときの処理
function clickedStartA() {
    'use strict';
    isStart = true;
    startBtn.disabled = true;
    intervalID = setInterval(function() {
        if(isStart === true) {
            result = usernameA[Math.floor( Math.random() * usernameA.length )];
            roulette.className = 'name roulette';
            document.getElementById("winA").innerHTML = result;
        }
    }, 10);
}

// ストップボタンを押した時の処理
function clickedStopA() {
    'use strict';
    clearTimeout(intervalID);
    startBtn.disabled = "";
    isStart = false;
    if(result === '') {
        alert("スタートボタンを押してからストップボタンを押してね！");
    } else {
// 結果を画面に表示
    roulette.className = 'name roulette';
    document.getElementById("winA").innerHTML = result;
    }
}

// Bセット
var startBtn = document.getElementById('startB');
var roulette = document.getElementById('rouletteB');

usernameB = ["てんちょさん 【@DUiaKiond3eAHJm】",
    "やぎさん 【@yagi_yochan】",
    "まささん 【@masagoma55】",
    "まいさん 【@happinesS__1022 】",
    "こたさん 【@3fZfVxNUbKiYrn8】"];

function clickedStartB() {
    'use strict';
    isStart = true;
    startBtn.disabled = true;
    intervalID = setInterval(function() {
        if(isStart === true) {
            result = usernameB[Math.floor( Math.random() * usernameB.length )];
            roulette.className = 'name roulette';
            document.getElementById("winB").innerHTML = result;
        }
    }, 10);
}

function clickedStopB() {
    'use strict';
    clearTimeout(intervalID);
    startBtn.disabled = "";
    isStart = false;
    if(result === '') {
        alert("スタートボタンを押してからストップボタンを押してね！");
    } else {
        
    roulette.className = 'name roulette';
    document.getElementById("winB").innerHTML = result;
    }
}
// Cセット
var startBtn = document.getElementById('startC');
var roulette = document.getElementById('rouletteC');

usernameC = ["れんさん 【@curegedaisuki】",
    "yskさん【@yskusk】"];

function clickedStartC() {
    'use strict';
    isStart = true;
    startBtn.disabled = true;
    intervalID = setInterval(function() {
        if(isStart === true) {
            result = usernameC[Math.floor( Math.random() * usernameC.length )];
            roulette.className = 'name roulette';
            document.getElementById("winC").innerHTML = result;
        }
    }, 10);
}

function clickedStopC() {
    'use strict';
    clearTimeout(intervalID);
    startBtn.disabled = "";
    isStart = false;
    if(result === '') {
        alert("スタートボタンを押してからストップボタンを押してね！");
    } else {

    roulette.className = 'name roulette';
    document.getElementById("winC").innerHTML = result;
    }
}

