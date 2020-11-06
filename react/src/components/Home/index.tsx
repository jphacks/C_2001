import React from "react";
import styled from "styled-components";
import status1 from "./assets/status1.png";
import status2 from "./assets/status2.png";
import status3 from "./assets/status3.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import vector from "./assets/vector.png";
import ellipse from "./assets/ellipse.png";
import { Link } from "react-router-dom";
import { LOCATION_STATUS_PATH } from "../../services/utils/routeUrlPath";
import { useListenReqNoticeUsecase } from "../../services/usecase/currentUserLocation";

// 現在地の情報
//var status = "private";  // sleep,private, public
var status = "public";
//var status = "sleep";
var nowLocation = "スーパーマーケット"; // ""の時待機モードに

// 友達の情報
var data = [
  { locationName: "スーパーマーケット", iconImg: icon1, guysNum: 0 },
  { locationName: "コンビニ", iconImg: icon2, guysNum: 3 },
  { locationName: "薬局", iconImg: icon3, guysNum: 0 },
]; // 場所名、画像、友達人数
//var data = [];

export const Home = () => {
  const { requestNotice } = useListenReqNoticeUsecase();
  return (
    <>
      <Link to={LOCATION_STATUS_PATH}>
        <Coontainer>
          {requestNotice?.userStatus.type === "public" &&
            requestNotice?.userStatus.location === "" && (
              <StatusBoxNormal>
                <StatusTextBox>
                  <StatusKao src={status1} />
                  <StatusTextSubtitle>位置情報ステータス</StatusTextSubtitle>
                  <StatusTextNormal>スリープモード</StatusTextNormal>
                </StatusTextBox>
              </StatusBoxNormal>
            )}

          {requestNotice?.userStatus.type === "contract" && (
            <StatusBoxAbnormal>
              <StatusTextBox>
                <StatusKao src={status2} />
                <StatusTextSubtitle>位置情報ステータス</StatusTextSubtitle>
                <StatusTextAbnormal>
                  {requestNotice?.userStatus.location}
                </StatusTextAbnormal>
              </StatusTextBox>
            </StatusBoxAbnormal>
          )}

          {requestNotice?.userStatus.type === "public" &&
            requestNotice?.userStatus.location !== "" && (
              <StatusBoxNormal>
                <StatusTextBox>
                  <StatusKao src={status1} />
                  <StatusTextSubtitle>位置情報ステータス</StatusTextSubtitle>
                  <StatusTextNormal>待機モード</StatusTextNormal>
                </StatusTextBox>
              </StatusBoxNormal>
            )}

          {requestNotice?.userStatus.type === "private" && (
            <StatusBoxNormal>
              <StatusTextBox>
                <StatusKao src={status3} />
                <StatusTextSubtitle>位置情報ステータス</StatusTextSubtitle>
                <StatusTextNormal>非公開中...</StatusTextNormal>
              </StatusTextBox>
            </StatusBoxNormal>
          )}
        </Coontainer>
      </Link>

      {/* {(() => {
        ///// if スリープ
        if (status == "sleep") {
          return (
            <div>
              <StatusBoxNormal>
                <StatusTextBox>
                  <StatusKao src={status1} />
                  <StatusTextSubtitle>位置情報ステータス</StatusTextSubtitle>
                  <StatusTextNormal>スリープモード</StatusTextNormal>
                </StatusTextBox>
              </StatusBoxNormal>
            </div>
          );

          ///// if 公開かつ自分の位置が指定ポイントに近い時
        } else if (status == "public" && nowLocation != "") {
          return (
            <div>
              <StatusBoxAbnormal>
                <StatusTextBox>
                  <StatusKao src={status2} />
                  <StatusTextSubtitle>位置情報ステータス</StatusTextSubtitle>
                  <StatusTextAbnormal>{nowLocation}</StatusTextAbnormal>
                </StatusTextBox>
              </StatusBoxAbnormal>
            </div>
          );

          ///// if 公開かつ自分の位置が指定ポイントから遠い時
        } else if (status == "public" && nowLocation == "") {
          return (
            <div>
              <StatusBoxNormal>
                <StatusTextBox>
                  <StatusKao src={status1} />
                  <StatusTextSubtitle>位置情報ステータス</StatusTextSubtitle>
                  <StatusTextNormal>待機モード</StatusTextNormal>
                </StatusTextBox>
              </StatusBoxNormal>
            </div>
          );

          ///// if 非公開
        } else if (status == "private") {
          return (
            <div>
              <StatusBoxNormal>
                <StatusTextBox>
                  <StatusKao src={status3} />
                  <StatusTextSubtitle>位置情報ステータス</StatusTextSubtitle>
                  <StatusTextNormal>非公開中...</StatusTextNormal>
                </StatusTextBox>
              </StatusBoxNormal>
            </div>
          );
        }
      })()} */}
      <Line></Line>

      {
        ///// if スポットが存在する時
        (() => {
          if (data.length > 0)
            // dataが空配列の時エラーでる
            ///// for スポットの数繰り返し
            return data.map((d, index) => (
              <div>
                <Spot>
                  <Icon src={d.iconImg} />
                  <IconName>{d.locationName}</IconName>
                  {d.guysNum !== 0 && ( // 近くにいる人数が0でないなら数字を表示
                    <div>
                      <IconAlertPos>
                        <IconAlert src={ellipse}></IconAlert>
                        {/*todo 数字*/}
                        {/*<IconAlertNum>{d.guysNum}</IconAlertNum>*/}
                      </IconAlertPos>
                    </div>
                  )}
                </Spot>
              </div>
            ));
          ///// endfor
          ///// else スポットが存在しない時
          else
            return (
              <div>
                <NonSpot>場所を登録しよう！</NonSpot>
                <Arrow src={vector} />
              </div>
            );
        })()
        ///// endif
      }
    </>
  );
};

