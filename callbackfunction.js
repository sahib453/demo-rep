function sum(a,b,FnToCall){
    const sum = a+b
FnToCall(sum)
}

function display(data){
    console.log("The Result Is :",data)
}


sum(2,6,display)

function arithmat(a,b,operation){
    const ans = operation(a,b)
    return ans
}
function add(a,b){
    return a+b
}function sub(a,b){
    return a-b
}


const result = arithmat(10,6,sub)
console.log("Result of operation is : ",result)