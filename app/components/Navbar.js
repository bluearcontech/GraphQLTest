import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  const inActiveTab = "nav-item"
  const activeTab = "nav-item active";
  const links = (
    <div className="collapse navbar-collapse">
      <ul className="nav navbar-nav">
        <li className={props.location.pathname === '/' ? activeTab : inActiveTab }><Link to="/" className="nav-item nav-link">Home</Link></li>
        <li className={props.location.pathname === '/add' ? activeTab : inActiveTab}><Link to="/add" className="nav-item nav-link">Add a pizza</Link></li>
      </ul>
    </div>
  );

  return (
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="row">
          <div className="col-md-12">{links}</div>
        </div>
      </div>
    </nav>
  );
};
