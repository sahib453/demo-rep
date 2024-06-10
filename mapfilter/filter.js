const input = [1,2,3,4,5]
const newArray = []
/*for(let i =0;i<input.length;i++){
    newArray.push(input[i]*2)
}
console.log(newArray)
*/

//MAPS

// other solution
function transform(i){
    return i*2;
}
const ans = input.map(transform)
console.log(ans)

//Another way 

const ans2 = input.map(function(i){
    return i*2
})

console.log("Answer With Another Way : ",ans2)


//filteR

const input69 = [2,4,5,7,8] // get even values from this

 //function filterLogic(n){
   // if(n%2==0)return true
    // else return false
// }

const ans3= input69.filter((n)=>{
    if(n%2==0)return true
      else return false})

console.log("Even numbers with filtered logic : ",ans3)