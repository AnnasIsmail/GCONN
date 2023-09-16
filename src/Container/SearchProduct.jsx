import React from "react";
import { Dropdown } from "semantic-ui-react";
import styled from "styled-components";
import SearchProductField from "../Component/SearchProductField";

const DropdownCategory = styled(Dropdown)`
  &&& {
    background: linear-gradient(
      18deg,
      rgba(28, 52, 173, 0.23012955182072825) 0%,
      rgba(28, 52, 173, 1) 100%
    );
    padding: 10px;
    color: white !important;

    &.active {
      color: white !important;
    }
  }
  .item,
  .selected {
    background: rgba(28, 52, 173, 1) !important;
  }
  .text {
    color: white !important;
  }
`;

export default function SearchProduct() {
  return (
    <div>
      <SearchProductField />
      <DropdownCategory
        placeholder="Select Friend"
        fluid
        selection
        options={friendOptions}
      />
    </div>
  );
}

const friendOptions = [
  {
    key: "Jenny Hess",
    text: "Jenny Hess",
    value: "Jenny Hess",
  },
  {
    key: "Elliot Fu",
    text: "Elliot Fu",
    value: "Elliot Fu",
  },
  {
    key: "Stevie Feliciano",
    text: "Stevie Feliciano",
    value: "Stevie Feliciano",
  },
];
