Array.prototype.uniq = function() {
  let unique_arr = [];
  this.forEach(function(ele){
    if (unique_arr.includes(ele)) {

    } else {
      unique_arr.push(ele);
    };
  });
  return unique_arr;
};

Array.prototype.twoSum = function() {
  let zero_array = [];
  for(let i = 0; i < this.length - 1; i++) {
    for(let j = i+1; j < this.length; j++) {
      if ((this[i] + this[j]) === 0) {
        zero_array.push([i, j]);
      };
    };
  };
  return zero_array;
};

Array.prototype.transpose = function() {
  let transposer = [];
  for (let i = 0; i < this[0].length; i++) {
    transposer.push([]);
  };

  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this[i].length; j++) {
      transposer[j][i] = this[i][j]
    }
  }
  
  return transposer;
};
