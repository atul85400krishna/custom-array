function MyArray(){

    Object.defineProperty(this,'length',{
        value: 0,
        writable: true,
        enumerable: false
    })
    this.length = arguments.length;
    for(let i=0; i<arguments.length; i++){
        this[i] = arguments[i];
    }
}

let arr = new MyArray(1,5,4,8,9,3,4);
// console.log(Object.values(arr));


// Custom Functions of MyArray

// add an element at the end
MyArray.prototype.push = function(element){
    this[this.length] = element;
    this.length++;
}

// remove an element from the end
MyArray.prototype.pop = function(){
    delete this[this.length-1];
    this.length--;
}

//Should return the element at the last index.
MyArray.prototype.top = function(){
    return this[this.length-1];
}

// Should print the elements in a single line (e.g. [1,2,3,4,6])
MyArray.prototype.print = function(){
    console.log(Object.values(arr));
}
 
// print the elements in a single line in reverse order (e.g. [6,4,3,2,1])
MyArray.prototype.printReverse = function(){
    let arrReverse = [];
    for (let i=this.length-1; i>=0; i--){
        arrReverse.push(arr[i]);
    }
    console.log(Object.values(arrReverse));
}

// Should return the length of the stack
MyArray.prototype.size = function(){
    return this.length;
}


// Some operations of custom functions
arr.push(33); // .push()
console.log(Object.values(arr));

arr.pop(); // .pop()
console.log(Object.values(arr));

console.log(arr.top()); // .top()

arr.print(); // .print()

arr.printReverse(); // printReverse()

console.log(arr.size()); // .size()