import React from 'react';
import './Navbar.css';
import { Link }  from 'react-router-dom';

class Navbar extends React.Component {
    state = {keyword: ''};

    // Function untuk menyimpan keyword pencarian secara temporary
    onInputChange = event => {
      this.setState({ keyword: event.target.value });
    };

    // Melakukkan hit API Youtube ketika di submit
    onFormSubmit = event => {
    //   event.preventDefault();

      // props = parameter yang di inisiasi dari App.js
      this.props.onFormSubmit(this.state.keyword);
    };

    render() {
      return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="/">KW <span className="logo-red">TUBE</span></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
      </li>
      
      
    </ul>
    <form className="form-inline my-2 my-lg-0 " action="/" method="get">
      <input className="form-control mr-sm-2 bg-dark search-bar" name="q" type="search" placeholder="Search" aria-label="Search" onChange={this.onInputChange} value={this.state.keyword} />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.onFormSubmit}>Search</button>
    </form>
  </div>
</nav>

      )
    }
}

export default Navbar;