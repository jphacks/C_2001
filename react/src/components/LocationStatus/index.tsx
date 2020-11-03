import React from "react";
import styled from "styled-components";

/*todo 不明!!*/

import back from "./assets/back.png";
import status1 from "./assets/status1.png";
import status2 from "./assets/status2.png";
import status3 from "./assets/status3.png";

export const LocationStatus = () => {
  return (
    <div>
      <Top>
        {/*todo 不明!!*/}
        <img src={back} alt="back" />
        <Title>位置情報ステータス</Title>
      </Top>

      <Status_box>
        <Status_text>
          <Status_text_small>
            <Subtitle>位置情報ステータス</Subtitle>
            <Status>スリープモード</Status>
          </Status_text_small>
          {/*スリープモードの時の顔*/}
          {/*todo 不明!!*/}
          {/*<Status_kao src={status1} />*/}

          {/*違うステータスの時の顔*/}
          {/*<status_kao src={status2} />*/}

          {/*非公開の時の顔*/}
          {/*<status_kao src={status3} />*/}
        </Status_text>
        <p className="advaice">買い物に出かけるとステータスが変わるよ！</p>
      </Status_box>

      <Range>
        <Koukai>ステータスの公開範囲</Koukai>
        <Koukai1>
          <p>友だち全員に公開</p>
        </Koukai1>
        <Koukai2>
          <p>誰にも公開しない(非公開)</p>
        </Koukai2>
      </Range>
    </div>
  );
};

const Top = styled.div`
  margin-top: 61px;
  padding: 0 25px;
`;

const Back = styled.img`
  float: left;
`;

const Title = styled.p`
  text-align: center;
  font-size: 18px;
  line-height: 21px;
  color: #858585;
  overflow: hidden;
  margin: 0;
  width: 162px;
  margin-left: 65.24px;
`;

const Status_box = styled.div`
  /* ステータスがスリープモードまたは非公開の時 */
  background: #fafafa;
  border-radius: 6px;
  width: 330px;
  height: 118px;
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

const Status_text = styled.div`
  display: flex;
  width: 228px;
  height: 56px;
  margin: 0 auto;
  padding-top: 19px;
`;

const Status_text_small = styled.div`
  height: 56px;
  padding-top: 11px;
`;

const Status_kao = styled.img`
  width: 58px;
  height: 56px;
  margin-left: 56px;
`;

const Advaice = styled.p`
  font-weight: bold;
  font-size: 11px;
  line-height: 13px;
  color: #c4c4c4;
  text-align: center;
  padding-top: 16px;
  margin: 0;
`;

const Range = styled.div`
  margin-top: 35px;
  text-align: center;
`;

const Koukai = styled.p`
  font-size: 14px;
  line-height: 16px;
  color: #858585;
  margin-left: 25px;
  text-align: left;
`;

const Koukai1 = styled.button`
  width: 330px;
  height: 63px;
  margin: 0 auto;
  box-sizing: border-box;
  border-radius: 6px;
  text-align: center;
  font-weight: bold;
  /* オンの時 */
  background: #fffbed;
  border: 3px solid #ff9900;
  color: #343434;
  /* オフの時 */
  /* background: #FAFAFA;
    border: 3px solid #FAFAFA;
    color: #C4C4C4; */
`;

const Koukai2 = styled.button`
  width: 330px;
  height: 63px;
  margin: 17px auto;
  box-sizing: border-box;
  border-radius: 6px;
  text-align: center;
  font-weight: bold;
  /* オンの時 */
  /* background: #FFFBED;
    border: 3px solid #FF9900;
    color: #343434; */
  /* オフの時 */
  background: #fafafa;
  border: 3px solid #fafafa;
  color: #c4c4c4;
`;
