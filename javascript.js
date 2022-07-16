// ---PART.1---　card 52枚分の "div" を作る----------------------
// class属性の付与、id属性を連番で付与する

for (let i = 0; i < 52; i++) {
    const newDivs = document.createElement("div");
    newDivs.setAttribute("class", "cards");
    newDivs.setAttribute("id", "card" + (i + 1));
    newDivs.textContent = "数字" + (i + 1);
    document.querySelector("#cards").append(newDivs);
}


// ---PART.0---グローバルスコープの定数・配列・関数置き場-------------

// card 52枚 が入る<div>52個の配列風を作る
const arrayCards = document.querySelectorAll(".cards");


// 判定用の配列『arrayJudgment』を作る。  
const arrayJudgment = new Array(52).fill(0);
// const arrayJudgment = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


// 勝敗を決める配列を作る
const ArrayBlueWin = [];
const ArrayRedWin = [];



// ---PART.2---　card を配る　----------------------------------

// ---PART.2.1　　　まず１～５２の数字が１つずつ入った配列を作る。
// 手作り編
// const arrayCardsShuffle = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52];

// .fill()と.map()を使う編
const arrayCardsShuffle00 = new Array(52).fill(0);
// arrayCardsShuffle00 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const arrayCardsShuffle = arrayCardsShuffle00.map(function (value, index) {
    return value = index + 1;
});
// console.log(arrayCardsShuffle);
// arrayCardsShuffle = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52];


// ---PART.2.2　　　arrayCardsShuffle配列からランダムに数字を取り出し、
// ---PART.2.3　　　（1から13の数字）×４組に変換して、５２個の<div>に入れる。
cardsShuffle();
function cardsShuffle() {
    let count = 0
    for (let i = 0; i < 52; i = i + 1) {
        const min = 0;
        const max = 51 - count;
        const a = Math.floor(Math.random() * (max + 1 - min)) + min;
        const item = arrayCardsShuffle.splice(a, 1);
        // console.log("arrayCardsShuffleの抜き出す位置は" + a);
        // console.log("arrayCardsShuffleから抜き出した値は" + item);
        // console.log("arrayCardsShuffle配列の残りは" + arrayCardsShuffle);
        // console.log("arrayCardsShuffle配列の残りの数は" + arrayCardsShuffle.length);

        const cardNum = (item % 13 + 1);
        arrayCards[i].textContent = cardNum;
        count = count + 1;
        // console.log("countは" + count);
    }
}


// ---PART.3---カウントダウン関係----------------------------------
// 5秒後に数字を見えなくする（5秒間 数字の配置を覚える）

window.onload = function () {

    // カウントダウン開始　　　PART.3-1へ
    countDown();
    // カウントダウン終了後、１文字だけ変えて元に戻す
    countDownAfter();

    // カウントダウン終了後、数字を見えなくする
    const blackOut = function load() {
        for (let i = 0; i < 52; i = i + 1) {
            arrayCards[i].classList.add("blackOut");
        }
    }
    setTimeout(blackOut, 5000);

    // 先手（青側）からゲームスタート　Part4-1へ
    setTimeout(flipCardBlue, 5000)
}


// Part3-1　　カウントダウン開始　　["5", "4", "3", "2", "1", "s t a r t !"]
function countDown() {
    console.log("countDown1 が始まりました")
    countDown1(["5", "4", "3", "2", "1", "s t a r t !"], "#top")
}

// Part3-1-1 countDown1()関数
function countDown1(countDownSentence, area) {
    for (let i = 0; i < 6; i++) {

        const m = i % 6;
        const r = i % 2;
        const s = i % 3;

        setTimeout(function () {
            // const array = ["5", "4", "3", "2", "1", "start!"];
            const array = countDownSentence;
            document.querySelector(area).textContent = array[m];

            const arrayFontColor = ["lightskyblue", "deepskyblue"];
            const arrayBackColor = ["deepskyblue", "lightskyblue"];
            const arrayTextAlign = ["left", "right", "center"];

            document.querySelector(area).style.color = arrayFontColor[r];
            document.querySelector(area).style.backgroundColor = arrayBackColor[r];
            document.querySelector(area).style.fontSize = "110px";
            document.querySelector(area).style.lineHeight = "1.0";
            document.querySelector(area).style.textAlign = arrayTextAlign[s];

        }, (i * 1000))
    }
}


