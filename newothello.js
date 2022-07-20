// ---STEP.0  マス（square） 100個分の "div" を作る----------------------
//    class="square"属性を付与、id属性を連番で付与する

for (let i = 0; i < 100; i++) {
    const newDivs = document.createElement("div");

    newDivs.classList.add("square");
    newDivs.setAttribute("id", "squares" + (i));
    newDivs.textContent = "●";

    document.querySelector("#board").append(newDivs);
}


// ---STEP.1  グローバルスコープの定数・配列・関数置き場-------------

// ---STEP.1.1 part1  マス<div class="square">が 100個 入ったブラウザ表示用『arraySquare』配列風を作る（１次元配列） 
// const arraySquare = document.querySelectorAll(".square");

// ---STEP.1.1 part2  100個(10×10)が入った ２次元配列 に挑戦する 
// const arraySquare = document.querySelectorAll(".square");
// const arraySquare2D = [];

// for (let i = 0; i < 10; i++) {
//     const arraySquare1D = [];
//     for (let k = 0; k < 10; k++) {
//         arraySquare1D.push(arraySquare[(10 * i) + k]);
//     }
//     arraySquare2D.push(arraySquare1D);
// }

// ---STEP.1.1 part3  100個(10×10)が入った ２次元配列 に挑戦する 
// 配列風な『likeArraySquare』を Array.from( ) メソッドで配列『realArraySquare』にする。
const likeArraySquare = document.querySelectorAll(".square");
const realArraySquare = Array.from(likeArraySquare);

console.log(Array.isArray(likeArraySquare)); // false
console.log(Array.isArray(realArraySquare)); // true
// console.log("配列風の" + likeArraySquare);
// console.log("from配列の" + realArraySquare);


const arraySquare2D = [];
for (let i = 0; i < 10; i++) {
    arraySquare2D[i] = realArraySquare.slice(i * 10, (i + 1) * 10);
}
// console.log("arraySquare2Dの.log" + arraySquare2D);
// console.table("arraySquare2Dの.table" + arraySquare2D);


// ---STEP.1.2 part1  記録用の配列『arrayRecord』を作る。要素数は100個。（１次元配列）  
// const arrayRecord = new Array(100).fill(0);
// const arrayRecord = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

// ---STEP.1.2 part2  記録用の配列『arrayRecord』を作る。2次元配列で作る
const arrayRecord = new Array(100).fill(0);
const arrayRecord2D = [];
for (let i = 0; i < 10; i++) {
    arrayRecord2D[i] = arrayRecord.slice(i * 10, (i + 1) * 10);
}


// ---STEP.2  番兵さん を作る---------
//    arraySquare配列から番兵さん用に、盤面の外周の<div>を選り出し、arrayOuter配列 を作る。
//    ゲーム終了時の演出も考え、要素の並び順をすこし弄る（時計回りになるように）。
//    class="outer" を付与する。。

// ---STEP.2.1 part1  番兵さん。手打ち感満載（１次元配列）
// const arrayOuterIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 19, 29, 39, 49, 59, 69, 79, 89, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 80, 70, 60, 50, 40, 30, 20, 10]
// function arrayouter() {
// }

// ---STEP.2.1 part-2  番兵さん。少し手打ち感を減らす（でも１次元配列）
// // function outer() {
// //     const arrayOuter = [];
// //     for (let i = 0; i < 9; i++) {
// //         arrayOuter[0 + i] = arraySquare[0 + (1 * i)];
// //         arrayOuter[9 + i] = arraySquare[9 + (10 * i)];
// //         arrayOuter[18 + i] = arraySquare[99 - (1 * i)];
// //         arrayOuter[27 + i] = arraySquare[90 - (10 * i)];
// //     }
// // }

// ---STEP.2.1 part3  番兵さん。2次元配列に挑戦する
const arrayOuterTop = [];// 上辺
const arrayOuterRight = [];//右辺
const arrayOuterBottom = [];//下辺
const arrayOuterLeft = [];//左辺
const arrayOuter2D = [];//周辺

