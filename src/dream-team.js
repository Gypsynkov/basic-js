module.exports = function createDreamTeam( members ) {
let restring;
let res = [];
if (Array.isArray(members)){
    let arr = members.filter( e =>  typeof e === 'string' );
    res = arr.map(item => item.replace( /\s/g, "")[0])
     restring = res.join().toUpperCase();
     return restring.split('').sort().join().replace( /\,/g, "");
} else {
    return false;
}
 
 

    /*
 let arr = members.map( function madeSort(item){ 
     if(typeof item === String){
    item.replace( /\s/g, "")[0]}})
    console.log(arr);

console.log(arr.sort().join().toUpperCase().replace( /\,/g, ""));*/
};