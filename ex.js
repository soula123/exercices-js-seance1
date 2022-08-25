function conversion(x){
  if (typeof(x)==='number')
   { a=x.toString();
    return a}
    else 
    return 'impossible de convertir'
}
console.log(conversion({x:'15'}))
console.log(conversion('5'))
console.log(conversion([1,2,3]))

/////////////

function sommeTab(t){
    console.log(t.reduce((sommeFinal,element)=>sommeFinal+element,0));}

sommeTab([1,2,3])


////////
function MoyTab(t2){

   return t2.reduce((sommeFinal,element)=>sommeFinal+element,0)/(t2.length)
}
console.log(MoyTab([1,2,3,4]))


////////////

function getUserById(t,id){
   
if(id>=t.length){
console.log("pas d’utilisateur avec cet ID")
}
else{
    let user=t.filter(u=>u.id==id)
    console.log(user)
}
}
T=[
    {
    id : 1,
    first:"ahmed",
    last:"ben ali",
    age : 23,
    email : "ahmed.benali@gmail.com",
    address :"Tunis"
    },
    {
    id : 2,
    first:"aziz",
    last:"ameri",
    age : 44,
    email : "ahmed.benali@gmail.com",
    address :"Tunis"
    },
    {
    id : 3,
    first:"khalil",
    last: "ben lamine",
    age : 18,
    email : "ahmed.benali@gmail.com",
    address :"Tunis"
    },]
getUserById(T,2)

function sortUser(users){
    users.sort((a, b) => b.age - a.age);

    users.forEach((u) => {
        console.log(`${u.id} ${u.first} ${u.last} ${u.age} ${u.email}`);
    });
    
}
users=[
    {
    id : 1,
    first:"ahmed",
    last:"ben ali",
    age : 23,
    email : "ahmed.benali@gmail.com",
    address :"Tunis"
    },
    {
    id : 2,
    first:"aziz",
    last:"ameri",
    age : 44,
    email : "ahmed.benali@gmail.com",
    address :"Tunis"
    },
    {
    id : 3,
    first:"khalil",
    last: "ben lamine",
    age : 18,
    email : "ahmed.benali@gmail.com",
    address :"Tunis"
    },]
    sortUser(users)