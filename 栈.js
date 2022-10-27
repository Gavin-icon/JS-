class stack {
  constructor(){
    this.stack = []
  }
  addItem(value){
    this.stack.push(value)
  }
  delItem(){
    if(this.isEmpty()){
      console.log('栈空')
      return
    }
    let index = this.stack.pop()
    return index
  }
  size(){
    return this.stack.length
  }
  isEmpty(){
    return this.stack.length === 0
  }
}

class stack2 {
  constructor(){
    this.stack = {}
    this.count = 0
  }
  addItem(value){
    this.stack[this.count++] = value
  }
  delItem(){
    if(this.isEmpty()){
      console.log('栈空')
      return
    }
    const index = this.stack[this.count - 1]
    delete this.stack[--this.count]
    return index
  }
  size(){
    return this.stack.count
  }
  isEmpty(){
    return this.count === 0
  }
}
const s = new stack()
const s2 = new stack2()