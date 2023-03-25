import React from 'react'
import Homepage from './Homepage'
import './Addnote.css'

const Addnote = () => {
  return (
    <div>
        <Homepage></Homepage>
        <h2>Title</h2>
        <input type="text" id='title' placeholder='Title'></input>
        <h2>Description</h2>
        <input type="text" id='desc' placeholder="What's on your mind"></input>
        <br></br><br></br>
        <button type='submit'>Add Note</button>
    </div>
  )
}

export default Addnote