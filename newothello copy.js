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
console.table(arraySquare2D);
console.log("arraySquare2Dは" + arraySquare2D)


// ---PART.1.2.1  記録用の配列『arrayRecord』を作る。（１次元配列）  
// const arrayRecord = new Array(100).fill(0);
// const arrayRecord = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

// ---PART.1.2.2  記録用の配列『arrayRecord』を作る。2次元配列で作る
const arrayRecord = new Array(100).fill(0);
const arrayRecord2D = [];
for (let i = 0; i < 10; i++) {
    // for (let k = 0; k < 10; k++) {
    arrayRecord2D[i] = arrayRecord.slice(i * 10, (i + 1) * 10);
    // }
}
// console.table(arrayRecord2D);
// console.log("arrayRecord2Dは" + arrayRecord2D);


// ---PART.1.3  勝敗を決める配列を作る
const ArrayWhiteWin = [];
const ArrayBlackWin = [];

// ---PART.1.4   変数『plus』『minus』を作る。  
const plus = +1;
const minus = -1;


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

    //    class="outer" を付与する。。
    outer();

}


// ---PART.2.2  番兵さんにclass="outer" 属性を付与する。。

// outer();
function outer() {
    for (let i = 0; i < 4; i++) {
        for (let k = 0; k < 9; k++) {
            arrayOuter2D[i][k].classList.add("outer");
        }
    }
}


// console.table(arrayOuter2D);
console.log("arrayOuter2Dは" + arrayOuter2D);


// ---PART.3  盤面さん を作る---------
// ---arraySquare配列から番兵さんを除いた『(".square:not(.outer)")』、
// ６４（8×8）個のマスでarrayInner配列を作る。// class="inner" を付与する。

const arrayInner = document.querySelectorAll(".square:not(.outer)");
for (let i = 0; i < (arrayInner.length); i++) {
    arrayInner[i].classList.add("inner");
}


// ---PART.4  記録用の配列『arrayRecord』にゲーム開始時のスコア（配置）を入力する-------------
//    スコアは、黒は"b"、白は"w"、空白は"0" とする
//    真ん中に黒と白。黒は"b"、白は"w"
//    勝敗の判定のため class="inner" は削除する

arrayRecord2D[4][4] = "w";
arrayRecord2D[4][5] = "b";
arrayRecord2D[5][4] = "b";
arrayRecord2D[5][5] = "w";

// arraySquare2D[4][4].classList.remove("inner");
// arraySquare2D[4][5].classList.remove("inner");
// arraySquare2D[5][4].classList.remove("inner");
// arraySquare2D[5][5].classList.remove("inner");

// arraySquare2D[4][4].classList.add("white");
// arraySquare2D[4][5].classList.add("black");
// arraySquare2D[5][4].classList.add("black");
// arraySquare2D[5][5].classList.add("white");




arrayRecord2D[1][3] = "b";
arrayRecord2D[1][4] = "b";
arrayRecord2D[1][5] = "b";
arrayRecord2D[2][4] = "w";
arrayRecord2D[2][5] = "w";
arrayRecord2D[2][6] = "w";


arrayRecord2D[7][3] = "b";
arrayRecord2D[7][4] = "b";
arrayRecord2D[7][5] = "b";
arrayRecord2D[6][4] = "w";
arrayRecord2D[6][5] = "w";
arrayRecord2D[6][6] = "w";


// // ---PART.5  全てのはじまり

console.log("arrayRecord2Dは" + arrayRecord2D);

window.onload = function () {

    // outer();   // PART.PART.2.2  番兵さんに。
    drawing(); // PART.6
    ableCheckBlack(); // PART.7-1-1
    // ableCheckWhite(); // PART.7-1-2

    //     //     putStone();       // PART.8
}




// // ---PART.6---記録用の配列『arrayRecord』のスコアに合わせてブラウザ上の盤面を表示する----------

