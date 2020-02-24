module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
    let tryCounter = Math.pow(2, disksNumber) - 1;
    console.log(tryCounter);
    let needTime = turnsSpeed / 3600;
    console.log(needTime);
    return {
        turns: tryCounter,
        seconds: tryCounter / needTime 
    }
}