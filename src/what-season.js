module.exports = function getSeason( date ) {
  let realDate = new Date(1000, 0, 0, 0, 1, 2, 3);
  console.log( typeof date);
  console.log( Object.prototype.toString.call(date));
  if(date){
        if (date.getMonth !== realDate.getMonth) {
      throw new Error();
    };
    const ourMonth = date.getMonth() + 1;
    if (ourMonth === 12 ||ourMonth === 1 || ourMonth === 2) {
      return "winter";
    } else if (ourMonth >= 3 && ourMonth < 6) {
      return "spring";
    } else if (ourMonth >= 6 && ourMonth < 9) {
      return "summer";
    } else if (ourMonth >= 9 && ourMonth < 12) {
      return "autumn";
    }
  }else {
    return 'Unable to determine the time of year!'
  }

/*
    if (date.getMonth !== trDate.getMonth) {
      throw new Error();
    }else if( typeof date != 'undefined'  ){
 switch(date.getMonth()){
 case 0: return 'winter';
 case 1: return 'winter';
 case 2: return 'spring';
 case 3: return 'spring';
 case 4: return 'spring';
 case 5: return 'summer';
 case 6: return 'summer';
 case 7: return 'summer';
 case 8: return 'autumn';
 case 9: return 'autumn';
 case 10: return 'autumn';
 case 11: return 'winter';
  default:
    return 'Unable to determine the time of year!';
 }
} else {return 'Unable to determine the time of year!'; }*/
};
