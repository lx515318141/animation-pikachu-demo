!function() {
  let duration = 20;
  $(".actions").on("click", "button", function(e) {
    let $button = $(e.currentTarget);
    let speed = $button.attr("data-speed");
    console.log(speed);
    $button
      .addClass("active")
      .siblings(".active")
      .removeClass("active");
    switch (speed) {
      case "slow":
        duration = 200;
        break;
      case "normal":
        duration = 50;
        break;
      case "fast":
        duration = 10;
        break;
    }
  });
  function writeCode(perfix, code, fn) {
    let container = document.querySelector("#code");
    let styleTag = document.querySelector("#styleTag");
    let n = 0;
    let id 
    id = setTimeout(function run() {
    // 用setTimeout实现setInterval的功能，且setTimeout可以调速，且更好控制
      n += 1;
      container.innerHTML = code.substring(0, n);
      styleTag.innerHTML = code.substring(0, n);
      container.scrollTop = container.scrollHeight;
      if (n < code.length) {
        id = setTimeout(run, duration);
      } else {
        fn && fn.call();
      }
    }, duration);
  }
  let code = `
      /*
       *首先画皮卡丘的皮
       */
      .preview {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgb(255, 230, 0);
      }
      .wrapper {
        height: 192px;
        width: 100%;
        position: relative;
      }
      /*
      *然后画皮卡丘的鼻子
      */
      .nose {
        height: 0px;
        width: 0px;
        border-radius: 50%;
        border: 10px;
        border-style: solid;
        border-width: 10px 13px;
        border-color: black transparent transparent transparent;
        /* 让元素宽高为0，再让加一个较粗的border-radius，既可以得到一个圆形 */
        /* 再用border-color给border的四个边不同的颜色，就可以得到四个扇形，顺序为上右下左
        通过设置transparent(透明)来得到不同方向的扇形 */
        position: absolute;
        top: 27px;
        left: 50%;
        /* 使用left50%的时候其实是该元素的左边线距离父元素左边50%，所有不是完全居中 */
        margin-left: -13px;
        /* 所有需要让该元素再往左边移动自身宽度的一半，也可以使用transform：translateX(-50%),此方法与上一行代码等价 */
      }
      /*
      *再画皮卡丘的眼睛
      */
      .eye {
        height: 53px;
        width: 53px;
        background: rgb(46, 46, 46);
        position: absolute;
        border-radius: 50%;
        border: 3px solid #000000;
      }
      .eye::before {
        content: "";
        display: block;
        position: absolute;
        height: 25px;
        width: 25px;
        border-radius: 50%;
        border: 3px solid #000000;
        background: white;
        left: 7px;
        top: -1px;
      }
      /*
      *将眼睛放到正确位置
      */
      .eye.left {
        right: 50%;
        margin-right: 90px;
      }
      .eye.right {
        left: 50%;
        margin-left: 90px;
      }
      /*
      *再画皮卡丘的脸
      */
      .face {
        height: 72px;
        width: 72px;
        background: rgb(255, 0, 0);
        position: absolute;
        border-radius: 50%;
        border: 3px solid #000000;
        top: 90px;
      }
      /*
      *将脸放在正确位置
      */
      .face.left {
        right: 50%;
        margin-right: 134px;
      }
      .face.right {
        left: 50%;
        margin-left: 134px;
      }
      /*
      *接下来画皮卡丘的上嘴唇
      */
      .upperLip {
        height: 18px;
        width: 70px;
        border: 3px solid #000000;
        position: absolute;
        z-index: 1;
        background: rgb(255, 230, 0);
        top: 54px;
      }
      .upperLip.left {
        border-top: none;
        border-right: none;
        border-bottom-left-radius: 40px 20px;
        transform: rotate(-25deg);
        right: 50%;
        margin-right: -1px;
        box-shadow: -14px -16px rgb(255, 230, 0);
      }
      .upperLip.right {
        border-top: none;
        border-left: none;
        border-bottom-right-radius: 40px 20px;
        transform: rotate(25deg);
        left: 50%;
        margin-left: -1px;
        box-shadow: 9px -16px rgb(255, 230, 0);
      }
      /*
      *最后画皮卡丘的下嘴唇及舌头
      */
      .lowerLip-wrapper {
        position: absolute;
        left: 50%;
        margin-left: -100px;
        bottom: 0px;
        height: 138px;
        width: 200px;
        overflow: hidden;
      }
      .lowerLip {
        width: 200px;
        height: 702px;
        background: rgb(155, 0, 10);
        border: 3px solid #000000;
        border-bottom-left-radius: 104px 702px;
        border-bottom-right-radius: 104px 702px;
        position: absolute;
        bottom: 0px;
        overflow: hidden;
      }
      .lowerLip::after {
        content: "";
        bottom: -100px;
        position: absolute;
        height: 200px;
        width: 200px;
        background: rgb(255, 72, 95);
        border-radius: 100px/100px;
        left: 50%;
        margin-left: -100px;
      }
      /*
      *现在皮卡丘画好了
      */
      `;
  writeCode("", code);
}.call();
