import React from "react";
import styled from "styled-components";
import addFriend from "./assets/icon8.png";

export const FreindList = () => {
  return( 
    <div>
          <Top>
            <AddFriend>
              <img src={addFriend}/>
            </AddFriend>
            <Title>チャット</Title>
          </Top>
          <List>
            <Friend>
              <FriendText>
                  <Place>スーパーマーケット</Place>
                  <Username>キャプテン<ChatIcon/></Username>
                  <Message>にんじん買ってきて欲しい...</Message>       
              </FriendText>
            </Friend>
            <Friend>
              <FriendText>
                  <Place></Place>
                  <Username>ちゃす<ChatIcon/></Username>
                  <Message>チャットの文章が入ります</Message>    
              </FriendText>
            </Friend>
            <Friend>
              <FriendText>
                  <Place> </Place>
                  <Username>きしくん<ChatIcon/></Username>
                  <Message></Message>
              </FriendText>
            </Friend>
          </List>
    </div>
  );
};

/**
 * header
 */
const Top = styled.div`
    margin-top: 61px;
    padding: 0 25px;
    overflow: hidden;
`;


const AddFriend = styled.button`
    float: left;
    border: none;
    outline: none;
    background: transparent;
    padding: 0;
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

/**
 *  body
 */
const List = styled.div`
    border-top: 1px solid #F3F1F1;
    margin-top: 10px;
`;

const Friend = styled.button`
    width: 100%;
    height: 94px;
    background: #FDFDFD;
    border-top: none;
    border-bottom: 1px solid #F3F1F1;
    border-right: none;
    border-left: none;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0;
`;

const FriendText = styled.div`
    height: 41px;
    margin: auto 0 auto 36px;
`;

const Place = styled.p`
    font-size: 11px;
    line-height: 15px;
    color: #FF9900;
    margin: 0 0 5px 0;
    text-align: left;
`;

const Username = styled.p`
    display: flex;  
    justify-content: space-between;
    font-size: 18px;
    line-height: 21px;
    color: #343434;
    margin: 5px 0 5px 0;
    text-align: left;
`;

const ChatIcon = styled.div`
    width: 20px;
    height: 20px;
    background: #FF9900;
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    -o-border-radius: 50px;
    -ms-border-radius: 50px; 
    border-radius: 50px;
    margin: auto 31px auto auto;
`;

const Message = styled.p`
    font-size: 11px;
    line-height: 15px;
    color: #C4C4C4;
    margin: 5px 0 0 0;
    text-align: left;
`;


