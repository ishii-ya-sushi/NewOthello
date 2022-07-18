// ---PART.0  マス（square） 100個分の "div" を作る----------------------
// ---class="square"属性を付与、id属性を連番で付与する

for (let i = 0; i < 100; i++) {
    const newDivs = document.createElement("div");

    newDivs.classList.add("square");
    newDivs.setAttribute("id", "squares" + (i));
    newDivs.textContent = "●";

    document.querySelector("#board").append(newDivs);
}


// ---PART.1  グローバルスコープの定数・配列・関数置き場-------------

// ---PART.1.1.1  マス<div class="square">が 100個 入ったブラウザ表示用『arraySquare』配列風を作る（１次元配列） 
// const arraySquare = document.querySelectorAll(".square");

// ---PART.1.1.2  100個(10×10)が入った ２次元配列 に挑戦する 
const arraySquare = document.querySelectorAll(".square");
const arraySquare2D = [];

for (let i = 0; i < 10; i++) {
    const arraySquare1D = [];
    for (let k = 0; k < 10; k++) {
        arraySquare1D.push(arraySquare[(10 * i) + k]);
    }
    arraySquare2D.push(arraySquare1D);
}
// console.table(arraySquare2D);
// console.log(arraySquare2D)


// ---PART.1.2.1  記録用の配列『arrayRecord』を作る。要素数は100個。（１次元配列）  
// const arrayRecord = new Array(100).fill(0);
// const arrayRecord = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

// ---PART.1.2.2  記録用の配列『arrayRecord』を作る。2次元配列で作る
const arrayRecord = new Array(100).fill(0);
const arrayRecord2D = [];
for (let i = 0; i < 10; i++) {
    arrayRecord2D[i] = arrayRecord.slice(i * 10, (i + 1) * 10);
}
// console.table(arrayRecord2D);

// ---PART.1.3  勝敗を決める配列を作る
const ArrayWhiteWin = [];
const ArrayBlackWin = [];


// ---PART.2  番兵さん を作る---------
//    arraySquare配列から番兵さん用に、盤面の外周の<div>を選り出し、arrayOuter配列 を作る。
//    ゲーム終了時の演出も考え、要素の並び順をすこし弄る（時計回りになるように）。
//    class="outer" を付与する。。

// ---PART.2.1.1  番兵さん。手打ち感満載（１次元配列）
// const arrayOuterIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 19, 29, 39, 49, 59, 69, 79, 89, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 80, 70, 60, 50, 40, 30, 20, 10]
// function arrayouter() {
//     for (let i = 0; i < arrayOuterIndex.length; i++) {
//         arraySquare[arrayOuterIndex[i]].classList.add("outer");
//     }
// }

// ---PART.2.1.2  番兵さん。少し手打ち感を減らす（でも１次元配列）
// // function outer() {
// //     const arrayOuter = [];
// //     for (let i = 0; i < 9; i++) {
// //         arrayOuter[0 + i] = arraySquare[0 + (1 * i)];
// //         arrayOuter[9 + i] = arraySquare[9 + (10 * i)];
// //         arrayOuter[18 + i] = arraySquare[99 - (1 * i)];
// //         arrayOuter[27 + i] = arraySquare[90 - (10 * i)];
// //     }

// //     for (let i = 0; i < arrayOuter.length; i++) {
// //         arrayOuter[i].classList.add("outer");
// //     }
// // }

// ---PART.2.1.3  番兵さん。2次元配列に挑戦する
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
// console.table(arrayOuter2D);



// ---PART.2.2  番兵さんにclass="outer" 属性を付与する。。

outer();
function outer() {
    for (let i = 0; i < 4; i++) {
        for (let k = 0; k < 9; k++) {
            arrayOuter2D[i][k].classList.add("outer");
        }
    }
}

// console.table(arrayOuter2D);


// ---PART.3  盤面さん を作る---------
// ---arraySquare配列から番兵さんを除いた『(".square:not(.outer)")』、
// ６４（8×8）個のマスでarrayInner配列を作る。// class="inner" を付与する。

// const arrayInner = document.querySelectorAll(".square:not(.outer)");
// for (let i = 0; i < (arrayInner.length); i++) {
//     arrayInner[i].classList.add("inner");
// }


// ---PART.3.2  盤面さん を作る---------

// const arrayInner = [];
// for (let i = 0; i < 8; i++) {
//     arrayInner[i] = arraySquare.slice(1 + (i * 10), (i + 1) * 9);
// }

// console.table(arrayInner)
// console.log(arrayInner)
// console.log(arrayInner[4][5])

