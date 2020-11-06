import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as urls from "../../services/utils/routeUrlPath";

import HomeIcon from "./assets/home.svg";
import LocationIcon from "./assets/location.svg";
import MessegeIcon from "./assets/messenger.svg";
import { useNotice } from "../../contexts/notice";

export const Navigation = () => {
  const { notice } = useNotice();

  return (
    <NavContainer>
      <NavBox>
        <div>
          <Link to={urls.HOME_PATH}>
            <IconWrraper>
              <NavIcon src={HomeIcon} alt="Nav Home Icon" />
            </IconWrraper>
          </Link>
        </div>
        <div>
          <Link to={urls.LOCATION_ADD_PATH}>
            <IconWrraper>
              <NavIcon src={LocationIcon} alt="Nav Location Icon" />
            </IconWrraper>
          </Link>
        </div>
        <div>
          <Link to={urls.FRIEND_LIST_PATH}>
            <IconWrraper>
              {notice.chat.length !== 0 && (
                <NoticeIcon>{notice.chat.length}</NoticeIcon>
              )}
              <NavIcon src={MessegeIcon} alt="Nav Messege Icon" />
            </IconWrraper>
          </Link>
        </div>
      </NavBox>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  position: fixed;
  z-index: 999;
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

const IconWrraper = styled.div`
  display: inline-block;
  position: relative;
`;

const NoticeIcon = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  line-height: 25px;
  border-radius: 25px;
  color: #ffffff;
  background-color: #ff9900;
  top: 0;
  right: 0;
  transform: translate(45%, -45%);
  z-index: 200;
  text-align: center;
  font-weight: bold;
  font-size: 10px;
`;
