/**
 * Initialize your data structure here.
 * @param {number} size
 */
// console.log(getAverageList([1,2,3,4],2))

function getAverageList(nums,size) {
  let res = []
  let queue = []

  queue.push(nums[0])
  // 输出第一个size窗口的平均值
  let i = 1
  for(; i<size;i++){
    queue.push(nums[i])
  }

  let avaerage = getAverage(queue);
  res.push(avaerage)

  for(; i<nums.length;i++){
    queue.shift()
    queue.push(nums[i])
    let average = getAverage(queue)
    res.push(average)
  }
  return res;
}

function getAverage(queue) {
    // 计算queue平均值
    let sum = 0
    let avaerage = 0
    for(var k=0; k<queue.length; k++){
      sum+=queue[k]
    }
    avaerage = sum / queue.length
    return avaerage;
}
/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */