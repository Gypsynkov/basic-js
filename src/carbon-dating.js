const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity ) {
  let res;
if(typeof sampleActivity == 'string' && Number(parseFloat(sampleActivity)) < 15 && Number(parseFloat(sampleActivity)) >0 ){
 res = (Math.ceil(Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))*HALF_LIFE_PERIOD/0.693));
   
    
return res;


}else { return false};
};