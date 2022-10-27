/**
 * @param {number[]} temperatures [73,74,75,71,69,72,76,73]
 * @return {number[]}
 */
 function dailyTemperatures(T) {
  // 存放栈顶元素
  let stack = [0]
  let stack_len = 1

  let len = T.length
  let arr = new Array(len).fill(0)

  for(var i = 1; i<len; i++){
    let temper = T[i]
    while(stack_len && temper > T[stack[stack_len - 1]]){
      let index = stack.pop()
      stack_len--
      arr[index] = i - index
    }
    stack.push(i)
    stack_len++
  }
  return arr;
}