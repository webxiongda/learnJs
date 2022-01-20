// 防抖前后  百度搜索框点击防抖
function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait)
      if (callNow) func.apply(this, arguments)
    } else {
      timeout = setTimeout(function () {
        func.apply(this, arguments)
      }, wait);
    }
  }
}

// 节流前后  窗口缩放大小事件   滚动条滑动事件
function throttle(func, wait, immediate) {
  let timeout;
  return function () {
    if (!timeout) {
      if (immediate) {
        func.apply(this, arguments)
        timeout = setTimeout(function () {
          timeout = null;
        }, wait)
      } else {
        timeout = setTimeout(function () {
          timeout = null;
          func.apply(this, arguments)
        }, wait)
      }
    }
  }
}