// そもそもアレイ風にはslice()は使えない？？？



// ---PART.4  記録用の配列『arrayRecord』にゲーム開始時のスコア（配置）を入力する-------------
//    スコアは、黒は"b"、白は"w"、空白は"0" とする
//    真ん中に黒と白。黒は"b"、白は"w"
//    勝敗の判定のため class="inner" は削除する

arrayRecord2D[4][4] = "w";
arrayRecord2D[4][5] = "b";
arrayRecord2D[5][4] = "b";
arrayRecord2D[5][5] = "w";

arraySquare2D[4][4].classList.remove("inner");
arraySquare2D[4][5].classList.remove("inner");
arraySquare2D[5][4].classList.remove("inner");
arraySquare2D[5][5].classList.remove("inner");


// arrayRecord2D[1][5] = "b";
// arrayRecord2D[1][4] = "b";
// arrayRecord2D[2][5] = "b";
// arrayRecord2D[2][4] = "b";
// arrayRecord2D[3][5] = "b";
// arrayRecord2D[3][4] = "b";
// arrayRecord2D[6][5] = "b";
// arrayRecord2D[6][4] = "b";
// arrayRecord2D[7][5] = "b";
// arrayRecord2D[7][4] = "b";
// arrayRecord2D[8][5] = "b";
// arrayRecord2D[8][4] = "b";



// // ---PART.5  全てのはじまり

window.onload = function () {

    drawing();    // PART.6

    ableCheck("b", "w"); // PART.7-2   先手の黒石が置ける場所を探す

    putStone();       // PART.8

    // squaresOpacity();
    // squaresOpacity(".black");
    // squaresOpacity(".white");

}


// // ---PART.6---記録用の配列『arrayRecord』のスコアに合わせてブラウザ上の盤面を表示する----------

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


// // ---PART.７---ルール上、石が置けるか置けないかを確認する----------

