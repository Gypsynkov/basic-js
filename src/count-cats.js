module.exports = function countCats( matrix ) {
  let arr = [];
  let res = [];
  let count = 0;
  arr = matrix.flat().join().split(',');
    for(let i =0; i<arr.length; i++){
    if(arr[i] == '^^'){
res.push(arr[i]);


    }
  }
return res.length;
};

