import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "./NoData.css";

function NoData({ goto, description, button = null }) {
  const navigasi = useNavigate();

  const NavigateTo = (to) => {
    navigasi(to);
  };

  return (
    <div className="no-data">
      {button && (
        <Button
          style={{ marginBottom: 10 }}
          basic
          inverted
          color="yellow"
          onClick={() => NavigateTo(goto)}
        >
          {button}
        </Button>
      )}
      <h1>{description}</h1>
    </div>
  );
}

export default NoData;
