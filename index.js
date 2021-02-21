// 缓动动画
function animate1(ele, obj, fn) {
  clearInterval(ele.timerId)
  ele.timerId = setInterval(() => {
    var flag = true
    for (var k in obj) {
      var attr = k;
      var target = obj[k]
      let current = window.getComputedStyle(ele, null)[attr];
      current = parseInt(current)
      let step = (target - current) / 5
      step = step > 0 ? Math.ceil(step) : Math.floor(step)
      ele.style[attr] = current + step + 'px'
      if (current != target) {
        flag = false
      }
    }
    if (flag) {
      clearInterval(ele.timerId)
      fn && fn()
    }
  }, 30);
}

// 匀速动画
function animate2(ele, obj, fn) {
  clearInterval(ele.timerId)
  ele.timerId = setInterval(() => {
    for (var k in obj) {
      var attr = k;
      var target = obj[k]
      let current = window.getComputedStyle(ele, null)[attr];
      current = parseInt(current)
      let step = target > current ? 10 : -10
      if (Math.abs(target - current) > Math.abs(step)) {
        ele.style[attr] = current + step + 'px'
      } else {
        clearInterval(ele.timerId)
        ele.style[attr] = target + 'px'
        fn && fn()
      }
    }
  }, 0);
}