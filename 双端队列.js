class Queue {
  constructor() {
    this.queue = {}
    this.head = 0
    this.count = 0
  }
  // 首
  addFront(item) {
    this.queue[--this.head] = item
  }
  delFront() {
    if (this.isEmpty()) {
      console.log('队列为空')
      return;
    }
    const HeadData = this.queue[this.head]
    delete this.queue[this.head++]
    return HeadData
  }
  getFront() {
    if (this.isEmpty()){
      return
    }
    return this.queue[this.head]
  }
  // 尾
  addBack(item) {
    this.queue[this.count++] = item
  }
  delBack() {
    if (this.isEmpty()) {
      console.log('队列为空')
      return;
    }
    const BackData = this.queue[this.count-1]
    delete this.queue[--this.count]
    return BackData
  }
  getBack() {
    if (this.isEmpty()){
      return
    }
    return this.queue[this.count-1]
  }
  isEmpty() {
    return this.size() === 0
  }
  size() {
    return this.count - this.head
  }
}

const q = new Queue()