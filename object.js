const users1 = {
    firstName:"sahib",
    gender:"male"
}


const allUsers = [{
    firstName:"Sahib",
    gender: "male"
},
{ firstName:"ss",
    gender:"male"
},
{
    firstName:"noob",
    gender:"female"
}
]
/*Printing names of male 
 for(let i = 0 ; i<allUsers.length;i++){
    if(allUsers[i]["gender"]=="male"){
        console.log(allUsers[i]["firstName"])
    }
}
*/
let values = Object.keys(allUsers)
console.log(values)



user69 = {
    name :"Sahib",
    age : 20,
    bod : "03-08-2003"
}

const sahib = Object.keys(user69)
console.log("Keys of user69 : ",sahib)