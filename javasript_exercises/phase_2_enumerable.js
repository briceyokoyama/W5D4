Array.prototype.myEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i]);
  };
};

let square = function(num) {
  return num*num;
};

// x = [1, 2, 3];
// x.myEach(square)

Array.prototype.myMap = function(callback) {
  let mapped_arr = [];

  this.myEach((ele) => {
    mapped_arr.push(callback(ele));
  });

  return mapped_arr;
};

// x = [1, 2, 3];
// x.myMap(square)

Array.prototype.myReduce = function(callback, acc) {
  
  copy_array = this.slice();
  acc = acc || copy_array.shift();

  copy_array.myEach(ele => { 
    acc = callback(acc, ele);
  })

  return acc
};

let sum = function(acc, ele) {
  return acc + ele;
}

// x = [1, 2, 3, 4, 5];
// console.log(x.myReduce(sum, 10))