// ------p_fireBall()------------------------------------------------------------

function p_fireBall(x, y, attacker) {

  // document.getElementById("noticeBlack1").classList.add("pause");
  // document.getElementById("noticeBlack5").classList.add("pause");
  // document.getElementById("scoreBlack1").classList.add("pause");
  // document.getElementById("scoreBlack5").classList.add("pause");

  const effectName = arreyJson[3];

  p_e_fireBall(x, y, attacker, effectName);
}

function p_e_fireBall(x, y, attacker, effectName) {
  // リスナーを全部削除してタイマを止める
  createjs.Ticker.reset();
  // カウントを０にする
  count = 0;

  // Stageオブジェクトを作成します。表示リストのルートになります。
  stage = new createjs.Stage("myCanvas");

  // パーティクルシステム作成します。
  particleSystem = new particlejs.ParticleSystem();

  // パーティクルシステムの描画コンテナーを表示リストに登録します。
  stage.addChild(particleSystem.container);

  // Particle Develop( http://ics-web.jp/projects/particle-develop/ ) から書きだしたパーティクルの設定を読み込む
  particleSystem.importFromJson(
    // パラメーターJSONのコピー＆ペースト ここから--
    // effectName

    // arreyJson[3]
    fireBall

    // パラメーターJSONのコピー＆ペースト ここまで---
  );

  // フレームレートの設定
  createjs.Ticker.framerate = 60;
  // requestAnimationFrameに従った呼び出し
  createjs.Ticker.timingMode = createjs.Ticker.RAF;

  // 定期的に呼ばれる関数を登録
  createjs.Ticker.addEventListener("tick", handleTick_fireBall);
}

function handleTick_fireBall() {

  count++;
  console.log("カウントは" + count);

  // 時間経過によって基準値を変化させる

  // particleSystem.bgColor = "#00000",
  // particleSystem.width = 1280,
  // particleSystem.height = 720,
  // particleSystem.emitFrequency = 300, // 1秒あたりの発生数(個 / 秒)
  // particleSystem.startX = 1200,
  // particleSystem.startXVariance = "0",        // 発生位置 - X座標のばらつき(px)
  // particleSystem.startY = 60,
  if (600 < count && count < 1000) {
    particleSystem.startX += 45;
    particleSystem.startY += 15;
  }


  // particleSystem.startYVariance = "0",        // 発生位置 - Y座標のばらつき(px)
  // particleSystem.initialDirection = 315,      // 初期速度 - 方向(度)
  // particleSystem.initialDirectionVariance = 360, // 初期速度 - 方向のばらつき(度)
  // particleSystem.initialSpeed = 2.1,          // 初期速度(px)
  // particleSystem.initialSpeedVariance = 6.6,  // 初期速度のばらつき


  // particleSystem.friction = 1.0,             // 摩擦


  if (count < 600) {
    particleSystem.friction -= 0.001;
    // particleSystem.friction += 0.004;
  } else if (600 < count && count < 1000) {
    particleSystem.friction += 0.03;
  }


  // particleSystem.accelerationSpeed = 0,       // 重力
  // particleSystem.accelerationDirection = 315, // 重力方向(度)
  // particleSystem.startScale = 0.11,           // 開始時のスケール
  // particleSystem.startScaleVariance = 0.33,   // 開始時のスケールのばらつき
  // particleSystem.finishScale = 0.16,          // 終了時のスケール
  // particleSystem.finishScaleVariance = 0.02,  // 終了時のスケールのばらつき
  // particleSystem.lifeSpan = "40",             // ライフ(フレーム数)
    // particleSystem.lifeSpanVariance = "0",      // ライフのばらつき(フレーム数)
    // "startAlpha = "1",
    // "startAlphaVariance = "0",
    // "finishAlpha" = "1",
    // "finishAlphaVariance = "0",
    // "shapeIdList": [
    // "blur_circle"
    // ],
    // "startColor": {
    // "hue": "17",
    // "hueVariance": "32",
    // "saturation": "100",
    // "saturationVariance": "45",
    // "luminance": "56",
    // "luminanceVariance": "19"
    // },
    // "blendMode": true,
    // "alphaCurveType": "0",
    // "VERSION": "1.0.0"


    // パーティクルの発生・更新
    particleSystem.update();

  // 描画を更新する
  stage.update();
}











// --------パラメータ--------------------------------------------

  // particleSystem.bgColor = "#00000",
  // particleSystem.width = 1280,
  // particleSystem.height = 720,
  // particleSystem.emitFrequency = 300,          // 1秒あたりの発生数     (1-300個 / 秒)
  // particleSystem.startX = 1200,                // 発生位置 - X座標のばらつき(px)
  // particleSystem.startXVariance = "0",         // 発生位置 - X座標のばらつき(px)
  // particleSystem.startY = 60,                  // 発生位置 - Y座標(px)
  // particleSystem.startYVariance = "0",         // 発生位置 - Y座標のばらつき(px)
  // particleSystem.initialDirection = 315,         // 初期速度 - 方向          (0-360度)
  // particleSystem.initialDirectionVariance = 360, // 初期速度 - 方向のばらつき(0-360度)
  // particleSystem.initialSpeed = 2.1,             // 初期速度                 (0-40.0px)
  // particleSystem.initialSpeedVariance = 6.6,     // 初期速度のばらつき       (0-20.0)
  // particleSystem.friction = 0.19,              // 摩擦         (0.00-0.15)
  // particleSystem.accelerationSpeed = 0,        // 重力         (0.00-4.00)
  // particleSystem.accelerationDirection = 315,  // 重力方向(度) (0-360度)
  // particleSystem.startScale = 0.11,            // 開始時のスケール          (0.00-1.00)
  // particleSystem.startScaleVariance = 0.33,    // 開始時のスケールのばらつき(0.00-4.00)
  // particleSystem.finishScale = 0.16,           // 終了時のスケール          (0.00-1.00)
  // particleSystem.finishScaleVariance = 0.02,   // 終了時のスケールのばらつき(0.00-4.00)
  // particleSystem.lifeSpan = "40",              // ライフ(フレーム数)           (0-500)
  // particleSystem.lifeSpanVariance = "0",       // ライフのばらつき(フレーム数) (0-500)
  // "startAlpha = "1",                           // 開始時の透明度            (0.00-1.00)
  // "startAlphaVariance = "0",                   // 開始時の透明度のばらつき  (0.00-1.00)
  // "finishAlpha" = "1",                         // 終了時の透明度            (0.00-1.00)
  // "finishAlphaVariance = "0",                  // 終了時の透明度のばらつき  (0.00-1.00)
  // "shapeIdList": [
  // "blur_circle"
  // ],
  // "startColor": {
  // "hue": "17",
  // "hueVariance": "32",
  // "saturation": "100",
  // "saturationVariance": "45",
  // "luminance": "56",
  // "luminanceVariance": "19"
  // },
  // "blendMode": true,
  // "alphaCurveType": "0",
  // "VERSION": "1.0.0"

// ----------------------------------------------------