// Part3-2 countDownAfter()；　　　カウントダウン終了後、１文字だけ変えて元に戻す
function countDownAfter() {
    setTimeout(function () {
        document.querySelector("#top").textContent = "";
        document.querySelector("#top").style.color = "";
        document.querySelector("#top").style.backgroundColor = "";
        document.querySelector("#top").style.fontSize = "";
        document.querySelector("#top").style.lineHeight = "3.5";
        document.querySelector("#top").style.textAlign = "";

        document.querySelector("#top").textContent = "真剣　粋　惹苦　＆　HTML　CSS　JAVASCRIPT";
    }, 7000)
}


// ---PART.4---　card をめくる-----------------------------------------
//    Part4-1-1：青側がめくる

function flipCardBlue() {

    console.log("青側のはじまりの[判定用配列]は " + arrayJudgment);
    let count = 0;

    for (let i = 0; i < 52; i = i + 1) {

        arrayCards[i].addEventListener('click', function () {
            if (count === 0) {

                // arrayCards[i].classList.remove("blackOut");

                flipFirstCard(i, "blueOut", "removeClass", "青側");
                // 青地に黒色文字にする
                // [判定用配列]arrayJudgment に青側1枚目の数字を入れる

                count = count + 1
                console.log("クリックの回数　" + count)

            } else if (count === 1) {
                // } else {
                // arrayCards[i].classList.remove("blackOut");                    

                const jadg = flipSecondCard(i, "blueOut", "removeClass", "青側");
                // 青地に黒色文字にする
                // 1枚目と2枚目が同じ数字か判定する。『jadg』に ture　か　false　が返ってくる

                count = count + 1
                console.log("クリックの回数　" + count)


                // 『jadg』が　false　のときと『jadg』が　ture　のときの分岐へ
                if (!jadg) {

                    flipFalse(i, "blackOut", "blueOut", "青側");
                    // 青側の1枚目の配列の[index]を探す);
                    // 1秒後にカードの数字を見えなくする// class="blackOut"を付与　class="blueOut"を削除
                    // [判定用配列]を初期の状態（すべて０）に戻す（同じ数字が2ペアあるから。）

                    // cheatIn　後手（赤側）が勝てるように
                    setTimeout(cheatIn, 3000);
                    // cheatIn


                    // 赤側へ
                    console.log("不正解 赤側へ");
                    flipCardRed();

                } else if (jadg) {
                    // } else {                    

                    flipTure(i, " addClass", "removeClass", "青側");
                    // 青側の1枚目の配列の[index]を探す);
                    // 正解のカードは1枚目と2枚目ともクリックできなくする
                    // CSSに『body .noClick { pointer-events: none; }』を記載しておく 
                    // html側に　style.pointerEvents = "none";  も付与する     
                    // [判定用配列]を初期の状態（すべて０）に戻す


                    // ---Part4-4：　勝敗を判定する処理
                    // 青側に1点入れる                    
                    // 勝敗を決める配列ArrayBlueWin[];に1点入れる
                    ArrayBlueWin.push(1);
                    console.log("青側の点数" + ArrayBlueWin);
                    if (5 === ArrayBlueWin.length + ArrayRedWin.length) {
                        // if (26 === ArrayBlueWin.length + ArrayRedWin.length) {
                        win();
                    }

                    // 再度青側へ
                    console.log("正解 青側の繰り返し");
                    flipCardBlue();
                }
            }
        })
    }
}


