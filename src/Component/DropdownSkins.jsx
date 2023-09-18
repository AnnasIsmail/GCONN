import React, { useContext, useEffect, useState } from "react";
import { Dropdown } from "semantic-ui-react";
import { Context } from "../Function/Context";
import getAllSkins from "../Function/getAllSkins";

export default function DropdownSkins({ value, change }) {
  const { context, updateContextValue } = useContext(Context);
  const [skins, setSkins] = useState([]);

  useEffect(() => {
    fetchDataSkins(context, updateContextValue);
  }, [context, updateContextValue]);

  const fetchDataSkins = async (context, updateContextValue) => {
    const response = await getAllSkins(context, updateContextValue);
    const result = response.map((obj) => ({
      text: obj.displayName,
      key: obj.uuid,
      value: obj.uuid,
    }));
    setSkins(result);
  };

  const handleAddition = (e, { value }) => {
    setSkins((prevState) => [{ text: value, value }, ...prevState]);
  };

  const handleChange = (e, { value }) => {
    change(value);
  };

  return (
    <Dropdown
      options={skins}
      placeholder="Choose Skins"
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
