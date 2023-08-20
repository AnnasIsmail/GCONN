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
  font-weight: "normal";
`;

export default function LinkNav({ label, path, icon, iconActive }) {
  const location = useLocation();
  const isActive = location.pathname === path;
  return (
    <StyledLink to={path} style={{ fontWeight: isActive ? "700" : "normal" }}>
      <Icon
        icon={isActive ? iconActive : icon}
        style={{
          color: "white",
          fontSize: "35px",
        }}
      />
      {label}
    </StyledLink>
  );
}
