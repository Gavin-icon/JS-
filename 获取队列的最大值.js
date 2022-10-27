var MaxQueue = function() {
  this.queue = {}
  this.headQ = 0
  this.countQ = 0

  // dqueue存放值从大到小排列
  this.dqueue = {}
  this.headD = 0
  this.countD = 0
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
  if (this.isDqueueEmpty()){
    return -1;
  }
  return this.dqueue[0]
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
  this.queue[this.countQ++] = value
  while(!this.isDqueueEmpty() && value > this.dqueue[this.countD - 1]){
    delete this.dqueue[--this.countD]
  }
  this.dqueue[this.countD++] = value
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
  if (this.isQueueEmpty()){
    return -1;
  }
  if (this.queue[this.headQ] === this.dqueue[this.headD]){
    delete this.dqueue[this.headD++]
  }
  const frontData = this.queue[this.headQ]
  delete this.queue[this.headQ++]
  return frontData
};


MaxQueue.prototype.isDqueueEmpty = function() {
  return !(this.countD - this.headD)
}
MaxQueue.prototype.isQueueEmpty = function() {
  return !(this.countQ - this.headQ)
}
/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */