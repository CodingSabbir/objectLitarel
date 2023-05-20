
function bio({firstName,lastName,age}){
    return{
        firstName,
        lastName,
        age,
        commom:['html','css','javascript']
      
    }
};

const data=bio({
    firstName:'sabbir',
    lastName:'rahman',
    age:20  
}); 

console.log(data);
// console.log(data.firstName)