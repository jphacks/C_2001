import React from "react";
import styled from "styled-components";

import back from "./assets/back.png"
import icon7 from "./assets/icon7.png"
import icon5 from "./assets/icon5.png"

export const LocationRegiister = () => {
    return (
        <div>
            <Top>
                <Back src={back}/>
                <Title>特定の場所を登録する</Title>
            </Top>

            <Searcherea>
                <Icon src={icon7}/>
                <Search type="text" name="Search" placeholder="場所を検索する"/>
            </Searcherea>

            <Result>
                <ResultBox>
                    <ResultText>
                        <Place>〇〇デパート</Place>
                        <Adless>東京都千代田区千代田１−１</Adless>
                    </ResultText>
                    <Addicon src={icon5}/>
                </ResultBox>
            </Result>
        </div>
    );
};

const Top = styled.div`
margin-top: 61px;
padding: 0 25px;
overflow: hidden;
`;

const Back = styled.img`
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
width: 180px;
`;

const Searcherea = styled.div`
width: 330px;
background: #F6F6F6;
border-radius: 8px;
padding: 16px 13px;
box-sizing: border-box;
border: none;
outline: none;
font-size: 13px;
font-weight: bold;
margin: 26px auto 0 auto;
`;

const Icon = styled.img`
float: left;
margin-right: 12px;
`;

const Search = styled.input`
background: #F6F6F6;
width: 260px;
border: none;
outline: none;
font-size: 13px;
font-weight: bold;
size:13px;
maxlength : 50;
&::placeholder{
    color: #C4C4C4;
}
`;

const Result = styled.div`
margin-top: 40px;
`;

const ResultBox = styled.button`
display: flex;
border: none;
outline: none;
background: transparent;
width: 330px;
height: 94px;
background: #FAFAFA;
border: 3px solid #FAFAFA;
box-sizing: border-box;
border-radius: 6px;
margin: 0 auto;
padding: 0 ;
outline: none;
{/* 押した時 */}
{/* background: #FFFBED;
    border: 3px solid #FF9900; */}
`;

const ResultText = styled.div`
height: 36px;
margin: auto 0 auto 36px;
`;

const Place = styled.p`
text-align: left;
font-weight: bold;
font-size: 14px;
line-height: 16px;
color: #343434;
margin: 0;
`;

const Adless = styled.p`
font-size: 11px;
line-height: 13px;
color: #343434;
margin: 7px 0 0 0 ;
`;

const Addicon = styled.img`
width: 22px;
height: 22px;
margin: auto 31px auto auto;
{/* 押した時 */}
{/* display: none; */}
`;