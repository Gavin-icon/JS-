/*
  队列、双端队列
*/

/**
 * @param {number[]} nums [5,3,1,0,4,6,2] [3,6,2,1,5,4]
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
  if (k<=1){
    return nums
  }

  /* 双端队列 */
  let dqueue = []

  // 输出result
  let result = []

  // 将nums第一个值存到queue中，我们要找最大值，如果是递减，加进去，如果是递增，队尾删除元素
  dqueue.push(nums[0])
  // 创建滑动窗口，
  let i = 1
  for (; i<k;i++){
    while(dqueue.length && nums[i] > dqueue[dqueue.length - 1]){
      dqueue.pop()
    }
    dqueue.push(nums[i])
  }
  result.push(dqueue[0]) //第一阶段k循环，输出第一个最大值

  for(; i<nums.length;i++){
    while(dqueue.length && nums[i] > dqueue[dqueue.length - 1]){
      dqueue.pop()
    }
    dqueue.push(nums[i])
    // 判断双端队列的最大值 是否 在滑动窗口外，在删除
    if (dqueue[0] === nums[i-k]) {
      dqueue.shift()
    }
    result.push(dqueue[0])
  }
  return result;
};