function drawing() {
    for (let i = 0; i < 10; i++) {
        for (let k = 0; k < 10; k++) {
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

// // ---PART.7-1-1 黒石が置けるか置けないかを判定する
function ableCheckBlack() {

    for (let i = 0; i < 10; i++) {
        for (let k = 0; k < 10; k++) {
            // まず前回付与したclass="able"を削除する
            // arrayRecord2D[i][k].classList.remove("able");


            //         // 引数  (i, k, vertical, horizontal, own, opponent, count)
            //         // i と k は どの要素をクリックしたか
            //         // vertical は行（i） の移動   horizontal は列（k） の移動   
            //         // own は自軍を, opponent は敵軍を表す。"b"は黒, "w"は白
            //         // count は『再起』の回数をカウントする

            // （水平方向のチェック）
            checkLine(i, k, 0, +1, "b", "w", 1); // 右方向へ
            checkLine(i, k, 0, -1, "b", "w", 1); // 左方向
            // （垂直方向のチェック）
            checkLine(i, k, +1, 0, "b", "w", 1); // 下方向
            checkLine(i, k, -1, 0, "b", "w", 1); // 上方向
            // // （斜め方向のチェック）
            checkLine(i, k, +1, +1, "b", "w", 1); // 右下方向
            checkLine(i, k, -1, -1, "b", "w", 1); // 左上方向
            // // （斜め方向のチェック）
            checkLine(i, k, +1, -1, "b", "w", 1); // 左下方向
            checkLine(i, k, -1, +1, "b", "w", 1); // 右上方向
        }

        //     outer();
        //     document.querySelector("#noticeBlack1").style.border = "15px dashed black"
        //     document.querySelector("#noticeBlack4").style.border = "0px dashed black"
    }
}


// // ---PART.7-1-2 白石が置けるか置けないか

function ableCheckWhite() {
    for (let i = 0; i < 10; i++) {
        for (let k = 0; k < 10; k++) {

            //         arraySquare[i].classList.remove("able");


            checkLine(i, k, 0, +1, "w", "b", 1); // 右方向へ
            checkLine(i, k, 0, -1, "w", "b", 1); // 左方向

            checkLine(i, k, +1, 0, "w", "b", 1); // 下方向
            checkLine(i, k, -1, 0, "w", "b", 1); // 上方向

            checkLine(i, k, +1, +1, "w", "b", 1); // 右下方向
            checkLine(i, k, -1, -1, "w", "b", 1); // 左上方向

            checkLine(i, k, +1, -1, "w", "b", 1); // 左下方向
            checkLine(i, k, -1, +1, "w", "b", 1); // 右上方向
            //     }
            //     outer();
            //     document.querySelector("#noticeBlack1").style.border = "0px dashed white"
            //     document.querySelector("#noticeBlack4").style.border = "15px dashed white"
        }
    }
}


// // ---PART.7-2
// // 各方向（8方向をチェックする）

// 引数  (i, k, vertical, horizontal, own, opponent, count)


function checkLine(i, k, vertical, horizontal, own, opponent, count) {

    console.log("記録用配列" + arrayRecord2D);
    console.log("checkLine関数に来た回数" + (10 * i + k));
    console.log("チェックするindexは" + (10 * i + k));
    console.log("記録用の配列は" + arrayRecord2D);
    console.log("カウントは" + count)



    // console.log(element.classList.contains("myclass1"));

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
        // checkLine(i, k, -1, +1, "w", "b"); // 右上方向
        console.log(i + "と" + k + "と" + vertical + "と" + horizontal + "と" + own + "と" + opponent + "と" + count);
        console.log("隣接はのindexは" + (i + (vertical * count)) + (k + (horizontal * count)) + "石は、 敵軍の石が置かれている");

        console.log(count)
        console.log((vertical * count))
        console.log((horizontal * count))
        console.log((i + (vertical * count)))
        console.log((k + (horizontal * count)))

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
                console.log("bagu???");
            }
        }
        // console.log("などの理由でルール上、石を置けない。クリックできないままにする");
    }

}






























// // ---PART.8---石を置く（クリックする）----------
// // クリックすると〇が黒色⇔白色と交互にでる。ルール上石を置けない所はクリックできない。
// // 同じ場所には２度クリックできない。

function putStone() {
    let count = 0;
    const passCount = 0;
    for (let i = 0; i < 10; i++) {
        for (let k = 0; k < 10; k++) {

            arraySquare2D[i][k].addEventListener('click', function () {
                // お知らせを消す
                // document.querySelector("#noticeBlack2").textContent = "";
                // document.querySelector("#noticeBlack3").textContent = "";

                if (count % 2 === 0) {
                    // console.log("黒でクリックしたのはindexの" + i);
                    // console.log("黒でクリックしたときの配列は" + arrayRecord);

                    // class="able" を削除  class="black" を付与
                    arraySquare[i].classList.remove("able");
                    // arraySquare[i].classList.add("black");

                    // 記録用配列上で、挟んだ白石（w）を黒色（b）に書き換える
                    flipStoneBlack(i);

                    // ブラウザ上の表示を書き換える（記録用配列に沿って）
                    drawing();

                    // 後手（白軍）が置くことが可能なマスを調べる
                    ableCheckWhite();

                    // もし後手（白軍）の置くところがなければパスする
                    // カウントを『+1』する
                    const passCount = checkPass(count);
                    // console.log(passCount)
                    // console.log(count + "に" + passCount + "を加える");
                    count = count + passCount;
                    // console.log("カウントは" + count + "になった");

                    // 勝敗を判定する
                    checkWin()

                } else {
                    arraySquare[i].classList.remove("able");
                    arraySquare[i].classList.add("white");

                    //
                    flipStoneWhite(i)
                    drawing();
                    ableCheckBlack();
                    const passCount = checkPass(count);
                    count = count + passCount;

                    checkWin()
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

function flipStoneBlack(i) {
    // どの方向の白石が黒色挟まれてひっくり返せるか確認する
    // 引数  (i, k, vertical, horizontal, own, opponent, count)
    // （水平方向のチェック）
    checkLine(i, k, 0, +1, "b", "w", 1); // 右方向へ
    checkLine(i, k, 0, -1, "b", "w", 1); // 左方向
    // （垂直方向のチェック）
    checkLine(i, k, +1, 0, "b", "w", 1); // 下方向
    checkLine(i, k, -1, 0, "b", "w", 1); // 上方向
    // // （斜め方向のチェック）
    checkLine(i, k, +1, +1, "b", "w", 1); // 右下方向
    checkLine(i, k, -1, -1, "b", "w", 1); // 左上方向
    // // （斜め方向のチェック）
    checkLine(i, k, +1, -1, "b", "w", 1); // 左下方向
    checkLine(i, k, -1, +1, "b", "w", 1); // 右上方向

    // // 記録用配列に、"自軍の色を" を記入する
    // arrayRecord[i] = "b";
    // // 表示用配列から、class=""inner"を削除する
    // arraySquare[i].classList.remove("inner");

}


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


// // ---PART.9.2
// // 各方向（8方向をチェックし、ひっくり返す）
flipStone()
function flipStone(i, k, vertical, horizontal, own, opponent, count) {

    // console.log("記録用配列" + arrayRecord2D);
    // console.log("checkLine関数に来た回数" + (10 * i + k));
    // console.log("チェックするindexは" + (10 * i + k));
    // console.log("記録用の配列は" + arrayRecord2D);
    // console.log("カウントは" + count)



    // console.log(element.classList.contains("myclass1"));

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
        // checkLine(i, k, -1, +1, "w", "b"); // 右上方向
        console.log(i + "と" + k + "と" + vertical + "と" + horizontal + "と" + own + "と" + opponent + "と" + count);
        console.log("隣接はのindexは" + (i + (vertical * count)) + (k + (horizontal * count)) + "石は、 敵軍の石が置かれている");

        console.log(count)
        console.log((vertical * count))
        console.log((horizontal * count))
        console.log((i + (vertical * count)))
        console.log((k + (horizontal * count)))

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
                // 再起した数だけ石をひっくり返す
                for (let m = 1; m < count; m++) {

                    arrayRecord2D[i + (vertical * m)][k + (horizontal * m)] = own

                    // console.log("隣接する石" + (i + ((k * direction) * sign)) + "の" + opponentColor + "を" + ownColor + "にひっくり返す")
                }
            }
        }
    }
}

//             if (arrayRecord2D[i + (vertical * count)][k + (horizontal * count)] == own) {
//                 // 最後の石の"Color"が"ownColor"ならば
//                 console.log("挟めるのでクリックできるようにする");
//                 // クリック出来るようにするために。("inner")と("darkgreen")クラスを削除し。
//                 // クリック出来るように("able")クラスを付与する（ついでに背景色も変える）
//                 arraySquare2D[i][k].classList.add("able");
//             } else {
//                 console.log("bagu???");
//             }
//         }
//         // console.log("などの理由でルール上、石を置けない。クリックできないままにする");
//     }

// }
















// function flipStone(i, count, direction, sign, ownColor, opponentColor) {
//     // console.log("インデックス" + (i) + "でflipStone関数に来た");
//     // console.log("記録用配列" + arrayRecord);
//     // console.log("チェックするindexは" + i);

//     if (arrayRecord[i] != 0) {
//         // console.log("『すでに石が置かれていた』までは来た");
//     } else if (arrayRecord[i + (direction * sign)] != opponentColor) {
//         // console.log("隣接に『石がない か 自軍の石がある』までは来た");

//     } else {
//         if (arrayRecord[i + ((count * direction) * sign)] == opponentColor) {
//             count = count + 1;
//             // console.log("再起する");
//             flipStone(i, count, direction, sign, ownColor, opponentColor);
//         } else {
//             // console.log("とうとう『== opponentColor』に来た");
//             console.log("ひっくり返す作業に入る");
//             console.log("ひっくり返す石は" + (count - 1) + "つ");
//             // 石を打ったところ隣は敵軍の石である前提だけれども、１つ隣から検索していく
//             // console.log("最後の石" + (i + ((count * direction) * sign)) + "は" + ownColor + "なので")
//             console.log("最後の石" + (i + ((count * direction) * sign)) + "の" + arrayRecord[(i + ((count * direction) * sign))] + "は ＝ " + ownColor + "になるはずなので")

//             if (arrayRecord[i + ((count * direction) * sign)] == ownColor) {
//                 // 再起した数だけ石をひっくり返す
//                 for (let k = 1; k < count; k++) {
//                     arrayRecord[i + ((k * direction) * sign)] = ownColor;
//                     console.log("隣接する石" + (i + ((k * direction) * sign)) + "の" + opponentColor + "を" + ownColor + "にひっくり返す")
//                 }
//             }
//         }
//     }
// }


// // ---PART.9---パスする----------
// // 石を置く場所がない場合はパスになる

// function checkPass(count) {

//     const ArrayPass = document.querySelectorAll(".able");

//     if (ArrayPass.length == 0) {
//         // console.log("置くところがありません。パスしてください。");

//         // 自軍の石が置ける場所を探す
//         if (count % 2 === 0) {
//             document.querySelector("#noticeBlack3").textContent = "白の置くところがありません。パスになります。";
//             // console.log("黒が置ける場所を探す")
//             ableCheckBlack();
//         } else {
//             document.querySelector("#noticeBlack2").textContent = "黒の置くところがありません。パスになります。";
//             // console.log("白が置ける場所を探す")
//             ableCheckWhite();
//         }

//         console.log("『+1』をリターンする");
//         return 1;
//     } else {
//         return 0;
//     }
// }

// console.log(arrayRecord);


// // ---PART.10---勝敗を確かめる----------

// function checkWin() {
//     const arrayAble = document.querySelectorAll(".able");
//     const arrayInner = document.querySelectorAll(".inner");
//     const arrayBlack = document.querySelectorAll(".black");
//     const arrayWhite = document.querySelectorAll(".white");

//     // 現在の石の数を表示
//     document.querySelector("#noticeBlack1").textContent = "黒 " + arrayBlack.length;
//     document.querySelector("#noticeBlack1").style.fontSize = "60px";
//     document.querySelector("#noticeBlack4").textContent = "白 " + arrayWhite.length;
//     document.querySelector("#noticeBlack4").style.fontSize = "60px";



//     // (石が置けるマスが０ 且つ 空白のマスが０) または (黒石が０ または 白石が０)のとき
//     if ((arrayAble.length == 0 && arrayInner.length == 0) || (arrayBlack.length == 0 || arrayWhite.length == 0)) {
//         if (arrayBlack.length > arrayWhite.length) {
//             // console.log("黒の勝ち");
//             document.querySelector("#noticeBlack2").textContent = "黒の勝ち";
//             youwin();
//         } else if (arrayBlack.length < arrayWhite.length) {
//             // console.log("白の勝ち");
//             document.querySelector("#noticeBlack3").textContent = "白の勝ち";
//             youlose();

//         } else if (arrayBlack.length == arrayWhite.length) {
//             // console.log("引き分け");
//             document.querySelector("#noticeBlack2").textContent = "引き分け";
//             document.querySelector("#noticeBlack3").textContent = "引き分け";
//             draw();
//         } else {
//         }
//     } else {
//     }
// }


// // ---PART.11---演出----------

// // ---PART.11.1---youwin()
// // youwin();
// function youwin() {
//     squaresOpacity();

//     setTimeout(function () {
//         document.querySelector("#main").innertxte = "勝";
//     }, 9000);

//     setTimeout(youwin2, 10000);

//     function youwin2() {
//         headLine1(["あ", "な", "た", "の", "か", "ち", ""]);
//         console.log("headLine1が実行されるはず");
//     }

// }

// // ---PART.11.2---youlose()
// // youlose();
// function youlose() {
//     squaresOpacity();

//     setTimeout(youlose2, 10000);

//     function youlose2() {
//         headLine2(["あ", "な", "た", "の", "ま", "け", ""]);
//     }

// }

// // ---PART.11.3---draw()
// // draw();
// function draw() {
//     squaresOpacity();
//     document.querySelector("#main").textContent = "引き分け";
// }



// // ---PART.12---演出(arraySquare[i] を透明にしていく)----------

// // squaresOpacity();
// function squaresOpacity() {
//     // ここから↓が100回（i < 100）forループ
//     for (let i = 0; i < 100; i++) {
//         let counter = 0;

//         //          ここから↓が99回（counter > 99）100m秒毎に繰り返される
//         const timerId = setInterval(
//             function () {
//                 arraySquare[i].style.opacity = 1.0 - (0.01 * counter);
//                 counter++;
//                 console.log("カウンター" + counter);
//                 if (counter > 99) {
//                     clearInterval(timerId)
//                     console.log("clearIntervalが実行されました")
//                 }
//             }
//             , 100)
//         //           ここまで↑が99回（counter > 99）100m秒毎に繰り返される
//     }
//     // ここまで↑が100回（i < 100）forループ
// }




// //---PART.13---演出----------
// // 『headLine1』関数↓　　　.outerを["せ", "ん", "て", "ん", "す", "が"]ぐるぐる廻る;

// function headLine2(sentence) {

//     const array = sentence;
//     let counter = 0

//     const timerId = setInterval(
//         function () {
//             // for (let i = 0; i < 5 * 36; i++) {
//             const k = counter % 36;
//             const m = counter % 7;
//             const r = counter % 5;

//             const arrayBackColor = ["red", "pink", "aquamarine", "yellow", "powderblue"];
//             const arrayColor = ["yellow", "powderblue", "red", "pink", "aquamarine"];

//             arraySquare[arrayOuterIndex[k]].style.opacity = 0.0 + (0.006 * counter);
//             arraySquare[arrayOuterIndex[k]].textContent = array[m];
//             arraySquare[arrayOuterIndex[k]].style.backgroundColor = arrayBackColor[r];
//             arraySquare[arrayOuterIndex[k]].style.color = arrayColor[r];

//             // console.log("カウンター" + counter);
//             counter++;

//             if (counter > 180) {
//                 clearInterval(timerId)
//             }
//             // }
//         }, 150)
// }










// // headLine1();
// function headLine1() {


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






