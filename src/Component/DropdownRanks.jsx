import React, { useContext, useEffect, useState } from "react";
import { Dropdown } from "semantic-ui-react";
import { Context } from "../Function/Context";
import getAllRanks from "../Function/getAllRanks";

export default function DropdownRanks(props) {
  const [value, setValue] = useState([]);
  const { context, updateContextValue } = useContext(Context);
  const [ranks, setRanks] = useState([]);

  useEffect(() => {
    fetchDataAgents(context, updateContextValue);
  }, [context, updateContextValue]);

  useEffect(() => {
    // if (value !== props.value) {
    //   props.sendData(value);
    // }
  }, [value, props]);

  const fetchDataAgents = async (context, updateContextValue) => {
    const response = await getAllRanks(context, updateContextValue);
    const result = response.map((obj) => ({
      text: obj.tierName,
      key: obj.tier,
      value: obj.tierName,
    }));
    setRanks(result);
  };

  const handleAddition = (e, { value }) => {
    setRanks((prevState) => [{ text: value, value }, ...prevState.options]);
  };

  const handleChange = (e, { value }) => {
    props.change(value);
  };

  return (
    <Dropdown
      options={ranks}
      placeholder="Choose Ranks"
      search
      selection
      fluid
      multiple={true}
      value={props.value}
      onAddItem={handleAddition}
      onChange={(e, { value }) => {
        handleChange(e, { value });
      }}
    />
  );
}
