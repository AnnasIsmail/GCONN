import { Icon } from "@iconify/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: white !important;
  display: grid;
  grid-template-columns: 70px auto;
  width: 200px;
  align-items: center;
  font-size: 23px;
  padding: 0 13px;
  text-decoration: none;
  font-weight: ${({ isActive }) => (isActive ? "700" : "normal")};
`;

export default function LinkNav({ label, path, icon, iconActive }) {
  const location = useLocation();
  return (
    <StyledLink to={path} isActive={location.pathname === path}>
      <Icon
        icon={location.pathname === path ? iconActive : icon}
        style={{
          color: "white",
          fontSize: "35px",
        }}
      />
      {label}
    </StyledLink>
  );
}
