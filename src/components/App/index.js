import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Landing from '../Landing'
import Welcome from '../Welcome'
import Login from '../Login'
import ErrorPage from '../ErrorPage'
import ForgetPassword from '../ForgetPassword'
import '../../App.css';
import { IconContext } from 'react-icons'
import CreateUserVerifEmaill from '../ConnexionVerifEmail/index'
import ParticulierRooter from '../PAGES/Particuliers/Index/Index'
import Artisans from '../PAGES/Artisans/Index/Index'
import Test from '../Test/Test'
import Admin from "../PAGES/Admin/Index"
import SuperAdmin from "../PAGES/SuperAdmin/Index"
import Administration from "../PAGES/Administration/Index"
import gestionFournisseur from "../PAGES/GestionFournisseur/Index"
import AporteurAffaire from '../PAGES/ApporteurAffaire/Index'
import Auditeur from '../PAGES/Auditeur/Index'
import Databases from "../PAGES/Databases/Index"
import GestionMateriaux from '../PAGES/GestionMateriaux/Index'
import StartUpEnergetique from '../PAGES/General/StartUpEnergetique'
import AccueilGeneral from '../PAGES/General/AccueilPage'
import ConnectionEmailPhone from '../PAGES/General/ConnectionEmailPhone'
import BienenueLoginRegister from "../PAGES/General/BienvenueLoginRegister"
import SignupTel from '../PAGES/General/SignupTelParticulier'
import DashboardParticulier from "../PAGES/Particuliers/DashboardParticuliers"

function App() {
  return (
    <Router>
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
    
        <Switch>
          <Route exact path="/"  component={AccueilGeneral} />
          <Route path="/welcome"  component={Welcome} />

          {/* Authentification */}
          <Route path="/login"   component={Login} />
          <Route path="/signup"  component={CreateUserVerifEmaill} />
          <Route path="/forgetpassword"  component={ForgetPassword} />
          <Route path="/email"  component={CreateUserVerifEmaill} />

          {/* page Generaliste */}
          <Route path="/StartUpEnergetique" exact component={StartUpEnergetique} />
          <Route path="/ConnectionEmailPhone" exact component={ConnectionEmailPhone} />
          <Route path="/BienenueLoginRegister" exact component={BienenueLoginRegister} />
          <Route path="/SignupTelParticulier" exact component={SignupTel} />
          <Route path="/DashboardParticulier" exact component={DashboardParticulier} />

          {/* Page Description */}
          <Route path="/artisans" exact component={Artisans} /> 
          <Route path="/particuliers" exact component={ParticulierRooter} />
          <Route path="/particuliers/test" exact component={Test} /> 
          <Route path="/admin" exact component={Admin} /> 
          <Route path="/superAdmin" exact component={SuperAdmin} /> 
          <Route path="/administration" exact component={Administration} /> 
          <Route path="/gestionFournisseur" exact component={gestionFournisseur} /> 
          <Route path="/fournisseurMateriaux" exact component={GestionMateriaux} /> 
          <Route path="/apporteurAffaire" exact component={AporteurAffaire} /> 
          <Route path="/auditeur" exact component={Auditeur} /> 
          <Route path="/databases" exact component={Databases} /> 



          <Route component={ErrorPage} />
        </Switch>

      </IconContext.Provider>
    </Router>
  );
}

export default App;
