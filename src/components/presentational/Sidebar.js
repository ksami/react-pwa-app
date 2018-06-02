import React from 'react';

const Sidebar = ({ showSidebar, onClick }) => (
  <div className="columns">
    <div className="col-3">
      <ul className={`menu ${showSidebar ? '' : 'd-hide'}`}>
        <li className="divider" data-content="LINKS">
        </li>
        <li className="menu-item">
          <a href="#">
            <i className="icon icon-link"></i> Slack
    </a>
        </li>

        <li className="menu-item">
          <label className="form-checkbox">
            <input type="checkbox" />
            <i className="form-icon"></i> form-checkbox
    </label>
        </li>

        <li className="divider"></li>

        <li className="menu-item">
          <div className="menu-badge">
            <label className="label label-primary">2</label>
          </div>
          <a href="#">
            <i className="icon icon-link"></i> Settings
    </a>
        </li>
      </ul>
    </div>
    <div className="col-3">
      <button className="btn" onClick={onClick}>Toggle sidebar</button>
    </div>
  </div>
);

export default Sidebar;