// Let's try to implement our own Hash table with Boilerplate code provided and gonna do
// Set and get method

// Created on my own
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  count = 0;

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    const hashKey = this._hash(key);
    const keyPair = [hashKey, value];
    this.data[this.count] = keyPair;
    this.count++;
  }
  show() {
    return this.data;
  }

  length(){
    return this.data.length
  }
  findIndex(key){
    for(let i =0; i < this.data.length; i++){
      let insideArray = this.data[i];
      if(insideArray[0]== this._hash(key)){
        return i;
      }
    }
  }
  get(key) {
    for (let i = 0; i < this.data.length; i++) {
      let checkArray = this.data[i];
      let hashKey = this._hash(key);
      if (checkArray[0] == hashKey) {
        return checkArray[1];
      } else {
        return undefined;
      }
    }
  }
  key(){
    // for(let i=0; i < this.data.length; i++){
    //   return this.data[i]; will return only one time we can store this values one by one in another 
    // empty array and return it or can use map whih won't eidt the orginal array and return updated array
    // }
    return this.data.map(item => item[0]);
  }

  values(){
    return this.data.map(item => item[1]);
  }
}

const myHashtable = new HashTable(50);

myHashtable.set("Sharan", "Gayu");
myHashtable.set("Tony", "Shivu");
myHashtable.set("Billu", "Priya");
console.log(myHashtable.get("Tony"));
console.log(myHashtable.length())
console.log(myHashtable.findIndex("Billu"));
console.log(myHashtable.show());
console.log(myHashtable.key());
console.log(myHashtable.values());