//    Part4-1-2：赤側がめくる
function flipCardRed() {

    console.log("赤側のはじまりの[判定用配列]は " + arrayJudgment);
    let count = 0;

    for (let i = 0; i < 52; i = i + 1) {
        arrayCards[i].addEventListener('click', function () {
            if (count === 0) {
                flipFirstCard(i, "redOut", "removeClass", "赤側");
                count = count + 1
                console.log("クリックの回数　" + count)

            } else if (count === 1) {
                const jadg = flipSecondCard(i, "redOut", "removeClass", "赤側");

                count = count + 1
                console.log("クリックの回数　" + count)

                if (!jadg) {
                    flipFalse(i, "blackOut", "redOut", "赤側");

                    // cheatOut    cheatIn()関数　終了
                    cheatOut();
                    // cheatOut

                    // 青側へ
                    console.log("不正解 青側へ");
                    flipCardBlue();

                } else if (jadg) {
                    // } else {

                    flipTure(i, " addClass", "removeClass", "赤側");

                    ArrayRedWin.push(1);
                    console.log("赤側の点数" + ArrayRedWin);

                    if (5 === ArrayBlueWin.length + ArrayRedWin.length) {
                        win();
                    }
                    // 再度赤側へ
                    console.log("正解 赤側の繰り返し");
                    flipCardRed();
                }
            }
        })
    }
}



// ---Part4-2：　１枚目めくったときの処理
function flipFirstCard(index, addClass, removeClass, team) {
    // 青地or赤地に黒色文字にする
    arrayCards[index].classList.add(addClass);

    const a = arrayCards[index].innerText;
    console.log(team + "の1枚目の[配列index]は " + index);
    console.log(team + "の1枚目の数字は " + a);
    arrayJudgment[index] = a;
    console.log(team + "の1枚目の[判定用配列]は " + arrayJudgment);

}

// ---Part4-3：　２枚目めくったときの処理
function flipSecondCard(index, addClass, removeClass, team) {

    arrayCards[index].classList.add(addClass);

    const b = arrayCards[index].innerText;

    // ここから 2枚目 が 1枚目 と同じか違うか判定する
    // 同じなら　『jadg 』はture　違うなら　『jadg 』はfalse
    const jadg = arrayJudgment.includes(b);
    console.log(team + "の1枚目と2枚目の[判定]は　" + jadg)

    return jadg;
}



// ---Part4-3-1：　２枚目が外れたときの処理
function flipFalse(index, addClass, removeClass, team) {
    // 1枚目の配列の[index]を探す);
    const AA = arrayJudgment.findIndex(function (element) {
        return element > 0;
    });


    // ↓なくて可　コンソールでの確認用    
    console.log(team + "の不正解の1枚目の[配列index]は " + AA);

    const b = arrayCards[index].innerText;
    arrayJudgment[index] = b;
    console.log(team + "の不正解の2枚目の[配列index]は " + index);
    console.log(team + "の2枚目の数字は " + b);
    console.log(team + "の2枚目の[判定用配列]は " + arrayJudgment);
    // ↑なくて可　コンソールでの確認用


    // 1秒後にカードを見えなくする
    setTimeout(function () {
        arrayCards[AA].classList.remove(removeClass); // 1枚目
        arrayCards[index].classList.remove(removeClass);  // 2枚目

        arrayCards[AA].classList.add(addClass); // 1枚目
        arrayCards[index].classList.add(addClass);  // 2枚目
    }, 1000);

    console.log(team + "の不正解の1枚目の" + arrayCards[AA].innerText + "を 元に戻しました");
    console.log(team + "の不正解の2枚目の" + arrayCards[index].innerText + "を 元に戻しました");

    // [判定用配列]を初期の状態（すべて０）に戻す（同じ数字が2ペアあるから。）
    // arrayJudgment[AA] = 0;
    // arrayJudgment[i] = 0;
    arrayJudgment.fill(0);
    // console.log("判定用配列は初期化されました"+arrayJudgment);
}

// ---Part4-3-2：　２枚目が当たったときの処理
function flipTure(index, addClass, removeClass, team) {

    // 1枚目の配列の[index]を探す);
    const AA = arrayJudgment.findIndex(function (element) {
        return element > 0;
    });


    // ↓なくても可　コンソールでの確認用    
    console.log(team + "の正解の1枚目の[配列index]は " + AA);
    console.log(team + "の正解の2枚目の[配列index]は " + index);

    const b = arrayCards[index].innerText;
    arrayJudgment[index] = b;
    console.log(team + "の2枚目の数字は " + b);
    console.log(team + "の2枚目の[判定用配列]は " + arrayJudgment);
    // ↑なくても可　コンソールでの確認用


    // 正解のカードは1枚目と2枚目ともクリックできなくする
    // CSSに　　　『body .noClick { pointer-events: none; }』を記載しておく
    // style.pointerEvents = "none";  も付与する                     
    arrayCards[AA].classList.add("noClick"); // 1枚目
    arrayCards[index].classList.add("noClick");  // 2枚目

    arrayCards[AA].style.pointerEvents = "none"; // 1枚目
    arrayCards[index].style.pointerEvents = "none";  // 2枚目

    console.log(arrayCards[AA].textContent + "はクリックできなくなりました");
    console.log(arrayCards[index].textContent + "はクリックできなくなりました");


    // [判定用配列]を初期の状態（すべて０）に戻す
    arrayJudgment.fill(0);
    // console.log("判定用配列は初期化されました"+arrayJudgment);
}