// // ---PART.7-2 黒石（"b", "w"）、白石（"w", "b"）が置けるか置けないかを判定する
function ableCheck(own, opponent,) {

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



// // ---PART.7-3
// // 各方向（8方向をチェックする）

// 引数  (i, k, vertical, horizontal, own, opponent, count)


function checkLine(i, k, vertical, horizontal, own, opponent, count) {

    // console.log("チェックするindexは" + (10 * i + k));


    if (arrayRecord2D[i][k] != 0 || arraySquare2D[i][k].classList.contains("outer")) {

        // console.log("indexは" + (i) + (k) + "です。0でない。既に石が置かれているか、または番兵さんか");
        // console.log("などの理由でルール上、石を置けない。クリックできないままにする");

    } else if (arrayRecord2D[i + vertical][k + horizontal] != opponent) {
        // console.log("隣は敵色でない");
        // // 敵軍以外、つまり
        // console.log("indexは" + (i) + (k) + "です。記録は0だ!でも残念");
        // console.log("隣接はのindexは" + (i + vertical) + (k + horizontal) + "石が置かれていないか、あるいは、自軍の石が置かれている");
        // console.log("などの理由でルール上、石を置けない。クリックできないままにする");

    } else {
        // checkLine(i, k, -1, +1, "w", "b"); // 右上方向
        // console.log(i + "と" + k + "と" + vertical + "と" + horizontal + "と" + own + "と" + opponent + "と" + count);
        // console.log("隣接はのindexは" + (i + (vertical * count)) + (k + (horizontal * count)) + "石は、 敵軍の石が置かれている");

        // console.log(count)
        // console.log((vertical * count))
        // console.log((horizontal * count))
        // console.log((i + (vertical * count)))
        // console.log((k + (horizontal * count)))

        if (arrayRecord2D[i + (vertical * count)][k + (horizontal * count)] == opponent) {
            // 隣は敵軍の石である前提だけれども、１つ隣から検索していく
            console.log("隣接は敵色だ");
            console.log("その隣も検索する");
            console.log("再起する");
            console.log("countは" + count);
            count = count + 1;
            console.log("countは" + count);

            console.log(i + "" + k + "" + vertical + "" + horizontal + "" + own + "" + opponent);
            checkLine(i, k, vertical, horizontal, own, opponent, count);
        } else {
            console.log("最後まで来た");


            if (arrayRecord2D[i + (vertical * count)][k + (horizontal * count)] == own) {
                // 最後の石の"Color"が"ownColor"ならば
                console.log("挟めるのでクリックできるようにする");
                // クリック出来るようにするために。("inner")と("darkgreen")クラスを削除し。
                // クリック出来るように("able")クラスを付与する（ついでに背景色も変える）
                arraySquare2D[i][k].classList.add("able");
            } else {
                console.log("最後は石がなかったか番兵さん　　　bagu???");
            }
        }
        // console.log("などの理由でルール上、石を置けない。クリックできないままにする");
    }

}



// // ---PART.8---石を置く（クリックする）----------
// // クリックすると〇が黒色⇔白色と交互にでる。ルール上石を置けない所はクリックできない。
// // 同じ場所には２度クリックできない。
// putStone();
function putStone() {
    let count = 0;
    const passCount = 0;
    for (let i = 0; i < 10; i++) {
        for (let k = 0; k < 10; k++) {

            arraySquare2D[i][k].addEventListener('click', function () {

                console.log("index[" + i + "][" + k + "]にクリックされました")
                // お知らせを消す
                document.querySelector("#noticeBlack2").textContent = "";
                document.querySelector("#noticeBlack3").textContent = "";

                if (count % 2 === 0) {

                    // class="able" を削除  class="black" を付与
                    // arraySquare[i].classList.remove("able");
                    // arraySquare[i].classList.add("black");

                    // --- 黒石（"b", "w"）にひっくり返す
                    checkFlip(i, k, "b", "w");

                    // ブラウザ上の表示を書き換える（記録用配列に沿って）
                    drawing();

                    // 後手（白軍）が置くことが可能なマスを調べる
                    ableCheck("w", "b");

                    // もし後手（白軍）の置くところがなければパスする
                    // カウントを『+1』する
                    const passCount = checkPass(count);

                    if (passCount == 1) {

                        const ArrayPass = document.querySelectorAll(".able");

                        if (ArrayPass.length == 0) {

                            checkWin();
                        } else {


                        }
                    }

                    // console.log(passCount)
                    // console.log(count + "に" + passCount + "を加える");
                    count = count + passCount;
                    // console.log("カウントは" + count + "になった");




                    // document.querySelector("#noticeBlack1").style.border = "0px dashed white"
                    // document.querySelector("#noticeBlack4").style.border = "15px dashed white"

                    // 勝敗を判定する
                    // checkWin()



                } else {
                    // arraySquare[i].classList.remove("able");
                    // arraySquare[i].classList.add("white");

                    // --- 白石（"w", "b"）にひっくり返す

                    checkFlip(i, k, "w", "b");

                    drawing();

                    // 先手（黒石）が置くことが可能なマスを調べる
                    ableCheck("b", "w");

                    const passCount = checkPass(count);

                    count = count + passCount;

                    checkWin();

                    // document.querySelector("#noticeBlack1").style.border = "15px dashed black"
                    // document.querySelector("#noticeBlack4").style.border = "0px dashed black"

                    // checkWin()
                }

                count = count + 1;
                // console.log("passCount" + passCount)
                // console.log("クリックの回数　" + count);
                // console.log("ゲームの経過　" + arrayRecord);
            })
        }
    }
}


// ---PART.9---挟まれた石をひっくり返す----------
// ---PART.9.1.1 黒石で挟んで白石をひっくり返す

// function flipStoneBlack(i, k) {
//     // どの方向の白石が黒色挟まれてひっくり返せるか確認する
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

//     // // 記録用配列に、"自軍の色を" を記入する
//     // arrayRecord[i] = "b";
//     // // 表示用配列から、class=""inner"を削除する
//     // arraySquare[i].classList.remove("inner");

// }


// // ---PART.9.1.2 白石で挟んでに黒石をひっくり返す
// function flipStoneWhite(i) {
//     flipStone(i, 1, 1, plus, "w", "b"); // 右方向
//     flipStone(i, 1, 1, minus, "w", "b"); // 左方向
//     flipStone(i, 1, 10, plus, "w", "b"); // 下方向
//     flipStone(i, 1, 10, minus, "w", "b"); // 上方向
//     flipStone(i, 1, 11, plus, "w", "b"); // 右下方向
//     flipStone(i, 1, 11, minus, "w", "b"); // 左上方向
//     flipStone(i, 1, 9, plus, "w", "b"); // 左下方向
//     flipStone(i, 1, 9, minus, "w", "b"); // 右上方向

//     arrayRecord[i] = "w";
//     arraySquare[i].classList.remove("inner");
// }




// // ---PART.9-2 黒石（"b", "w"）に、白石（"w", "b"）にひっくり返す

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

    // // 記録用配列に、"自軍の色を" を記入する
    arrayRecord2D[i][k] = own;
    // // 表示用配列から、class=""inner"を削除する
    // arraySquare[i].classList.remove("inner");

}