outerSide();
function outerSide() {
    for (let i = 0; i < 9; i++) {
        arrayOuterTop.push(arraySquare2D[0][(1 * i)]);
        arrayOuterRight.push(arraySquare2D[1 * i][9]);
        arrayOuterBottom.push(arraySquare2D[9][9 - (1 * i)]);
        arrayOuterLeft.push(arraySquare2D[9 - (1 * i)][0]);
    }
    arrayOuter2D.push(arrayOuterTop);
    arrayOuter2D.push(arrayOuterRight);
    arrayOuter2D.push(arrayOuterBottom);
    arrayOuter2D.push(arrayOuterLeft);

    outer();
}

// ---STEP.2.2  番兵さんにclass="outer" 属性を付与する。。
outer();
function outer() {
    for (let i = 0; i < 4; i++) {
        for (let k = 0; k < 9; k++) {
            arrayOuter2D[i][k].classList.add("outer");
            arrayOuter2D[i][k].textContent = "☆";
        }
    }
}

// console.table(arrayOuter2D);


// ---STEP.3 part1  盤面さん を作る---------
//    arraySquare配列から番兵さんを除いた『(".square:not(.outer)")』、
//    ６４（8×8）個のマスでarrayInner配列を作る。// class="inner" を付与する。

// const arrayInner = document.querySelectorAll(".square:not(.outer)");
// for (let i = 0; i < (arrayInner.length); i++) {
//     arrayInner[i].classList.add("inner");
// }


// ---STEP.4  記録用の配列『arrayRecord』にゲーム開始時のスコア（配置）を入力する-------------
//    真ん中に黒と白を置く。スコアは、黒は"b"、白は"w"、空白は"0" とする

arrayRecord2D[4][4] = "w";
arrayRecord2D[4][5] = "b";
arrayRecord2D[5][4] = "b";
arrayRecord2D[5][5] = "w";


// ---STEP.5  全てのはじまり

window.onload = function () {

    drawing();    // SREP.6
    ableCheck("b", "w"); // SREP.7-2   先手の黒石が置ける場所を探す
    putStone();       // SREP.8

}


// ---STEP.6---記録用の配列『arrayRecord』のスコアに合わせてブラウザ上の盤面を表示する----------

function drawing() {
    for (let i = 0; i < 10; i++) {
        for (let k = 0; k < 10; k++) {
            arraySquare2D[i][k].classList.remove("able");
            arraySquare2D[i][k].classList.remove("black");
            arraySquare2D[i][k].classList.remove("white");


            if (arrayRecord2D[i][k] == "b") {
                arraySquare2D[i][k].classList.add("black");
            } else if (arrayRecord2D[i][k] == "w") {
                arraySquare2D[i][k].classList.add("white");
            } else if (arrayRecord2D[i][k] == 0) {
            } else {
            }
        }
    }
}


// ---STEP.7---ルール上、石が置けるか置けないかを確認する----------
// ---STEP.7.1---8方向チェックするための準備をする-------
//    仮引数  (own, opponent)
//    先手（黒石）のときは（"b", "w"）で、後手（白石）のときは（"w", "b"）で、置けるか置けないかを判定する

function ableCheck(own, opponent) {

    for (let i = 0; i < 10; i++) {
        for (let k = 0; k < 10; k++) {

            //         // 引数  (i, k, vertical, horizontal, own, opponent, count)
            //         // i と k は どの要素をクリックしたか
            //         // vertical は行（i） の移動   horizontal は列（k） の移動   
            //         // own は自軍を, opponent は敵軍を表す。"b"は黒, "w"は白
            //         // count は『再起』の回数をカウントする

            // （水平方向のチェック）
            checkLine(i, k, 0, +1, own, opponent, 1); // 右方向へ
            checkLine(i, k, 0, -1, own, opponent, 1); // 左方向
            // （垂直方向のチェック）
            checkLine(i, k, +1, 0, own, opponent, 1); // 下方向
            checkLine(i, k, -1, 0, own, opponent, 1); // 上方向
            // // （斜め方向のチェック）
            checkLine(i, k, +1, +1, own, opponent, 1); // 右下方向
            checkLine(i, k, -1, -1, own, opponent, 1); // 左上方向
            // // （斜め方向のチェック）
            checkLine(i, k, +1, -1, own, opponent, 1); // 左下方向
            checkLine(i, k, -1, +1, own, opponent, 1); // 右上方向
        }
    }
}



