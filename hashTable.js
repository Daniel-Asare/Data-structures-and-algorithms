class Hashtable{
  constructor(size){
    this.table = new Array(size);
    this.size = size
  }

  hash(key){
    let arrIndex = 0;
    for(let i = 0; i < key.length; i++){
      arrIndex += key.charCodeAt(i)
    }

    return arrIndex % this.size;
  }

  set(key,value){
    const index = this.hash(key);
    this.table[index] = value;
  }

  get(key){
    const index = this.hash(key);
    return this.table[index]
  }

  remove(key){
    const index = this.hash(key);
    this.table[index] = undefined;
  }

  display(){
    for(let i = 0; i < this.table.length;i++){
      console.log(i,this.table[i]);
    }
  }
}

const hashTable = new Hashtable(50);
hashTable.set("name","Daniel")
hashTable.set("age",29)
hashTable.display()