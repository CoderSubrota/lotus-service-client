
export const authToken = (email) => {
const currentUser = {
email:email , 
}
fetch(`http://localhost:3065/authentication` , {
method:"POST" , 
headers:{
 'content-type' : 'application/json'
} ,
body:JSON.stringify(currentUser)
})
.then(res => res.json())
.then(data => localStorage.setItem('lotus-pc-token' , data.token))
.catch(error => console.log(error))
} 