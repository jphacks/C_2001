import React from "react";
import styled from "styled-components";
import addIcon from "./assets/addIcon.png";

export const FreindList = () => {
  return (
    <>
      <Top>
        <Header>
          <Title>チャット</Title>
          <AddIcon src={addIcon} alt="friend add icon" />
        </Header>
      </Top>
      <Content>
        <RoomList>
          <RoomItem>
            <RoomName>キャプテン</RoomName>
            <RoomMessage>メッセージ</RoomMessage>
          </RoomItem>
          <RoomItem>
            <RoomName>キャプテン</RoomName>
            <RoomMessage>メッセージ</RoomMessage>
          </RoomItem>
          <RoomItem>
            <RoomName>キャプテン</RoomName>
            <RoomMessage>メッセージ</RoomMessage>
          </RoomItem>
          <RoomItem>
            <RoomName>キャプテン</RoomName>
            <RoomMessage>メッセージ</RoomMessage>
          </RoomItem>
          <RoomItem>
            <RoomName>キャプテン</RoomName>
            <RoomMessage>メッセージ</RoomMessage>
          </RoomItem>
          <RoomItem>
            <RoomName>キャプテン</RoomName>
            <RoomMessage>メッセージ</RoomMessage>
          </RoomItem>
          <RoomItem>
            <RoomName>キャプテン</RoomName>
            <RoomMessage>メッセージ</RoomMessage>
          </RoomItem>
          <RoomItem>
            <RoomName>キャプテン</RoomName>
            <RoomMessage>メッセージ</RoomMessage>
          </RoomItem>
          <RoomItem>
            <RoomName>キャプテン</RoomName>
            <RoomMessage>メッセージ</RoomMessage>
          </RoomItem>
        </RoomList>
      </Content>
    </>
  );
};
const Top = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 60px 30px 30px;
  border-bottom: 1px solid #ededed;
  position: fixed;
  top: 0;
  z-index: 100;
  background-color: #ffffff;
`;

const Header = styled.header`
  max-width: 400px;
  margin: auto;
  position: relative;
`;

const Title = styled.p`
  text-align: center;
  font-size: 18px;
  line-height: 21px;
  color: #858585;
  overflow: hidden;
  margin: 0 auto;
  width: 162px;
`;

const AddIcon = styled.img`
  width: 32px;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;

const Content = styled.div`
  width: 100%;
  padding-top: 111px;
  padding-bottom: 102px;
  border-color: #fdfdfd;
`;
const RoomList = styled.ul`
  list-style: none;
`;

const RoomItem = styled.li`
  height: 120px;
  width: 100%;
  padding: 0 50px;
  box-sizing: border-box;
  border-bottom: 1px solid #ededed;
`;

const RoomName = styled.h3`
  font-size: 18px;
  padding-top: 40px;
`;

const RoomMessage = styled.p`
  font-size: 12px;
  color: #858585;
  padding-top: 4px;
`;
