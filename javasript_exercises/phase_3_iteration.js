Array.prototype.bubbleSort = function (callback) {
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (callback(this[i], this[j]) === 1) {
          [this[i], this[j]] = [this[j], this[i]];
          sorted = false;
        }
      }
    }
  };


  return this;
}

let simple = function (ele1, ele2) {
  if (ele1 > ele2) {
    return 1
  }
  return -1;
}

// x = [1006, 12, 300, 45, 5];
// console.log(x.bubbleSort(simple))

String.prototype.substrings = function() {
  let substrings = [];

  for(let i = 0; i < this.length; i++) {
    for(let j = i + 1; j <= this.length; j++) {
      substrings.push(this.slice(i,j));
    };
  };

  return substrings;
};

console.log("jinfullionaire".substrings());