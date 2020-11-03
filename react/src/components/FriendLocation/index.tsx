import React from "react";
import styled from "styled-components";
import back from "./assets/back.png";
import chat2 from "./assets/chat2.png";
import chat1 from "./assets/chat1.png";


export const FriendLocation = () => {
    return (
        <div>

            <Top>
                <Back>
                    <img src={back}/>
                </Back>
                <Title>スーパーマーケット</Title>
            </Top>

            <Now>
                <Headline>いまいるかも！</Headline>
                <NowFriend>
                    <FriendText>
                        <Username>キャプテン</Username>
                        <Time>12:00</Time>
                    </FriendText>
                    <ChatIcon src={chat2}/>
                </NowFriend>
            </Now>

            <Past>
                <Headline>さっきまでいたかも！</Headline>
                <PastFriend>
                    <FriendText>
                        <Username>キャプテン</Username>
                        <Time>12:00</Time>
                    </FriendText>
                    <ChatIcon src={chat1}/>
                </PastFriend>

            </Past>
        </div>
    );
};

const Top = styled.div`
    margin-top: 61px;
    padding: 0 25px;
    overflow: hidden;
`;


const Back = styled.button`
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

const Now = styled.div`
    width:330px;
    margin: 54px auto 0 auto;
`;

const Past = styled.div`
    width:330px;
    margin: 54px auto 0 auto;
`;

const Headline = styled.p`
    font-size: 14px;
    line-height: 16px;
    color: #858585;
`;

const NowFriend = styled.button`
    display: flex;
    width: 330px;
    height: 94px;
    background: #FDFDFD;
    border: 3px solid #FF9900;
    box-sizing: border-box;
    border-radius: 6px;
    margin: 0 auto;
    padding: 0;
`;

const FriendText = styled.div`
    height: 41px;
    margin: auto 0 auto 36px;
`;

const Username = styled.p`
    font-size: 18px;
    line-height: 21px;
    color: #343434;
    margin: 0;
`;

const Time = styled.p`
    font-size: 13px;
    line-height: 15px;
    color: #C4C4C4;
    margin: 5px 0 0 0;
    text-align: left;
`;

const ChatIcon = styled.img`
    width: 34px;
    height: 34px;
    margin: auto 31px auto auto;
`;

const PastFriend = styled.div`
    display: flex;
    width: 330px;
    height: 94px;
    background: #FAFAFA;
    box-sizing: border-box;
    border-radius: 6px;
    margin: 0 auto;
    padding: 0;
`;