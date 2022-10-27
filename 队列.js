// @params 数组形式
class queue {
  constructor(){
    this.queue = []
  }
  addItem(value) {
    this.queue.push(value)
  }
  delItem(){
    if(this.isEmpty()){
      console.log('队列为空')
      return
    }
    this.queue.shift()
  }
  isEmpty(){
    return this.queue.length===0
  }
  size(){
    return this.queue.length
  }
}

// @params 数组形式
class dQueue {
  constructor(){
    this.dQueue = {}
    this.head = 0
    this.count = 0
  }
  addItem(value) {
    this.dQueue[this.count++] = value
  }
  delItem(){
    if(this.isEmpty()){
      console.log('队列为空')
      return
    }
    delete this.dQueue[this.head++]
    this.count--
  }
  isEmpty(){
    return this.count === 0
  }
  size() {
    return this.count
  }
}

const q = new queue()
const dq = new dQueue()
