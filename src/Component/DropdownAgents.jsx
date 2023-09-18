import React, { useContext, useEffect, useState } from "react";
import { Dropdown } from "semantic-ui-react";
import { Context } from "../Function/Context";
import getAPIAgents from "../Function/getAPIAgents";

export default function DropdownAgents({ value, change }) {
  const { context, updateContextValue } = useContext(Context);
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    fetchDataAgents(context, updateContextValue);
  }, [context, updateContextValue]);

  const fetchDataAgents = async (context, updateContextValue) => {
    const response = await getAPIAgents(context, updateContextValue);
    const result = response
      .filter((obj) => obj.isPlayableCharacter === true)
      .map((obj) => ({
        text: obj.displayName,
        key: obj.uuid,
        value: obj.uuid,
      }));
    setAgents(result);
  };

  const handleAddition = (e, { value }) => {
    setAgents((prevState) => [{ text: value, value }, ...prevState]);
  };

  const handleChange = (e, { value }) => {
    change(value);
  };

  return (
    <Dropdown
      options={agents}
      placeholder="Choose Agents"
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
