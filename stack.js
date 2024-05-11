class Stack{
  constructor(){
    this.items = [];
    this.count = 0
  }
  push(element){
    this.items[this.count] = element;
    this.count++;
    console.log(`${element} added to ${this.count}`);
    return this.count - 1
  }

  pop(){
    if(this.count === 0 ){
      return undefined;
    }
    let deleteItem = this.items[this.count - 1];
    this.count--;
    console.log(`${deleteItem} removed`);
    return deleteItem
  }
  peek(){
    let peek = this.items[this.count - 1]
    console.log(`Top element is ${peek}`);
    return peek
  }
  size(){
    console.log(`size is ${this.count}`);
    return this.count
  }

}

const stack = new Stack();
stack.push(100)
stack.push(200)
stack.push(300)
stack.peek()
stack.pop()