// ---STEP.7.2---8方向をチェックする-------

//    引数  (i, k, vertical, horizontal, own, opponent, count)
function checkLine(i, k, vertical, horizontal, own, opponent, count) {

    if (arrayRecord2D[i][k] != 0 || arraySquare2D[i][k].classList.contains("outer")) {
        console.log("if ( 石が置かれている   または   番兵さん ) なので");
        // console.log("ルール上、石を置けない。クリックできないままにする");
        // console.log("indexは" + (i) + (k) + "です);

    } else if (arrayRecord2D[i + vertical][k + horizontal] != opponent) {
        console.log("if ( 隣接の石は相手の石でない。つまり自分の石が置かれているか、あるいは石が置かれていないか ) なので");
        // console.log("ルール上、石を置けない。クリックできないままにする");
        // console.log("隣接はのindexは" + (i + vertical) + (k + horizontal) + "です");

    } else {
        if (arrayRecord2D[i + (vertical * count)][k + (horizontal * count)] == opponent) {
            console.log("if ( 隣接の石は相手の石である。) なので");
            console.log("更にその隣も検索する");

            count = count + 1;
            // console.log("countは" + count);
            // console.log("更にその隣のindexは" + (i + (vertical * count)) + (k + (horizontal * count)) + "石は、 敵軍の石が置かれている");

            console.log("再起する");
            console.log("再起した。countは" + count);
            checkLine(i, k, vertical, horizontal, own, opponent, count);

        } else {
            console.log("else { 更にその相手の最後の石の隣が、自身の石か、あるいは石が置かれていないか");
            //if (     隣接の石が相手の相手の石......ならば                )
            if (arrayRecord2D[i + (vertical * count)][k + (horizontal * count)] == own) {
                console.log("if ( 相手の最後の石の隣が自身の石 ) ならば");
                console.log("挟めるのでクリックできるようにする（ついでに背景色も変える）");
                // クリック出来るように("able")クラスを付与する
                arraySquare2D[i][k].classList.add("able");
            } else {
                console.log("else { 相手の最後の石の隣に石が置かれていない、つまり挟めない ) なので");
                // console.log("ルール上、石を置けない。クリックできないままにする");
                // console.log("最後は石がなかったか番兵さん　　　bagu???");
            }
        }
        // console.log("などの理由でルール上、石を置けない。クリックできないままにする");
    }
}



// ---STEP.8---石を置く（クリックする）----------
//    クリックすると〇が黒色⇔白色と交互にでる。ルール上石を置けない所はクリックできない。
//    同じ場所には２度クリックできない。
// putStone();
function putStone() {
    let count = 0;
    const passCount = 0;
    for (let i = 0; i < 10; i++) {
        for (let k = 0; k < 10; k++) {

            arraySquare2D[i][k].addEventListener('click', function () {
                console.log("index[" + i + "][" + k + "]にクリックされました")

                notice(count);
                // console.log("得点表を更新する");

                // お知らせを消す
                document.querySelector("#noticeBlack2").textContent = "";
                document.querySelector("#noticeBlack3").textContent = "";

                if (count % 2 === 0) {

                    // 引数 (i, k, own, opponent)
                    // (i, k) はクリックした座標。("b", "w") は先手（黒）   ("w", "b") 後手（白）
                    // --- 黒石（"b", "w"）にひっくり返す
                    checkFlip(i, k, "b", "w");

                    // ブラウザ上の表示を書き換える（記録用配列に沿って）
                    drawing();

                    // ゲーム中に相手側の石を透過する（背景画像も変える）
                    gameOpacity(".black", ".white", "url(/images/banpei_uk.png)")

                    // 後手（白軍）が置くことが可能なマスを調べる
                    ableCheck("w", "b");

                    // もし後手（白軍）の置くところがなければパスする
                    // クリックの count を『+1』する
                    const passCount = checkPass(count);
                    if (passCount == 1) {
                        // console.log("後手（白軍）の置くところがなかったので『1』がリターンされた");

                        const ArrayPass = document.querySelectorAll(".able");
                        // 先手（黒軍）が置くことが可能なマス も 調べる
                        if (ArrayPass.length == 0) {
                            // console.log("先手（黒軍） も 置くところがなかった。");
                            // console.log("ので、試合終了");
                            // 勝負判定に
                            checkWin();
                        } else {
                        }
                    }
                    // console.log(count + "に" + passCount + "を加える");
                    count = count + passCount;
                    // console.log("カウントは" + count + "になった");

                } else {
                    // --- 白石（"w", "b"）にひっくり返す
                    checkFlip(i, k, "w", "b");

                    drawing();

                    gameOpacity(".white", ".black", "url(/images/banpei_wa.png)")

                    // 先手（黒石）が置くことが可能なマスを調べる
                    ableCheck("b", "w");

                    const passCount = checkPass(count);
                    if (passCount == 1) {
                        // console.log("後手（黒軍）の置くところがなかったので『1』がリターンされた");

                        const ArrayPass = document.querySelectorAll(".able");
                        // 後手（白軍）が置くことが可能なマス も 調べる
                        if (ArrayPass.length == 0) {
                            // console.log("後手（白軍） も 置くところがなかった。");
                            // console.log("ので、試合終了");
                            // 勝負判定に
                            checkWin();
                        } else {
                        }
                    }
                    // 相手がパスしていたら、クリックcount にリターンされたpassCountの『1』が加わる。
                    count = count + passCount;
                }
                count = count + 1;
                console.log("クリックのカウントは" + count);
            })
        }
    }
}


