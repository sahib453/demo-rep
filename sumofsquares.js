function square(a){
return a*a;
} 
function cube(a){
    return a*a*a
}

function sumOfnums(a,b,fn){
    let num1 = fn(a); // this approach avoids DRY(don't repeat yourself)
    let num2 = fn(b);
    return num1+num2
}

function differentWay(a,b){
return a+b;
}


let ans = sumOfnums(3,2,square)
console.log("Sum Of Squares : ",ans)

//Very Different Way : 
let ans1 = differentWay(square(2),square(3))
console.log("Answer through different way : ",ans1)