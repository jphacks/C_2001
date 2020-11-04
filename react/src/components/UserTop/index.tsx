import React from "react";
import styled from "styled-components";
import logo from "./assets/logo.png"

export const UserTop = () => {
    return (
        <div>
            <Select>
                <Logo src={logo}/>
                <Signup><p>はじめてこのアプリを使う</p></Signup>
                <Login><p>使ったことある方はこちらからログイン</p></Login>
            </Select>
        </div>
    );
};

const Select = styled.div`
width: 240px;
margin: 0 auto;
text-align: center;
`;

const Logo = styled.img`
width: 153px;
height: 162px;
margin: 100px 0 40px 0;
`;

const Signup = styled.button`
background-color: transparent;
border: none;
cursor: pointer;
outline: none;
padding: 0;
appearance: none;
background: #FF9900;
border-radius: 11px;
padding: 8px 36px;
font-size: 14px;
font-weight: bold;
line-height: 21px;
color: #FFFFFF;
margin: 40px auto;
`;


const Login = styled.button`
background-color: transparent;
border: none;
cursor: pointer;
outline: none;
padding: 0;
appearance: none;
font-weight: bold;
font-size: 13px;
line-height: 15px;
color: #FF9900;
outline: none;
border: none;
border-bottom: 2px solid #FF9900;
`;