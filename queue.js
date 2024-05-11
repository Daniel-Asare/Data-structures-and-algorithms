class Queue{
  constructor(){
    this.item = [];
    this.rear = 0;
    this.front = 0;

  }
  enqueue(element){
    this.item[this.rear] = element;
    this.rear++;
    return this.count - 1;
  }
  dequeue(){
   const deleteItem = this.item[this.front];
   delete this.item[this.front];
   this.front++;
   return deleteItem;
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