// ---STEP.9---挟まれた石をひっくり返す----------
//    備忘録
//     // どの方向の白石が黒色に挟まれてひっくり返せるか確認する
//     // 引数  (i, k, vertical, horizontal, own, opponent, count)
//     // （水平方向のチェック）
//     flipStone(i, k, 0, +1, "b", "w", 1); // 右方向へ
//     flipStone(i, k, 0, -1, "b", "w", 1); // 左方向
//     // （垂直方向のチェック）
//     flipStone(i, k, +1, 0, "b", "w", 1); // 下方向
//     flipStone(i, k, -1, 0, "b", "w", 1); // 上方向
//     // // （斜め方向のチェック）
//     flipStone(i, k, +1, +1, "b", "w", 1); // 右下方向
//     flipStone(i, k, -1, -1, "b", "w", 1); // 左上方向
//     // // （斜め方向のチェック）
//     flipStone(i, k, +1, -1, "b", "w", 1); // 左下方向
//     flipStone(i, k, -1, +1, "b", "w", 1); // 右上方向
// }

//     // どの方向の黒石が白色に挟まれてひっくり返せるか確認する
//     flipStone(i, 1, 1, plus, "w", "b"); // 右方向
//     flipStone(i, 1, 1, minus, "w", "b"); // 左方向
//     flipStone(i, 1, 10, plus, "w", "b"); // 下方向
//     flipStone(i, 1, 10, minus, "w", "b"); // 上方向
//     flipStone(i, 1, 11, plus, "w", "b"); // 右下方向
//     flipStone(i, 1, 11, minus, "w", "b"); // 左上方向
//     flipStone(i, 1, 9, plus, "w", "b"); // 左下方向
//     flipStone(i, 1, 9, minus, "w", "b"); // 右上方向
// }



// ---STEP.9-2 黒石（"b", "w"）に、白石（"w", "b"）にひっくり返す

function checkFlip(i, k, own, opponent) {
    // どの方向の白石が黒色挟まれてひっくり返せるか確認する
    // 引数  (i, k, vertical, horizontal, own, opponent, count)
    // （水平方向のチェック）
    flipStone(i, k, 0, +1, own, opponent, 1); // 右方向へ
    flipStone(i, k, 0, -1, own, opponent, 1); // 左方向
    // （垂直方向のチェック）
    flipStone(i, k, +1, 0, own, opponent, 1); // 下方向
    flipStone(i, k, -1, 0, own, opponent, 1); // 上方向
    // // （斜め方向のチェック）
    flipStone(i, k, +1, +1, own, opponent, 1); // 右下方向
    flipStone(i, k, -1, -1, own, opponent, 1); // 左上方向
    // // （斜め方向のチェック）
    flipStone(i, k, +1, -1, own, opponent, 1); // 左下方向
    flipStone(i, k, -1, +1, own, opponent, 1); // 右上方向

    // 記録用配列に、"自軍の色を" を記入する
    arrayRecord2D[i][k] = own;
}


