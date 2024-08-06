let users = [
  {id:101, name:"Rahul",sal:45000},
  {id:102, name:"Aruna",sal:50000},
  {id:103, name:"Amr",sal:55000}
]

// for(let i=0;i<users.length;i++){
//   console.log(users[i])
// }

for( user of users){
  console.log(`username: ${user.name} and userid: ${user.id}`)
}