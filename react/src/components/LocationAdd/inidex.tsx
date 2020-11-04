import React from "react";
import styled from "styled-components";
import icon1 from "./assets/icon1.png"
import icon2 from "./assets/icon2.png"
import icon3 from "./assets/icon3.png"
import icon4 from "./assets/icon4.png"
import icon5 from "./assets/icon5.png"
import icon6 from "./assets/icon6.png"

export const LocationAdd = () => {
    return (
        <div>
            <Top>
                <Title>場所登録</Title>
            </Top>

            <Range>
                <NowLocationOn>
                    <LocationIcon src={icon1}/>
                    <LocationText>
                        <LocationName>スーパーマーケット</LocationName>
                    </LocationText>
                    <CheckIconOFF src={icon5}/>
                </NowLocationOn>

                <NowLocationOFF>
                    <LocationIcon src={icon2}/>
                    <LocationText>
                        <LocationName>コンビニ</LocationName>
                    </LocationText>
                    <CheckIconOn src={icon5}/>
                </NowLocationOFF>
                <NowLocationOFF>
                    <LocationIcon src={icon3}/>
                    <LocationText>
                        <LocationName>薬局</LocationName>
                    </LocationText>
                    <CheckIconOn src={icon5}/>
                </NowLocationOFF>


                {/* ここにどんどん追加されていく */}
                <NowLocationOFF>
                    <LocationIcon src={icon4}/>
                    <LocationText>
                        <LocationName>○○デパート</LocationName>
                    </LocationText>
                    <CheckIconOn src={icon5}/>
                </NowLocationOFF>
            </Range>
            <Range>
                <NowLocationOFF>
                    <LocationIcon src={icon4}/>
                    <LocationText>
                        <LocationName>特定の場所を登録する</LocationName>
                    </LocationText>
                    <CheckIconOn src={icon6}/>
                </NowLocationOFF>
            </Range>
        </div>
    );
};

const Top = styled.div`
    margin-top: 61px;
    padding: 0 25px;
    overflow: hidden;
`;


const Title = styled.p`
    text-align: center;
    font-size: 14px;
    line-height: 21px;
    color: #858585;
    overflow: hidden;
    margin: 0 auto;
    width: 162px;
`;

const Range = styled.div`
  margin-top: 35px;
  text-align: center;
`;


const NowLocationOn = styled.button`

  display: flex;
  width: 330px;
  height: 63px;
  margin: 17px auto;
  box-sizing: border-box;
  border-radius: 6px;
  // text-align: left;
    text-align: center;
  font-weight: bold;
  /* オンの時 */
  background: #fffbed;
  border: 3px solid #ff9900;
  color: #343434;
  /* オフの時 */
  // background: #FAFAFA;
  // border: 3px solid #FAFAFA;
  // color: #C4C4C4;
`;

const NowLocationOFF = styled.button`

  display: flex;
  width: 330px;
  height: 63px;
  margin: 17px auto;
  box-sizing: border-box;
  border-radius: 6px;
  // text-align: left;
    text-align: center;
  font-weight: bold;
  /* オンの時 */
  // background: #fffbed;
  // border: 3px solid #ff9900;
  // color: #343434;
  /* オフの時 */
  background: #FAFAFA;
  border: 3px solid #FAFAFA;
  color: #C4C4C4;
`;

const LocationText = styled.div`
    text-align: center;
    height: 20px;
    margin: auto;
`;

const LocationName = styled.p`
    font-size: 18px;
    line-height: 21px;
    color: #343434;
    margin: 0;
`;

const LocationIcon = styled.img`
    width: 34px;
    height: 34px;
    margin: auto 11px
`;


const CheckIconOn = styled.img`
    width: 22px;
    height: 22px;
    margin: auto 11px
`;

const CheckIconOFF = styled.img`
    visibility:hidden;
    width: 34px;
    height: 34px;
    margin: auto 11px
`;
