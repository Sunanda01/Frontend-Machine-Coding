// Array.prototype.myReduce=function(cb,initialValue){
//     let accumulator;
//     let startIndex;
//     if(initialValue!== undefined){
//         accumulator=initialValue;
//         startIndex=0;
//     }
    
//     for(let i=startIndex;i<this.length;i++){
//         accumulator=cb(accumulator,this[i],i,this);
//     }
//     return accumulator;
// }
// const arr=[1,2,3,4,5];
// const filtered=arr.reduce((acc,curr,i,a)=>{
//     return acc+curr;
// },0)
// console.log(filtered);
// const res=arr.myReduce((acc,curr,i,a)=>{
//     return acc+curr;
// },0);
// console.log(res);





