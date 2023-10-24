type User = {
    id:number;
    firstName:string;
    lastName:string;
    isAdmin:Boolean;
}

const firstUser={
    id:1,
    firstName:"Dogukan",
    lastName:"Kaynar",
    isAdmin:true
}
const secondUser={
    id:2,
    firstName:"Atilay",
    lastName:"Köşker",
    isAdmin:false
}

const getUserId= (user:User)=> {
return user.id
}
const getUserName= (user:User)=>{
    return user.firstName
}

console.log(getUserId(firstUser));
console.log(getUserName(secondUser));