// ---Part5　　　---------------勝敗後の演出-----------------
const win = function () {
    if (ArrayBlueWin.length > ArrayRedWin.length) {
        console.log("あなたの勝ち");
        youWin();

    } else if (ArrayBlueWin.length < ArrayRedWin.length) {
        console.log("あなたの負け");
        // youLose(["あ", "あ", "な", "な", "た", "た", "の", "の", "負", "負", "け", "け"], "#board");
        youLose(["", "あ", "", "な", "", "た", "", "の", "", "負", "", "け"], "#board");
        // youLose(["ず", "ず",, "る", "る",, "い", "い"], "#board");
        // youLose(["ず", "ず", "る", "る", "勝", "勝", "ち", "ち", "で", "で", "す", "す"], "#board");



    } else if (ArrayBlueWin.length === ArrayRedWin.length) {
        console.log("引き分け");
        Draw();
    }
}

// ---Part5-1　　　"あなたの勝ち"演出
function youWin() {
    document.querySelector("#top").textContent = "あなたの勝ち";
    document.querySelector("#top").style.color = "black";
    document.querySelector("#top").style.fontSize = "24px";
}

// ---Part5-2　　　"あなたの負け"演出
function youLose(Sentence, area) {
    document.querySelector("#top").textContent = "あなたの負け";
    document.querySelector("#top").style.color = "black";
    document.querySelector("#top").style.backgroundColor = "";

    setTimeout(function () {
        document.querySelector("#top").style.fontSize = "187.75%";
        document.querySelector("#top").textContent = "真剣　粋　惹苦　＆　HTML　CSS　JAVASCRIPT";

    }, 1500)


    // ↓これは別の演出時に使う
    setTimeout(function () {
        for (let i = 0; i < 52; i++) {
            // arrayCards[i].classList.remove("blackOut");    
            arrayCards[i].classList.remove("blueOut");
            arrayCards[i].classList.remove("redOut");

            arrayCards[i].style.pointerEvents = "none";
            // arrayCards[i].style.backgroundColor = "";
        }
    }, 10000)
    // ↑これは別の演出時に使う


    // 文字の飛び出し具合の調整
    document.querySelector(area).style.lineHeight = "0.4";

    let count = 0;

    for (let i = 0; i < 116; i++) {
        const m = count % 18;

        setTimeout(function () {
            const array = Sentence;
            // const array = ["あ", "あ", "な", "な", "た", "た", "の", "の", "負", "負", "け", "け"];

            document.querySelector(area).textContent = array[m];

            document.querySelector(area).style.backgroundColor = "deepskyblue";
            document.querySelector(area).style.color = "lightskyblue";
            document.querySelector(area).style.textAlign = "center";
            // document.querySelector(area).style.fontWeight = "bolder";

            document.querySelector(area).style.fontSize = ((i * i) / 2) + "%";
        }, (2500 + (i * 170)))

        count = count + 1;
    }
}

// ---Part5-3　　　"引き分け"演出
function Draw() {
    document.querySelector("#top").textContent = "引き分け";
    document.querySelector("#top").style.color = "black";
    document.querySelector("#top").style.fontSize = "24px";
}



// ------おまけ------
// 後手（赤側）が有利になるように　　　// cheatIn()関数；  
const cheatIn = function () {
    for (let i = 0; i < 52; i = i + 1) {
        arrayCards[i].classList.add("cheat");
    }
}

const cheatOut = function () {
    for (let i = 0; i < 52; i = i + 1) {
        arrayCards[i].classList.remove("cheat");
    }
}


