/**
 * 防抖
 * @param {*} func 
 * @param {*} delay 
 * @returns 
 */
function debounce(func, delay){
  let timeout;
  return function() {
    let context = this;
    let args = [...arguments];
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(context, args)
    }, delay);
  }
}

/**
 * 节流
 * @param {*} func 
 * @param {*} delay 
 * @returns 
 */
function throttle(func, delay) {
  let previous = 0;
  return function(){
    let now = Date.now();
    let context = this;
    let args = [...arguments];
    if (now - previous > delay) {
      func.apply(context, args);
      previous = now;
    }
  }
}

/**
 * 节流
 * @param {*} func 
 * @param {*} delay 
 * @returns 
 */
function throttle_2(func, delay){
  let context = this;
  let args = [...arguments];
  let timeout;
  if (timeout) return;
  timeout = setTimeout(() => {
    func.apply(context, args);
    clearTimeout(timeout);
  }, delay);
}