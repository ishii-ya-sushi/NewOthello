
// Stageオブジェクトを作成します。表示リストのルートになります。
// stage = new createjs.Stage("myCanvas");

// パーティクルシステム作成します。
// particleSystem = new particlejs.ParticleSystem();

// パーティクルシステムの描画コンテナーを表示リストに登録します。
// stage.addChild(particleSystem.container);


const start = {
    "bgColor": "#00000",
    "width": 1280,
    "height": 720,
    "emitFrequency": 300,
    "startX": 640.0,
    "startXVariance": 0,
    "startY": 360.0,
    "startYVariance": 0,
    "initialDirection": 360,
    "initialDirectionVariance": 360,
    "initialSpeed": 40,
    "initialSpeedVariance": 2.6,
    "friction": 0.0235,
    "accelerationSpeed": 0,
    "accelerationDirection": 360,
    "startScale": 0,
    "startScaleVariance": 0.08,
    "finishScale": 1,
    "finishScaleVariance": 0.19,
    "lifeSpan": "150",
    "lifeSpanVariance": "120",
    "startAlpha": 0.15,
    "startAlphaVariance": "0",
    "finishAlpha": 1,
    "finishAlphaVariance": 0.76,
    "shapeIdList": [
        "circle"
    ],
    "startColor": {
        "hue": 92,
        "hueVariance": "32",
        "saturation": "91",
        "saturationVariance": 0,
        "luminance": 89,
        "luminanceVariance": 0
    },
    "blendMode": true,
    "alphaCurveType": "1",
    "VERSION": "1.0.0"
};

const bubble = {
    "bgColor": "#00000",
    "width": 1280,
    "height": 720,

    "emitFrequency": "100",
    "startX": 640.0,
    "startXVariance": 1280,
    "startY": 540.0,
    "startYVariance": "222",
    "initialDirection": "0",
    "initialDirectionVariance": "360",
    "initialSpeed": "2",
    "initialSpeedVariance": "3.7",
    "friction": "0.038",
    "accelerationSpeed": "0.13",
    "accelerationDirection": "273.3",
    "startScale": 1,
    "startScaleVariance": 0.79,
    "finishScale": "0",
    "finishScaleVariance": "0",
    "lifeSpan": "50",
    "lifeSpanVariance": "196",
    "startAlpha": "1",
    "startAlphaVariance": "0",
    "finishAlpha": "0.35",
    "finishAlphaVariance": 0.5,
    "shapeIdList": [
        "blur_circle",
        "circle"
    ],
    "startColor": {
        "hue": 312,
        "hueVariance": "55",
        "saturation": "71",
        "saturationVariance": "78",
        "luminance": "83",
        "luminanceVariance": "16"
    },
    "blendMode": true,
    "alphaCurveType": "1"
}

const circle = {
    "bgColor": "#00000",
    "width": 1280,
    "height": 720,
    "emitFrequency": "200",
    // "startX": 640.0,
    "startX": 640.0,
    "startXVariance": 0,
    "startY": 360.0,
    "startYVariance": 0,
    "initialDirection": 0,
    "initialDirectionVariance": 360,
    "initialSpeed": 19.6,
    "initialSpeedVariance": 3.1,
    "friction": 0.0575,
    "accelerationSpeed": 0,
    "accelerationDirection": 360,
    "startScale": 0,
    "startScaleVariance": 0,
    "finishScale": 1,
    "finishScaleVariance": 1,
    "lifeSpan": "136",
    "lifeSpanVariance": "27",
    "startAlpha": 0,
    "startAlphaVariance": "0",
    "finishAlpha": 1,
    "finishAlphaVariance": 1,
    "shapeIdList": [
        "blur_circle"
    ],
    "startColor": {
        "hue": "17",
        "hueVariance": "32",
        "saturation": "91",
        "saturationVariance": 0,
        "luminance": "56",
        "luminanceVariance": "16"
    },
    "blendMode": true,
    "alphaCurveType": "1",
    "VERSION": "1.0.0"
}

