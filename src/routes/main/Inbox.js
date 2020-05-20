import React, { Component } from "react";
import { Layout } from "antd";
import Navbar from "./Navbar";
import FHeader from "./FHeader";

class Inbox extends Component {
  renderMainContent() {
    return (
      <div className="gx-meeting-home-wrapper gx-w-100-p">Inbox</div>
    );
  }

  render() {
    const { Content } = Layout;
    return (
      <Layout>
        <FHeader />
        <Navbar current={2} />
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

export default Inbox;
