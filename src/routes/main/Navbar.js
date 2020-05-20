import React, { Component } from "react";
import { Button, Icon } from "antd";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    const { current } = this.props;
    return (
      <div className="gx-user-navbar gx-d-flex">
        <Link to="/f/meeting" className={`${current === 1?'active':'none'}`}>
          <div className="gx-flex-column gx-font-size-27">
            <Icon type="schedule" />
            <div className="gx-font-size-20 title">Mettings</div>
          </div>
        </Link>
        <Link to="/f/inbox" className={`${current === 2?'active':'none'}`}>
          <div className="gx-flex-column gx-font-size-27">
            <Icon type="inbox" />
            <div className="gx-font-size-20 title">Inbox</div>
          </div>
        </Link>
        <Link to="/f/profile" className={`${current === 3?'active':'none'}`}>
          <div className="gx-flex-column gx-font-size-27">
            <Icon type="user" />
            <div className="gx-font-size-20 title">Profile</div>
          </div>
        </Link>
        <Link to="/f/education" className={`${current === 4?'active':'none'}`}>
          <div className="gx-flex-column gx-font-size-27">
            <Icon type="highlight" />
            <div className="gx-font-size-20 title">Education</div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Navbar;
