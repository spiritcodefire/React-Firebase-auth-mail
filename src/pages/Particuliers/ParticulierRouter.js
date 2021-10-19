import React from 'react'
import { Router, Route } from 'react-router-dom'
import Signup from "../../components/Login"
import Test from '../../components/Test/Test'


const RoomsPage = () => {
  return (
    <Router>
      <Route path='/test' component={Test} />
    </Router>
  )
}

export default RoomsPage