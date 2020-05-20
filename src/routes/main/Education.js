import React, { Component } from "react";
import { Layout } from "antd";
import Navbar from "./Navbar";
import FHeader from "./FHeader";

class Education extends Component {
  renderMainContent() {
    return (
      <div className="gx-meeting-home-wrapper gx-w-100-p">Education</div>
    );
  }

  render() {
    const { Content } = Layout;
    return (
      <Layout>
        <FHeader />
        <Navbar current={4} />
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

export default Education;
