function opr(a,b,type){
    const res = type(a,b)
    return res

}

function addition(a,b){
    return a+b
}
function subtraction(a,b){
    return a-b
}

console.log("The Result is : ",opr(10,20,addition))