const Line = styled.hr`
  text-align: center;
  width: 100%;
`;

const Coontainer = styled.div`
  width: 330px;
  height: 94px;
  margin: 36px auto;
`;

const StatusBoxAbnormal = styled.div`
  /* ステータスがスリープモードまたは非公開の時 */
  position: relative;
  width: 100%;
  height: 100%;

  background: #fffbed;
  border: 3px solid #ff9900;
  border-radius: 6px;
`;
const StatusBoxNormal = styled.div`
  /* ステータスがスリープモードまたは公開の時 */
  position: relative;
  width: 100%;
  height: 100%;

  background: #fafafa;
  border-radius: 6px;
`;
const StatusTextBox = styled.div`
  position: absolute;
  display: flex;
  width: 228px;
  height: 56px;
  margin: 0 auto;
  padding-top: 19px;
  padding-left: 50px;
`;
const StatusTextSubtitle = styled.p`
  position: absolute;
  font-size: 11px;
  top: 30px;
  color: #c4c4c4;
  margin: 0 0 5px 0;
`;
const StatusTextAbnormal = styled.p`
  position: absolute;
  font-weight: bold;
  font-size: 14px;
  top: 48px;
  color: #ff9900;
  margin: 0;
`;
const StatusTextNormal = styled.p`
  position: absolute;
  font-weight: bold;
  font-size: 14px;
  top: 48px;
  color: #343434;
  margin: 0;
`;
const StatusKao = styled.img`
  position: absolute;
  width: 58px;
  height: 56px;
  left: 200px;
`;
const Spot = styled.button`
  position: relative;
  top: 8px;
  margin-bottom: 11px;
  border: 3px solid #c4c4c4;
  background: #fdfdfd;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 330px;
  height: 94px;
  box-sizing: border-box;
  border-radius: 6px;
  margin: 10px auto;
  padding: 0;
`;
const NonSpot = styled.div`
  position: absolute;
  width: 165px;
  height: 22px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  top: 551px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  color: #c4c4c4;
`;
const Arrow = styled.img`
  width: 5px;
  height: 60.5px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 600px;
`;
const Icon = styled.img`
  width: 42px;
  height: 42px;
`;
const IconName = styled.div`
  width: 162px;
  height: 21px;
  font-size: 15px;
`;
const IconAlertPos = styled.div`
  width: 50px;
  height: 32px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
const IconAlert = styled.img`
  width: 30px;
  height: 30px;

  bottom: 25px;
`;
const IconAlertNum = styled.span`
  width: 50px;
  height: 100px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  color: #000000;
`;
