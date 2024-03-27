import React from "react";

function ScreenHeader(props) {
  return (
    <div onLoad={props.handleOnLoad} className="tickets-header">
      <h2 style={{ margin: 0 }}>{props.ScreenName}</h2>
    </div>
  );
}

export default ScreenHeader;
