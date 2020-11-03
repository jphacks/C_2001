import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as urls from "../../services/utiils/routeUrlPath";

import HomeIcon from "./assets/home.svg";
import LocationIcon from "./assets/location.svg";
import MessegeIcon from "./assets/messenger.svg";

export const Navigation = () => {
  return (
    <NavContainer>
      <NavBox>
        <div>
          <Link to={urls.HOME_PATH}>
            <NavIcon src={HomeIcon} alt="Nav Home Icon" />
          </Link>
        </div>
        <div>
          <Link to={urls.LOCATION_ADD_PATH}>
            <NavIcon src={LocationIcon} alt="Nav Location Icon" />
          </Link>
        </div>
        <div>
          <Link to={urls.FRIEND_LIST_PATH}>
            <NavIcon src={MessegeIcon} alt="Nav Messege Icon" />
          </Link>
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
