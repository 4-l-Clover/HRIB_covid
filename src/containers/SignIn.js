import React from "react";
import { Button, Form, Input, Icon, Modal } from "antd";
import { Link } from "react-router-dom";

const FormItem = Form.Item;

class SignIn extends React.Component {
  state = {
    errorMsg: false,
    isLoading: false,
    visibleModal: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      errorMsg: false,
    });
    this.props.form.validateFields({ suppressWarning: true }, (err, values) => {
      if (!err) {
        this.setState({ isLoading: true });
        const { username, password } = values;
        console.log("username:", username);
        console.log("password:", password);
        setTimeout(() => {
          if (username === "user@covid.com" && password === "password") {
            this.setState({ isLoading: false, visibleModal: true });
          } else {
            this.setState({
              isLoading: false,
              errorMsg: true,
            });
          }
        }, 2000);
      }
    });
  };

  validatePassword = (rule, value, callback) => {
    const regWhiteSpaceConstraint = /^[\S]+.*[\S]+$/;
    const regLengthconstraint = /^.{8,}$/;
    if (value && !regWhiteSpaceConstraint.test(value))
      callback("Password must not begin and end with whitespace");
    else if (value && !regLengthconstraint.test(value))
      callback(
        "Password must have length greater than or equal to 8 for security"
      );
    else callback();
  };

  handleModalOk = (e) => {
    e.preventDefault();
    this.setState({visibleModal: false});
    console.log('pin confirm')
    this.props.history.push('/f/meeting')
  }

  handleModalCancel = (e) => {
    e.preventDefault();
    this.setState({visibleModal: false});
  }

  render() {
    const { isLoading, errorMsg, visibleModal } = this.state;
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="gx-login-wrapper gx-font-lf-regular">
        <div className="gx-between-center gx-py-em-3 gx-px-em-3">
          <img src={require("assets/images/top-right.png")} alt="logo" />
          <img src={require("assets/images/top-right.png")} alt="logo" />
        </div>
        <div className="gx-ss-center gx-flex-column login-content">
          <div className="login-title">Covid19 Application Monitoring</div>
          <div className="form-wrapper">
            <Form layout="vertical" onSubmit={this.handleSubmit}>
              <FormItem label="EMAIL" className="username-wrapper">
                {getFieldDecorator("username", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                  ],
                })(<Input size="large" />)}
              </FormItem>
              <FormItem label="PASSWORD" className="password-wrapper">
                {getFieldDecorator("password", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                    {
                      validator: this.validatePassword,
                    },
                  ],
                })(<Input.Password type="password" size="large" />)}
              </FormItem>
              <FormItem className="login-btn-wrapper">
                <Button type="primary" htmlType="submit" block size="large">
                  <div className="gx-ss-center">
                    {isLoading && (
                      <Icon type="loading" className="gx-mr-em-p5" />
                    )}
                    Login
                  </div>
                </Button>
              </FormItem>
              {errorMsg && (
                <div className="login-alert gx-color-white gx-text-center gx-mt-em-1 gx-py-em-1">
                  <div className="gx-font-size-20">Login Failed</div>
                  <div>Please check your email and password</div>
                </div>
              )}
              <hr className="hr" />
              <FormItem className="register-btn-wrapper">
                <Button ghost size="large" block>
                  <Link to="/signup">Register</Link>
                </Button>
              </FormItem>
            </Form>
          </div>
          <Modal
            title="PIN code confirm"
            width={400}
            wrapClassName="pin-confirm-modal-wrapper"
            visible={visibleModal}
            okText="PROCEED"
            cancelText="CANCEL"
            maskClosable
            closable={false}
            okButtonProps={{ disabled: isLoading }} 
            cancelButtonProps={{ disabled: isLoading }}
            onOk={this.handleModalOk}
            onCancel={this.handleModalCancel}
            closeIcon={null}
          >
            <div className="modal-body gx-font-lf-regular">
              <div className="content">
                <div>A PIN code has been sent to your mobile number</div>
                <div>Please enter the code to proceed</div>
                <Input/>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(SignIn);

export default WrappedNormalLoginForm;