// // ---PART.9.2
// // 各方向（8方向をチェックし、ひっくり返す）
// flipStone()
function flipStone(i, k, vertical, horizontal, own, opponent, count) {

    if (arrayRecord2D[i][k] != 0 || arraySquare2D[i][k].classList.contains("outer")) {

        console.log("indexは" + (i) + (k) + "です。0でない。既に石が置かれているか、または番兵さんか");
        // console.log("などの理由でルール上、石を置けない。クリックできないままにする");

    } else if (arrayRecord2D[i + vertical][k + horizontal] != opponent) {
        // console.log("隣は敵色でない");
        // // 敵軍以外、つまり
        console.log("indexは" + (i) + (k) + "です。記録は0だ!でも残念");
        console.log("隣接はのindexは" + (i + vertical) + (k + horizontal) + "石が置かれていないか、あるいは、自軍の石が置かれている");
        // console.log("などの理由でルール上、石を置けない。クリックできないままにする");

    } else {

        // console.log(i + "と" + k + "と" + vertical + "と" + horizontal + "と" + own + "と" + opponent + "と" + count);
        console.log(count + "個。隣接のindexは" + (i + (vertical * count)) + (k + (horizontal * count)) + "石は、" + arrayRecord2D[i + (vertical * count)][k + (horizontal * count)] + "の石が置かれている");

        if (arrayRecord2D[i + (vertical * count)][k + (horizontal * count)] == opponent) {
            // 隣は敵軍の石である前提だけれども、１つ隣から検索していく
            // console.log("隣接は敵色だ");
            // console.log("その隣も検索する");
            console.log("再起する");
            // console.log("countは" + count);
            count = count + 1;
            console.log("再起した。countは" + count);

            // console.log(i + "" + k + "" + vertical + "" + horizontal + "" + own + "" + opponent);
            flipStone(i, k, vertical, horizontal, own, opponent, count);
        } else {
            console.log("最後まで来た");

            if (arrayRecord2D[i + (vertical * count)][k + (horizontal * count)] == own) {
                // 再起した数だけ石をひっくり返す
                console.log(count + "個の石をひっくり返すぞ");
                for (let m = 1; m < count; m++) {
                    console.log(count + "個の石をひっくり返すぞ");
                    arrayRecord2D[i + (vertical * m)][k + (horizontal * m)] = own
                    console.log("隣接する石" + (i + (vertical * m)) + "" + (k + (horizontal * m)) + "の" + opponent + "を" + own + "にひっくり返す")
                }

            } else {
                console.log("bagu????????????????");
            }
        }
    }
}




// // ---PART.10---パスする----------
// // 石を置く場所がない場合はパスになる

function checkPass(count) {

    const ArrayPass = document.querySelectorAll(".able");

    if (ArrayPass.length == 0) {
        // console.log("置くところがありません。パスしてください。");

        // 自軍の石が置ける場所を探す
        if (count % 2 === 0) {
            document.querySelector("#noticeBlack3").textContent = "白の置くところがありません。パスになります。";
            document.querySelector("#noticeBlack1").style.border = "15px dashed black";
            document.querySelector("#noticeBlack4").style.border = "0px dashed white";


            // console.log("黒が置ける場所を探す")
            ableCheck("b", "w");
            const ArrayPass = document.querySelectorAll(".able");
            if (ArrayPass.length != 0) {
            } else if (ArrayPass.length == 0) {
                checkWin();
            } else {
                console.log("bagかな???");
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
                console.log("bagかな???");
            }
        }
        console.log("『+1』をリターンする");
        return 1;
    } else {
        if (count % 2 === 0) {
            // document.querySelector("#noticeBlack3").textContent = "白の置くところはあります。";
            document.querySelector("#noticeBlack1").style.border = "0px dashed black";
            document.querySelector("#noticeBlack4").style.border = "15px dashed white";
        } else {
            // document.querySelector("#noticeBlack2").textContent = "黒の置くところはあります。";
            document.querySelector("#noticeBlack1").style.border = "15px dashed black";
            document.querySelector("#noticeBlack4").style.border = "0px dashed white";
        }

        return 0;
    }
}

// console.log(arrayRecord);


// // ---PART.11---勝敗を確かめる----------

