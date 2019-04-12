function range(small, big) {
  if (small === big) { return [big] };

  let new_arr = [small];

  return new_arr.concat(range(small + 1,big));
};

// console.log(range(13, 19));

function sumRec(arr) {
  if (arr.length === 1) { 
    return arr[0];
  };

  return arr[0] + sumRec(arr.slice(1));
};

console.log(sumRec(range(13, 19)));