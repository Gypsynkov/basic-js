module.exports = function transform( arr ) {
    let resArr = [];
    if(Array.isArray(arr)){
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === '--discard-next'){
       i++;
     } else if(arr[i] === '--discard-prev'){
     resArr.pop();
     } else if(arr[i] === '--double-next'){
     resArr.push(arr[i + 1]);
    } else if(arr[i] === '--double-prev'){
     resArr.push(arr[i - 1]);
     } else {
      resArr.push(arr[i]);}
        };
    } else {
        throw new Error();
    }
    return resArr.filter(e => e !== undefined);
};