function checkWin() {
    const arrayAble = document.querySelectorAll(".able");
    const arrayInner = document.querySelectorAll(".inner");
    const arrayBlack = document.querySelectorAll(".black");
    const arrayWhite = document.querySelectorAll(".white");

    // 現在の石の数を表示
    document.querySelector("#noticeBlack1").textContent = "黒 " + arrayBlack.length;
    document.querySelector("#noticeBlack1").style.fontSize = "60px";
    document.querySelector("#noticeBlack4").textContent = "白 " + arrayWhite.length;
    document.querySelector("#noticeBlack4").style.fontSize = "60px";



    // (石が置けるマスが０ 且つ 空白のマスが０) または (黒石が０ または 白石が０)のとき
    if ((arrayAble.length == 0 && arrayInner.length == 0) || (arrayBlack.length == 0 || arrayWhite.length == 0)) {
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
    } else {
    }
}


// ---PART.12---演出----------

// ---PART.12.1---youwin()
// youwin();
function youwin() {
    document.querySelector("#main").style.backgroundImage = "url(/images/banpei_you.png)";

    squaresOpacity(".black");

    setTimeout(youwin2, 10000);

    function youwin2() {
        headLine1(["あ", "な", "た", "の", "か", "ち", ""]);
    }
}

// ---PART.12.2---youlose()
// youlose();
function youlose() {
    document.querySelector("#main").style.backgroundImage = "url(/images/banpei_wa.png)";

    squaresOpacity(".white");

    setTimeout(youlose2, 10000);

    function youlose2() {
        headLine1(["あ", "な", "た", "の", "ま", "け", ""]);
    }
}

// ---PART.12.3---draw()
// draw();
function draw() {

    squaresOpacity(".square");

}



// ---PART.13---演出(arraySquare[i][k] を透明にしていく)----------
// ---PART.13.1---arraySquare[][]配列全てを透明にしていく

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


// // ---PART.13.2---arraySquare[][]配列で".black"だけを透明にしていく

// // squaresOpacity2();
// squaresOpacity();
// function squaresOpacity() {
function squaresOpacity(color) {

    console.log("透過する石の配列" + arrayRecord);
    const targeArray = document.querySelectorAll(color);
    console.log("透過する石の配列" + targeArray);
    // console.log("透過する石の配列" + targeArray[0].textContent);
    console.log("透過する石の数" + targeArray.length);

    // const targeArray = document.querySelectorAll(color);

    // ここから↓が石の数だけ（i < targeArray.length）forループ
    for (let i = 0; i < targeArray.length; i++) {

        let counter = 0;
        console.log("ループに入りました" + targeArray.length);


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
        //           ここまで↑が99回（counter > 99）100m秒毎に繰り返される
    }

    // ここまで↑が100回（i < 100）forループ
}


// // ---PART.13.2---arraySquare[][]配列全てを透明にしていく

// // squaresOpacity2();
// // squaresOpacity2(".black");
//     const targeArray = document.querySelectorAll(".black");
// console.log("透過する石の数" + targeArray.length);

// function squaresOpacity2() {
//     // function squaresOpacity2(color) {

//     const targeArray = document.querySelectorAll(".black");
//     // const targeArray = document.querySelectorAll(color);

//     console.log("透過する石の数" + targeArray.length);

//     // ここから↓が石の数だけ（i < targeArray.length）forループ
//     for (let i = 0; i < targeArray.length; i++) {
//         let counter = 0;

//         //          ここから↓が99回（counter > 99）100m秒毎に繰り返される
//         const timerId = setInterval(
//             function () {
//                 arraySquare2D[i][k].style.opacity = 1.0 - ((1 / targeArray.length) * counter);
//                 counter++;
//                 // console.log("カウンター" + counter);
//                 if (counter > targeArray.length) {
//                     clearInterval(timerId)
//                     // console.log("clearIntervalが実行されました")
//                 }
//             }
//             , (10000 / targeArray.length))
//         //           ここまで↑が99回（counter > 99）100m秒毎に繰り返される
//     }

//     // ここまで↑が100回（i < 100）forループ
// }












//---PART.14---演出----------
// 『headLine1』関数↓　　　.outerを["せ", "ん", "て", "ん", "す", "が"]ぐるぐる廻る;

function headLine1(sentence) {

    const array = sentence;
    let counter = 0

    const timerId = setInterval(
        function () {

            const i = (Math.floor(counter / 9)) % 4;
            const k = counter % 9;

            const m = counter % 7;
            const r = counter % 5;

            const arrayBackColor = ["red", "pink", "aquamarine", "yellow", "powderblue"];
            const arrayColor = ["yellow", "powderblue", "red", "pink", "aquamarine"];

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
