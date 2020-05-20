import React from "react";
import { Button, Form, Input, Icon, Table, Checkbox, Modal } from "antd";
import { Link } from "react-router-dom";
import { regQuestions } from "../constants/data";

const { Column } = Table;
const FormItem = Form.Item;

class Signup extends React.Component {
  state = {
    question: false,
    visibleModal: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields({ suppressWarning: true }, (err, values) => {
      if (!err) {
        this.setState({ question: true });
      }
    });
  };

  handleConfirmBlur = (e) => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
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

  handleClickDone = (e) => {
    e.preventDefault();
    this.setState({ visibleModal: true, question: false });
  };

  handleModalOk = (e) => {
    e.preventDefault();
    this.setState({ visibleModal: false });
    this.props.history.push('/f/meeting')
  };

  handleModalCancel = (e) => {
    e.preventDefault();
    this.setState({ visibleModal: false });
  };

  render() {
    let questionData = [];
    regQuestions.map((data, index) => {
      questionData.push({ key: index, question: data });
      return 0;
    });
    const { getFieldDecorator } = this.props.form;
    const { question, visibleModal } = this.state;
    return (
      <div className="gx-register-wrapper gx-font-lf-regular">
        <div className="gx-between-center gx-px-em-3 logo-div">
          <img src={require("assets/images/top-right.png")} alt="logo" />
          <img src={require("assets/images/top-right.png")} alt="logo" />
        </div>
        {question ? (
          <div className="gx-px-em-5">
            <div className="gx-font-size-27 gx-mb-em-p5">
              Health Screening Questionnaire
            </div>
            <Table
              bordered
              dataSource={questionData}
              pagination={false}
              className="reg-question-table-wrapper"
            >
              <Column
                title="Question"
                dataIndex="question"
                key="question"
                render={(text, record) => (
                  <div className="gx-between-center gx-pl-em-p5 gx-pr-em-2">
                    {text}
                  </div>
                )}
              />
              <Column
                title="Answer"
                dataIndex=""
                key="answer"
                width={400}
                render={(text, record) => (
                  <div className="gx-between-center gx-pl-em-p5 gx-pr-em-2"></div>
                )}
              />
            </Table>
            <div className="gx-mt-em-1">
              <Checkbox>
                I confirm that all questions have been answered honestly and
                truthfully
              </Checkbox>
            </div>
            <div className="gx-mt-em-p5">
              <Checkbox>
                I confirm that i permit the IHRB to store my health screening
                details
              </Checkbox>
            </div>
            <div className="gx-text-right">
              <Button
                type="primary"
                size="large"
                onClick={this.handleClickDone}
              >
                <div className="gx-ss-center gx-px-em-5">DONE</div>
              </Button>
            </div>
          </div>
        ) : (
          <div className="register-content">
            <div className="register-title">
              Covid19 Application - Registration
            </div>
            <div className="form-wrapper">
              <Form layout="vertical" onSubmit={this.handleSubmit}>
                <FormItem label="FIRST NAME" className="username-wrapper">
                  {getFieldDecorator("fName", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your first name!",
                      },
                    ],
                  })(<Input size="large" />)}
                </FormItem>
                <FormItem label="LAST NAME" className="username-wrapper">
                  {getFieldDecorator("lName", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your last name!",
                      },
                    ],
                  })(<Input size="large" />)}
                </FormItem>
                <FormItem label="USERNAME" className="username-wrapper">
                  {getFieldDecorator("username", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ],
                  })(<Input size="large" />)}
                </FormItem>
                <FormItem label="MOBILE NUMBER" className="username-wrapper">
                  {getFieldDecorator("mNumber")(<Input size="large" />)}
                </FormItem>
                <FormItem label="EMAIL" className="username-wrapper">
                  {getFieldDecorator("email", {
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
                <Form.Item
                  label="CONFIRM PASSWORD"
                  className="password-wrapper"
                >
                  {getFieldDecorator("confirm", {
                    rules: [
                      {
                        required: true,
                        message: "Please confirm your password!",
                      },
                      {
                        validator: this.compareToFirstPassword,
                      },
                    ],
                  })(
                    <Input.Password
                      onBlur={this.handleConfirmBlur}
                      size="large"
                    />
                  )}
                </Form.Item>
                <hr className="hr" />
                <FormItem label="ADDRESS1" className="username-wrapper">
                  {getFieldDecorator("address1")(<Input size="large" />)}
                </FormItem>
                <FormItem label="ADDRESS2" className="username-wrapper">
                  {getFieldDecorator("address2")(<Input size="large" />)}
                </FormItem>
                <FormItem label="TOWN/CITY" className="username-wrapper">
                  {getFieldDecorator("town")(<Input size="large" />)}
                </FormItem>
                <FormItem label="COUNTY" className="username-wrapper">
                  {getFieldDecorator("county")(<Input size="large" />)}
                </FormItem>
                <FormItem label="POST CODE" className="username-wrapper">
                  {getFieldDecorator("postCode")(<Input size="large" />)}
                </FormItem>
                <FormItem label="COUNTRY" className="username-wrapper">
                  {getFieldDecorator("country")(<Input size="large" />)}
                </FormItem>
                <div className="gx-d-flex gx-w-100-p gx-mb-em-2">
                  <Button ghost size="large" block className="gx-mr-em-1">
                    <Link to="/">Cancel</Link>
                  </Button>
                  <Button type="primary" htmlType="submit" block size="large">
                    <div className="gx-ss-center">Register</div>
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        )}
        <Modal
          title="PIN code confirm"
          width={400}
          wrapClassName="pin-confirm-modal-wrapper"
          visible={visibleModal}
          okText="PROCEED"
          cancelText="CANCEL"
          maskClosable
          closable={false}
          // okButtonProps={{ disabled: isLoading }}
          // cancelButtonProps={{ disabled: isLoading }}
          onOk={this.handleModalOk}
          onCancel={this.handleModalCancel}
          closeIcon={null}
        >
          <div className="modal-body gx-font-lf-regular">
            <div className="content">
              <div>A PIN code has been sent to your mobile number</div>
              <div>Please enter the code to proceed</div>
              <Input />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(Signup);

export default WrappedNormalLoginForm;
