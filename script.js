
// 変数宣言
var startBtn = document.getElementById('startA');
var isStart = false;
var roulette = document.getElementById('rouletteA');
var result = '';
var intervalID = -1;
var username = [];

// 行きたい場所を配列にぶち込む
usernameA = ["Aさん","Bさん","cさん","dさん","Eさん","Fさん","Gさん","Hさん","Iさん","Jさん","Kさん","Lさん","Mさん","Nさん"];

// スタートボタンを押したときの処理
function clickedStartA() {
    'use strict';
    isStart = true;
    startBtn.disabled = true;
    intervalID = setInterval(function() {
        if(isStart === true) {
            result = usernameA[Math.floor( Math.random() * usernameA.length )];
            roulette.className = 'name';
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
    roulette.className = 'name';
    document.getElementById("winA").innerHTML = result;
    }
}

// Bセット
var startBtn = document.getElementById('startB');
var roulette = document.getElementById('rouletteB');

usernameB = ["A男","B男","c男","d男","E男","F男","G男","H男","I男","J男","K男","L男","M男","N男"];

function clickedStartB() {
    'use strict';
    isStart = true;
    startBtn.disabled = true;
    intervalID = setInterval(function() {
        if(isStart === true) {
            result = usernameB[Math.floor( Math.random() * usernameB.length )];
            roulette.className = 'name';
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
        
    roulette.className = 'name';
    document.getElementById("winB").innerHTML = result;
    }
}
// Cセット
var startBtn = document.getElementById('startC');
var roulette = document.getElementById('rouletteC');

usernameC = ["A子","B子","c子","d子","E子","F子","G子","H子","I子","J子","K子","L子","M子","N子"];

function clickedStartC() {
    'use strict';
    isStart = true;
    startBtn.disabled = true;
    intervalID = setInterval(function() {
        if(isStart === true) {
            result = usernameC[Math.floor( Math.random() * usernameC.length )];
            roulette.className = 'name';
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

    roulette.className = 'name';
    document.getElementById("winC").innerHTML = result;
    }
}

