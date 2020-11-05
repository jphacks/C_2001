import React from "react";
import styled from "styled-components";
import back from "./assets/back.png";

export const FreindRegister = () => {
    return (
        <div>
            <Top>
                <Back>
                    <img src={back}/>
                </Back>
                <Title>友達追加</Title>
            </Top>
            <Form>
                <Input placeholder="IDで検索する"/>
            </Form>
            <Now>
                {(() => {
                    var list = [];
                    var data = [
                        {friendName: "mori", friendID: 123456789},
                        {friendName: "hayashi", friendID: 987654321},
                    ];
                    for (var i in data) {
                        list.push(
                            <NowFriend>
                                <FriendText>
                                    <Username>{data[i].friendName}</Username>
                                    <UserID>{data[i].friendID}</UserID>
                                </FriendText>
                            </NowFriend>
                        );
                    }
                    return (
                        <ul>
                            {list}
                        </ul>
                    );
                })()}
            </Now>
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

const Form = styled.div`
    width: 324px;
    margin: 0px auto 0 auto;
    text-align: center;
`;

const Input = styled.input`
    size:13;
    maxlength:50;
    width: 292px;
    background: #F6F6F6;
    border-radius: 8px;
    padding: 18px 16px;
    border: none; 
    outline: none; 
    font-size: 13px;
    font-weight: bold;
    margin-top: 24px;
    &::placeholder{
        color: #C4C4C4;
    }
`;

const Now = styled.div`
    width:330px;
    margin: 54px auto 0 auto;
`;

const NowFriend = styled.button`
    display: flex;
    width: 330px;
    height: 94px;
    background: #FDFDFD;
    border: 3px solid #C4C4C4;
    box-sizing: border-box;
    border-radius: 6px;
    margin: 10px auto;
    padding: 0;
    outline: none;
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

const UserID = styled.p`
    font-size: 13px;
    line-height: 15px;
    color: #C4C4C4;
    margin: 5px 0 0 0;
    text-align: left;
`;