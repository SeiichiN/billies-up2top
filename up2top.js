// up2top.js
// https://spiderwebs.tokyo/scroll-top-button/

'use strict';

// up2top_btn オブジェクトの作成
const up2top_btn = String()
                 + '<div id="up2top-btn" class="gs-reveal">'
                 + '<img src="/wp-content/plugins/billies-up2top/up2top.png" alt="">'
                 + '</div>';

// up2top_btn を <main>要素の下(<footer>要素の上) に設置。
const main = document.querySelector('main');
main.insertAdjacentHTML('afterend', up2top_btn);

// 画面の高さ分以上スクロールしたら、up2topボタンが表示される。
setInterval( function() {
  const up2top_button = document.getElementById('up2top-btn');
  const currentYPos = window.pageYOffset; // 現在のスクロール量
  const winHeight = window.innerHeight;   // ブラウザの表示高さ
  if (currentYPos > winHeight) {
    up2top_button.style.opacity = 1;
    // up2top_button.style.display = "block";
  } else {
    up2top_button.style.opacity = 0;
    // up2top_button.style.display = "none";
  }
}, 1000);


/**
 * @param1: elem string -- id名
 * @param2: duration int -- TOPに到達するまでの時間。
 *                500 = 500ms = 0.5sec
 */
const scrollTop = function (elem, duration) {
  const target = document.getElementById(elem);

  target.addEventListener('click', function() {
    // 現在のスクロール量
    let currentY = window.pageYOffset;
    // console.log('currentY:', currentY);
    // step -- 一回スクロールする量。
    // 距離が短い場合、10pxずつスクロール。
    // 距離が長い場合、100pxずつスクロール。
    const step = duration / currentY > 1 ? 10 : 100;
    // duration / currentY -- 1px動くのに何秒かかるか。
    // timeStep -- 一回スクロールするのに何秒かかるか。
    const timeStep = duration / currentY * step;

    const scrollUp = function () {
      currentY = window.pageYOffset;
      if (currentY === 0) {
        clearInterval(intervalID);
      } else {
        // 指定された量だけスクロールする
        // マイナスの場合は、上へスクロール
        scrollBy(0, -step);
      }
    };

    // setInterval -- timeStep秒ごとにscrollUpをおこなう。
    const intervalID = setInterval(scrollUp, timeStep);
  });
}

scrollTop('up2top-btn', 500);


// 修正時刻: Mon Aug 16 21:34:35 2021
