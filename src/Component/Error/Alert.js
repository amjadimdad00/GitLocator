import React from "react";
import './Alert.css';

const Alert = (props) => {
  return (
    props.onAlert !== null && (
      <div className="alert">
        <i class="fa fa-info-circle"></i> {props.onAlert.msg}
      </div>
    )
  );
};

export default Alert;