// ---STEP.9.2
//    各方向（8方向をチェックし、ひっくり返す）
// flipStone()
function flipStone(i, k, vertical, horizontal, own, opponent, count) {

    if (arrayRecord2D[i][k] != 0 || arraySquare2D[i][k].classList.contains("outer")) {
        console.log("if ( 石が置かれている   または   番兵さん ) なので");
        // console.log("ルール上、石を置けない。クリックできないままにする");
        // console.log("indexは" + (i) + (k) + "です);

    } else if (arrayRecord2D[i + vertical][k + horizontal] != opponent) {
        console.log("if ( 隣接の石は相手の石でない。つまり自分の石が置かれているか、あるいは石が置かれていないか ) なので");
        // console.log("ルール上、石を置けない。クリックできないままにする");
        // console.log("隣接はのindexは" + (i + vertical) + (k + horizontal) + "です");

    } else {
        if (arrayRecord2D[i + (vertical * count)][k + (horizontal * count)] == opponent) {
            console.log("if ( 隣接の石は相手の石である。) なので");
            console.log("更にその隣も検索する");

            count = count + 1;
            // console.log("countは" + count);
            // console.log("更にその隣のindexは" + (i + (vertical * count)) + (k + (horizontal * count)) + "石は、 敵軍の石が置かれている");

            console.log("再起する");
            console.log("再起した。countは" + count);
            flipStone(i, k, vertical, horizontal, own, opponent, count);
        } else {
            console.log("else { 更にその相手の最後の石の隣が、自身の石か、あるいは石が置かれていないか");

            if (arrayRecord2D[i + (vertical * count)][k + (horizontal * count)] == own) {
                console.log("if ( 相手の最後の石の隣が自身の石 ) なので");
                console.log("挟めるので再起した数の" + count + "の石をひっくり返す");

                for (let m = 1; m < count; m++) {
                    console.log(count + "個の石をひっくり返すぞ");
                    arrayRecord2D[i + (vertical * m)][k + (horizontal * m)] = own
                    console.log("隣接する石" + (i + (vertical * m)) + "" + (k + (horizontal * m)) + "の" + opponent + "を" + own + "にひっくり返す")
                }

            } else {
                console.log("bug????????????????");
            }
        }
    }
}


// ---STEP.10---得点表----------
//    現在の石の数を表示

function notice(count) {
    const arrayBlack = document.querySelectorAll(".black");
    const arrayWhite = document.querySelectorAll(".white");

    document.querySelector("#noticeBlack1").textContent = "黒 " + arrayBlack.length;
    document.querySelector("#noticeBlack1").style.fontSize = "60px";
    document.querySelector("#noticeBlack4").textContent = "白 " + arrayWhite.length;
    document.querySelector("#noticeBlack4").style.fontSize = "60px";

    if (count % 2 === 0) {
        // document.querySelector("#noticeBlack3").textContent = "白の置くところはあります。";
        document.querySelector("#noticeBlack1").style.border = "0px dashed black";
        document.querySelector("#noticeBlack4").style.border = "15px dashed white";
    } else {
        // document.querySelector("#noticeBlack2").textContent = "黒の置くところはあります。";
        document.querySelector("#noticeBlack1").style.border = "15px dashed black";
        document.querySelector("#noticeBlack4").style.border = "0px dashed white";
    }
}

// ---STEP.11---パスする----------
//    石を置く場所がない場合はパスになる

