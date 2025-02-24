// Let's try to implement our own Hash table with Boilerplate code provided and gonna do
// Set and get method

class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
     count = 0;
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
    set(key,value){
        const hashKey = this._hash(key);
        const keyPair = [hashKey,value];
        this.data[this.count]= keyPair;
        this.count++
    }
    show(){
        console.log(this.data);
    }
    get(key){
        for(let i=0; i< this.data.length; i++){
            let checkArray = this.data[i];
            let hashKey = this._hash(key);
            if(checkArray[0] == hashKey ){
                return checkArray[1];
            }
            else{
                return "undefined"
            }
        }
    }
  }
  
  const myHashTable = new HashTable(50);
  myHashTable.set('grapes', 10000);
//   console.log(myHashTable.show());
  console.log(myHashTable.get('grapes'));
//   myHashTable.set('apples', 9)
//   myHashTable.get('apples');

