import React from 'react'
import { Router, Route } from 'react-router-dom'
import Signup from "../../components/Login"


const RoomsPage = () => {
  return (
    <Router>
      <Route path='/test' children={<Signup/>} />
    </Router>
  )
}

export default RoomsPage