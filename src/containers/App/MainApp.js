import React, {Component} from "react";
import {Layout} from "antd";
// import {footerText} from "util/config";
import App from "routes/index";
import {connect} from "react-redux";

const {Content} = Layout;

export class MainApp extends Component {

  render() {
    const {match} = this.props;

    return (
      <Layout className="gx-app-layout gx-font-lf-Light">
        <Layout>
          <Content className={`gx-layout-content`}>
            <App match={match}/>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

const mapStateToProps = ({settings}) => {
  const {width, navStyle} = settings;
  return {width, navStyle}
};
export default connect(mapStateToProps)(MainApp);

