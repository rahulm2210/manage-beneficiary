import React from "react";
import {BrowserRouter as Router,Route,NavLink, Routes} from "react-router-dom";
import Home from "../home";
import PayeeBeneficiarySection from "../manageBeneficiary";
import "./navbar.css"

const Navbar = () => {
    return(
        <Router>
        <nav className="navbar navbar-expand-sm bg-light">
            <div className="container">
            <div className ="row">
          <div className="col-md-12">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/managePayee">Manage Beneficiaries</NavLink>
            </li>
          </ul>
          </div>
        </div>
            </div>
        
      </nav>
      <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/managePayee" element={<PayeeBeneficiarySection />}>
          </Route>
          
        </Routes>
      </Router>
    );
}

export default Navbar;