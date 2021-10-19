import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../Header'
import Landing from '../Landing'
import Footer from '../Footer'
import Welcome from '../Welcome'
import Login from '../Login'
// import Signup from '../Signup'
import ErrorPage from '../ErrorPage'
import ForgetPassword from '../ForgetPassword'
import '../../App.css';
import { IconContext } from 'react-icons'
import CreateUserVerifEmaill from '../ConnexionVerifEmail/index'
import ParticulierRooter from '../../pages/Particuliers/ParticulierRouter'

function App() {
  return (
    <Router>
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
    
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={CreateUserVerifEmaill} />
          <Route path="/forgetpassword" component={ForgetPassword} />
          <Route path="/email" component={CreateUserVerifEmaill} />
          <Route path="/particuliers/*" element={ParticulierRooter} />
          <Route component={ErrorPage} />
        </Switch>

      </IconContext.Provider>
    </Router>
  );
}

export default App;