function checkPass(count) {

    const ArrayPass = document.querySelectorAll(".able");

    if (ArrayPass.length == 0) {
        // console.log("置くところがありません。");
        if (count % 2 === 0) {
            document.querySelector("#noticeBlack3").textContent = "白の置くところがありません。パスになります。";
            document.querySelector("#noticeBlack1").style.border = "15px dashed black";
            document.querySelector("#noticeBlack4").style.border = "0px dashed white";
            // 自軍の石が置ける場所を探す
            // console.log("黒が置ける場所を探す")
            ableCheck("b", "w");
            const ArrayPass = document.querySelectorAll(".able");
            if (ArrayPass.length != 0) {
                console.log("黒の置くところはある！！！(ArrayPass.length != 0)");
            } else if (ArrayPass.length == 0) {
                console.log("黒の置くところもない！！！(ArrayPass.length == 0)");
                checkWin();
            } else {
                console.log("bugかな???");
            }
        } else {
            document.querySelector("#noticeBlack2").textContent = "黒の置くところがありません。パスになります。";
            document.querySelector("#noticeBlack1").style.border = "0px dashed black";
            document.querySelector("#noticeBlack4").style.border = "15px dashed white";
            // console.log("白が置ける場所を探す")
            ableCheck("w", "b");
            const ArrayPass = document.querySelectorAll(".able");
            if (ArrayPass.length != 0) {
                console.log("白の置くところはある！！！(ArrayPass.length != 0)");
            } else if (ArrayPass.length == 0) {
                console.log("白の置くところもない！！！(ArrayPass.length == 0)");
                checkWin();
            } else {
                console.log("bugかな???");
            }
        }
        console.log("『+1』をリターンする");
        return 1;
    } else {
        // console.log("置くところがあります。そのままです。（パスなし）");
        return 0;
    }
}


// ---STEP.12---勝敗を確かめる----------
//    先手後手（または後手先手）と連続して石が置けるところがなかった場合

function checkWin() {

    for (let i = 0; i < 100; i++) {
        likeArraySquare[i].style.opacity = 1.0;
    }

    // const arrayAble = document.querySelectorAll(".able");
    const arrayBlack = document.querySelectorAll(".black");
    const arrayWhite = document.querySelectorAll(".white");

    if (arrayBlack.length > arrayWhite.length) {
        // console.log("黒の勝ち");
        document.querySelector("#noticeBlack2").textContent = "黒の勝ち";
        youwin();
    } else if (arrayBlack.length < arrayWhite.length) {
        // console.log("白の勝ち");
        document.querySelector("#noticeBlack3").textContent = "白の勝ち";
        youlose();

    } else if (arrayBlack.length == arrayWhite.length) {
        // console.log("引き分け");
        document.querySelector("#noticeBlack2").textContent = "引き分け";
        document.querySelector("#noticeBlack3").textContent = "引き分け";
        draw();
    } else {
    }
}


// ---STEP.13---演出----------------------------------------------------------------------

// ---STEP.13.1---youwin()
// youwin();
function youwin() {
    document.querySelector("#main").style.backgroundImage = "url(/images/banpei_uk.png)";

    squaresOpacity(".black");

    setTimeout(youwin2, 10000);

    function youwin2() {
        headLine1(["黒", "の", "か", "ち", "で", "す", ""]);
    }
}

// ---STEP.13.2---youlose()
// youlose();
function youlose() {
    document.querySelector("#main").style.backgroundImage = "url(/images/banpei_wa.png)";

    squaresOpacity(".white");

    setTimeout(youlose2, 10000);

    function youlose2() {
        headLine1(["白", "の", "か", "ち", "で", "す", ""]);
    }
}

// ---STEP.13.3---draw()
// draw();
function draw() {

    squaresOpacity(".square");

}



// ---STEP.14---演出(arraySquare[i][k] を透明にしていく)----------
// ---STEP.14 part.1---arraySquare[][]配列全てを透明にしていく

// squaresOpacity();
// function squaresOpacity() {
//     // ここから↓が100回（i < 100）forループ
//     for (let i = 0; i < 10; i++) {
//         for (let k = 0; k < 10; k++) {
//             let counter = 0;

