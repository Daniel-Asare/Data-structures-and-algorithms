class Queue{
  constructor(){
    this.item = [];

  }
  enqueue(element){
    this.item.push(element)
  }
  dequeue(){
   return this.item.shift()
  }
  isEmpty(){
    return this.item.length === 0
  }
  peak(){
    if(!this.isEmpty()){
      return this.item[0]
    }
  }
}

const queue = new Queue();
queue.enqueue()