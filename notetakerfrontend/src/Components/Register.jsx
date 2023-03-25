import React from 'react'

const Register = () => {
  return (
    <div>
        <h1>SIGN UP</h1>
        <input type="text" placeholder='EMAIL'></input><br></br><br></br>
        <input type="password" placeholder='PASSWORD' ></input><br></br><br></br>
        <input type="password" placeholder='REPEAT PASSWORD' ></input><br></br><br></br>
        <input type="checkbox"></input><h4>I agree with TERM & CONDITIONS</h4>
        <button type="submit">CONTINUE</button>
    </div>
  )
}

export default Register