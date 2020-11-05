import React from "react";
import styled from "styled-components";
import status1 from "./assets/status1.png";
import status2 from "./assets/status2.png";
import status3 from "./assets/status3.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";

export const Home = () => {
  return (
    <div>
      <StatusBox>
        <StatusText>
          <StatusTextSmall>
            <Subtitle>位置情報ステータス</Subtitle>
            <Status>スリープモード</Status>
          </StatusTextSmall>
          {/*if スリープモードの時*/}
          <StatusKao src={status1} />
          {/* endif */}

          {/*if 違うステータスの時の顔*/}
          {/*<Status_kao src={status2} />*/}
          {/* endif */}

          {/*if 非公開の時*/}
          {/*<Status_kao src={status3} />*/}
          {/* endif */}
        </StatusText>
      </StatusBox>
      {/* 罫線を短く */}
      <Line></Line>

      {/* if 登録地点が存在する時 */}
      {/* for 登録地点の数繰り返す */}
      <Spot>
        <Icon src={icon1} />
        <Icon_name>スーパーマーケット</Icon_name>
        {/* if 友達が近くにいる時に{変数：友達の数}を通知 */}
        <Icon_alert></Icon_alert>
        {/* endif  */}
      </Spot>
      {/* endfor */}
      {/* elseif 登録地点が存在しない時  */}

      {/* endif */}
    </div>
  );
};

const Line = styled.hr`
  text-align: center;
  width: 100%;
`;
const StatusBox = styled.div`
  /* ステータスがスリープモードまたは非公開の時 */
  background: #fafafa;
  border-radius: 6px;
  width: 330px;
  height: 94px;
  margin: 36px auto;
  /* ステータスがオンの時 */
  /* background: #FFFBED;
    border: 3px solid #FF9900;
    box-sizing: border-box; */
`;

const Subtitle = styled.p`
  font-size: 11px;
  line-height: 13px;
  color: #c4c4c4;
  margin: 0 0 5px 0;
`;

const Status = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #222222;
  margin: 0;
  /* ステータスがオンの時 */
  /* color: #FF9900; */
`;

const StatusText = styled.div`
  display: flex;
  width: 228px;
  height: 56px;
  margin: 0 auto;
  padding-top: 19px;
`;

const StatusTextSmall = styled.div`
  height: 56px;
  padding-top: 11px;
`;
const StatusKao = styled.img`
  width: 58px;
  height: 56px;
  margin-left: 56px;
`;
const Spot = styled.button`
  position: relative;
  top: 8px;
  width: 375px;
  height: 63px;
  margin: 0 auto;
  box-sizing: border-box;
  border-radius: 6px;
  font-weight: bold;
  background: #fffbed;
  border: 3px solid #ff9900;
  color: #343434;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.img`
  width: 42px;
  height: 42px;
`;
const Icon_name = styled.div`
  width: 162px;
  height: 21px;
`;
const Icon_alert = styled.img`
  width: 11px;
  height: 21px;
`;
