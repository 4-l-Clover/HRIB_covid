import React from "react";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";

const NotFound = () => {
  console.log("... Not found");
  return (
    <div className="gx-404-wrapper gx-ss-center" style={{height:"100vh"}}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" size="large">
            <Link to="/f/meeting">Back Home</Link>
          </Button>
        }
      />
    </div>
  );
};

export default NotFound;