//             //          ここから↓が99回（counter > 99）100m秒毎に繰り返される
//             const timerId = setInterval(
//                 function () {
//                     arraySquare2D[i][k].style.opacity = 1.0 - (0.01 * counter);
//                     counter++;
//                     // console.log("カウンター" + counter);
//                     if (counter > 99) {
//                         clearInterval(timerId)
//                         // console.log("clearIntervalが実行されました")
//                     }
//                 }
//                 , 100)
//             //           ここまで↑が99回（counter > 99）100m秒毎に繰り返される
//         }
//     }
//     // ここまで↑が100回（i < 100）forループ
// }






// ---STEP.14 part.2---ゲーム中に相手側の石を透過する----------

// gameOpacity(".black",".white","url(/images/banpei_you.png)")

function gameOpacity(ownClass, opponentClass, image) {

    document.querySelector("#main").style.backgroundImage = image;

    const targeArrayOwn = document.querySelectorAll(ownClass);
    const targeArrayOpponent = document.querySelectorAll(opponentClass);
    for (let i = 0; i < targeArrayOwn.length; i++) {
        console.log(targeArrayOwn.length + "回目");
        targeArrayOwn[i].style.opacity = 0.60;
        // console.log("カウンター" + counter);
    }
    for (let i = 0; i < targeArrayOpponent.length; i++) {
        console.log(targeArrayOpponent.length + "回目");
        targeArrayOpponent[i].style.opacity = 1.0;
        // console.log("カウンター" + counter);
    }
}



// ---STEP.14 part.3---arraySquare[][]配列で".black"または".white"だけを透明にしていく

// function squaresOpacity(".black") {
function squaresOpacity(color) {

    const targeArray = document.querySelectorAll(color);
    console.log("透過する石の配列" + targeArray);
    console.log("透過する石の数" + targeArray.length);

    // const targeArray = document.querySelectorAll(color);

    // ここから↓が石の数だけ（i < targeArray.length）forループ
    for (let i = 0; i < targeArray.length; i++) {

        let counter = 0;
        console.log("ループに入りました" + targeArray.length + "回目");

        //          ここから↓が99回（counter > 99）100m秒毎に繰り返される
        const timerId = setInterval(
            function () {
                targeArray[i].style.opacity = 1.0 - ((1 / targeArray.length) * counter);
                counter++;
                // console.log("カウンター" + counter);
                if (counter > targeArray.length) {
                    clearInterval(timerId)
                    console.log("clearIntervalが実行されました")
                }
            }
            , (10000 / targeArray.length))
        //           ここまで↑が(counter > targeArray.length)回、(10000 / targeArray.length)秒毎に繰り返される
        //           targeArray.lengthの数値がいくらであろうと、10000ms(10秒)で終わる
    }
    // ここまで↑が石の数だけ（i < targeArray.length）forループ
}

//---PART.15---演出----------
// 『headLine1』関数↓　　　.outerを["せ", "ん", "て", "ん", "す", "が"]ぐるぐる廻る;

function headLine1(sentence) {

    const array = sentence;
    const arrayBackColor = ["red", "pink", "aquamarine", "yellow", "powderblue"];
    const arrayColor = ["yellow", "powderblue", "red", "pink", "aquamarine"];
    let counter = 0

    const timerId = setInterval(
        function () {

            const i = (Math.floor(counter / 9)) % 4;
            const k = counter % 9;
            const m = counter % 7;
            const r = counter % 5;

            arrayOuter2D[i][k].style.opacity = 0.0 + (0.006 * counter);
            arrayOuter2D[i][k].textContent = array[m];
            arrayOuter2D[i][k].style.backgroundColor = arrayBackColor[r];
            arrayOuter2D[i][k].style.color = arrayColor[r];

            console.log("カウンター" + counter);
            counter++;

            if (counter > 180) {
                clearInterval(timerId)
            }
        }, 150)
}




//---PART.15---演出----------
// ---STEP.2.1 part-2  番兵さん。少し手打ち感を減らす（でも１次元配列）
// // function outer() {
// //     const arraySwirl = [];
// const arraySwirl = [];//周辺

// // swirl();
// function swirl() {
//     let top = 0;
//     let right = 9;
//     let bottom = 18;
//     let left = 27;
//     let count = 1;


//     for (let i = 0; i < 3; i++) {


//         for (let k = 0; k < 9 - (i * 2); k++) {