const fireBall = {
    "bgColor": "#00000",
    "width": 1280,
    "height": 720,
    "emitFrequency": 300,
    "startX": 200,
    "startXVariance": "0",
    "startY": 260,
    "startYVariance": "0",
    "initialDirection": 315,
    "initialDirectionVariance": 360,
    "initialSpeed": 2.1,
    "initialSpeedVariance": 6.6,
    "friction": 0.15,
    "accelerationSpeed": 0,
    "accelerationDirection": 315,
    "startScale": 0.11,
    "startScaleVariance": 0.33,
    "finishScale": 0.16,
    "finishScaleVariance": 0.02,
    "lifeSpan": "40",
    "lifeSpanVariance": "0",
    "startAlpha": "1",
    "startAlphaVariance": "0",
    "finishAlpha": "1",
    "finishAlphaVariance": "0",
    "shapeIdList": [
        "blur_circle"
    ],
    "startColor": {
        "hue": "17",
        "hueVariance": "32",
        "saturation": "100",
        "saturationVariance": "45",
        "luminance": "56",
        "luminanceVariance": "19"
    },
    "blendMode": true,
    "alphaCurveType": "0",
    "VERSION": "1.0.0"
}

const commetL = {

    "bgColor": "#00000",
    "width": 1280,
    "height": 720,

    "emitFrequency": 300,
    "startX": 1200,
    "startXVariance": 0,
    "startY": 60,
    "startYVariance": 0,
    "initialDirection": 0,
    "initialDirectionVariance": 360,
    "initialSpeed": 0,
    "initialSpeedVariance": 0,
    "friction": 0,
    "accelerationSpeed": 0,
    "accelerationDirection": 315,
    "startScale": 0,
    "startScaleVariance": 0,
    "finishScale": 0,
    "finishScaleVariance": 0,
    "lifeSpan": 120,
    "lifeSpanVariance": 99,
    "startAlpha": "1",
    "startAlphaVariance": "0",
    "finishAlpha": "0",
    "finishAlphaVariance": 0.5,
    "shapeIdList": [
        "blur_circle"
    ],
    "startColor": {
        "hue": "17",
        "hueVariance": "32",
        "saturation": "91",
        "saturationVariance": 0,
        "luminance": "56",
        "luminanceVariance": "16"
    },
    "blendMode": true,
    "alphaCurveType": "1",
    "VERSION": "1.0.0"
}

const firewall = {
    "bgColor": "#00000",
    "width": 1280,
    "height": 720,
    "emitFrequency": 300,
    "startX": 620,
    "startXVariance": 1480,
    "startY": 600,
    "startYVariance": 0,
    "initialDirection": 90,
    "initialDirectionVariance": 90,
    "initialSpeed": 0,
    "initialSpeedVariance": 0,
    "friction": 0.0,
    "accelerationSpeed": 0,
    "accelerationDirection": 270,
    "startScale": 0,
    "startScaleVariance": 0,
    "finishScale": 0,
    "finishScaleVariance": 0,
    "lifeSpan": 160,
    "lifeSpanVariance": 160,
    "startAlpha": "1",
    "startAlphaVariance": "0",
    "finishAlpha": "0",
    "finishAlphaVariance": 0.5,
    "shapeIdList": [
        "blur_circle"
    ],
    "startColor": {
        "hue": "17",
        "hueVariance": "32",
        "saturation": "91",
        "saturationVariance": 0,
        "luminance": "56",
        "luminanceVariance": "16"
    },
    "blendMode": true,
    "alphaCurveType": "1",
    "VERSION": "1.0.0"
}


























// Particle Developから保存したパラメーターを反映します。
// particleSystem.importFromJson(

    // JSONテキストのコピー＆ペースト ここから-- 

    // start

    // circle

    // bgscreen

    // commetL

    // fire



    // JSONテキストのコピー＆ペースト ここまで--
// );



// フレームレートの設定
// createjs.Ticker.framerate = 60;
// 定期的に呼ばれる関数を登録
// createjs.Ticker.on("tick", handleTick);


// function handleTick() {
    // パーティクルの発生・更新
    // particleSystem.update();

    // 描画を更新する
    // stage.update();

// }




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
  // particleSystem.initialSpeed = 2.1,           // 初期速度(px)
  // particleSystem.initialSpeedVariance = 6.6,   // 初期速度のばらつき
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
