import React from 'react'
import { useState } from 'react'
export default function SignupForm() {
     const [newUser,setNewUser] = useState({
          username : "",
          email : "",
          password : ""
     });

     function changeHandler(e, name) {
          if (name === "username") {
               setNewUser({...newUser, username: e.target.value});
          } else if (name === "email") {
               setNewUser({...newUser, email: e.target.value});
          } else if (name === "password") {
               setNewUser({...newUser, password: e.target.value});
          }   
     }

     function submitNewUser (userObj) {
     }
  return (
    <form action='submit'>
     <input type="text" placeholder='Username' onChange={(e) => changeHandler(e, "username")} value={newUser.username}/>
     <input type="email" placeholder='Email Address' onChange={(e) => changeHandler(e, "email")} value={newUser.email}/>
     <input type="password" placeholder='password' onChange={(e) => changeHandler(e, "password")} value={newUser.password}/>
     <input type='submit' value="Sign up"/>
    </form>
  )
}