//             arraySwirl[top + k] = arraySquare[(0 + (11 * i)) + (1 * k)];
//             arraySwirl[right + k] = arraySquare[(9 + (9 * i)) + (10 * k)];
//             arraySwirl[bottom + k] = arraySquare[(99 - (11 * i)) - (1 * k)];
//             arraySwirl[left + k] = arraySquare[(90 - (9 * i)) - (10 * k)];
//             console.log(left + k);
//             console.log((90 - (9 * i)) - (10 * k));
//         }
//         top = left + ((11) - ((count * 2) * count));
//         console.log(top);
//         right = top + (9 - ((count * 2) * count));
//         bottom = right + (9 - ((count * 2) * count));
//         left = bottom + (9 - ((count * 2) * count));

//         count++;




//     }
//     // console.log(arraySwirl);

//     console.log(arraySwirl.length);
//     // console.table(arraySwirl);

//         arraySwirl[64].textContent = 64
//         arraySwirl[64].style.color = "black";
//         console.log(arraySwirl[65]);

//     for (let i = 0; i < 65; i++) {
//         arraySwirl[i].textContent = i
//         arraySwirl[i].style.color = "black";
//     }
// }






// // headLine2();
// function headLine2() {


//     document.querySelector("#contents").style.height = "0px";
//     document.querySelector("#contents").style.width = "0px";



//     const targetElement = document.querySelector("#main");

//     // 文字の飛び出し具合の調整
//     targetElement.style.height = 0;
//     targetElement.style.width = "0px";
//     targetElement.style.textContent = "";
//     targetElement.style.lineHeight = "1.2";

//     let count = 0;

//     for (let i = 0; i < 116; i++) {
//         const m = count % 18;

//         setTimeout(function () {
//             const array = ["あ", "あ", "な", "な", "た", "た", "の", "の", "勝", "勝", "ち", "ち"];



//             targetElement.textContent = array[m];

//             // document.querySelector("#main").style.backgroundColor = "deepskyblue";
//             targetElement.style.color = "lightskyblue";
//             targetElement.style.textAlign = "center";
//             // document.querySelector(area).style.fontWeight = "bolder";

//             targetElement.style.fontSize = ((i * i) / 2) + "%";
//         }, (2500 + (i * 170)))

//         count = count + 1;
//     }
// }





// // // // ---PART.555---斜め（右上がり）方向をチェックする----だめ、やり直し---------

// // // const upperRight = [0, 8, 16, 24, 32, 40, 48, 56, 57, 58, 59, 60, 61, 62, 63];
// // // for (let i = 0; i < 15; i = i + 1) {

// // //     for (let j = 0; j < 7; j = j + 1) {
// // //         checkArray = array555[upperRight[i]] - (j * 7);
// // //     }
// // // }

// // // // ---PART.555---斜め（右上がり）方向をチェックする----やり直した？---------

// // const upperRight0 = [0];
// // const upperRight1 = [8, 1];
// // const upperRight2 = [16, 9, 2];
// // const upperRight3 = [24, 17, 10, 3];
// // const upperRight4 = [32, 25, 18, 11, 4];
// // const upperRight5 = [40, 33, 26, 19, 12, 5];
// // const upperRight6 = [48, 41, 34, 27, 20, 13, 6];
// // const upperRight7 = [56, 49, 42, 35, 28, 21, 14, 7];
// // const upperRight8 = [57, 50, 43, 36, 29, 22, 15];
// // const upperRight9 = [58, 51, 44, 37, 30, 23];
// // const upperRight10 = [59, 52, 45, 38, 31];
// // const upperRight11 = [60, 53, 46, 39];
// // const upperRight12 = [61, 54, 47];
// // const upperRight13 = [62, 55];
// // const upperRight14 = [63];

// // const arrayUpperRight = [upperRight0, upperRight1, upperRight2, upperRight3, upperRight4, upperRight5, upperRight6, upperRight7, upperRight8, upperRight9, upperRight10, upperRight11, upperRight12, upperRight13, upperRight14];
// // console.log("列目の" + arrayUpperRight);
// // for (let i = 0; i < 15; i++) {
// //     console.log("列目の" + arrayUpperRight[i]);
// // }

