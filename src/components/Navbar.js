import React from 'react';

const Navbar = () => (
  <header className="navbar">
    <section className="navbar-section">
      <a href="#" className="navbar-brand mr-2">Spectre.css</a>
      <a href="#" className="btn btn-link">Docs</a>
      <a href="https://github.com/picturepan2/spectre" className="btn btn-link">GitHub</a>
    </section>
    <section className="navbar-section">
      <div className="input-group input-inline">
        <input className="form-input" type="text" placeholder="search" />
        <button className="btn btn-primary input-group-btn">Search</button>
      </div>
    </section>
  </header>
);

export default Navbar;