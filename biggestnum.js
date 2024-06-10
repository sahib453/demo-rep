let numbers = [20,99,102,34,400,295,6969]
let numbersL = numbers.length
let biggestNum = 0

for(let i =0 ; i < numbersL ; i++){
if(numbers[i] > biggestNum){
    biggestNum = numbers[i]
}
}
console.log("Biggest Number is : ",biggestNum)