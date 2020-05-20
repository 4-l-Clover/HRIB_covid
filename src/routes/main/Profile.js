import React, { Component } from "react";
import { Layout } from "antd";
import Navbar from "./Navbar";
import FHeader from "./FHeader";

class Profile extends Component {
  renderMainContent() {
    return (
      <div className="gx-profile-wrapper gx-w-100-p">Profile</div>
    );
  }

  render() {
    const { Content } = Layout;
    return (
      <Layout>
        <FHeader />
        <Navbar current={3} />
        <div className="gx-mx-auto">
          <Content
            style={{
              height: "calc(100vh - 150px)",
              width: "100vw",
              background: "#ffffff",
            }}
          >
            {this.renderMainContent()}
          </Content>
        </div>
      </Layout>
    );
  }
}

export default Profile;
