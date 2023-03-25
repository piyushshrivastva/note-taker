import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>Sign In</h1>
        <h3>Email address</h3>
        <input type="text" placeholder='Enter email'></input>
        <h3>Password</h3>
        <input type="password" placeholder='Enter password'></input><br></br><br></br>
        <input type="checkbox"></input><h4>Remember me</h4>
        <button type="submit">Submit</button>
    </div>
  )
}

export default Login