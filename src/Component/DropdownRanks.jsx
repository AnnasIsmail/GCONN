import React, { useContext, useEffect, useState } from "react";
import { Dropdown } from "semantic-ui-react";
import { Context } from "../Function/Context";
import getAllRanks from "../Function/getAllRanks";

export default function DropdownRanks({ value, change }) {
  const { context, updateContextValue } = useContext(Context);
  const [ranks, setRanks] = useState([]);

  useEffect(() => {
    fetchDataRanks(context, updateContextValue);
  }, [context, updateContextValue]);

  const fetchDataRanks = async (context, updateContextValue) => {
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
    change(value);
  };

  return (
    <Dropdown
      options={ranks}
      placeholder="Choose Ranks"
      search
      selection
      fluid
      multiple={true}
      value={value}
      onAddItem={handleAddition}
      onChange={(e, { value }) => {
        handleChange(e, { value });
      }}
    />
  );
}
