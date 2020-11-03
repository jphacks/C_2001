import React from "react";
import styled from "styled-components";

import HomeIcon from "./assets/home.svg";
import LocationIcon from "./assets/location.svg";
import MessegeIcon from "./assets/messenger.svg";

export const Navigation = () => {
  return (
    <NavContainer>
      <NavBox>
        <div>
          <NavIcon src={HomeIcon} alt="Nav Home Icon" />
        </div>
        <div>
          <NavIcon src={LocationIcon} alt="Nav Location Icon" />
        </div>
        <div>
          <NavIcon src={MessegeIcon} alt="Nav Messege Icon" />
        </div>
      </NavBox>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fafafa;
`;

const NavBox = styled.nav`
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;

  padding-top: 15px;
  padding-bottom: 40px;

  & > div {
    display: flex;
    align-content: center;
    justify-content: center;
  }
`;

const NavIcon = styled.img`
  cursor: pointer;
`;
