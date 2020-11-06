import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../contexts/auth";
import { useErrand } from "../../hooks/useErrand";
import { useLocations } from "../../hooks/useLocations";
import { FRIEND_LOCATION_PATH } from "../../services/utils/routeUrlPath";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import icon5 from "./assets/icon5.png";
import icon6 from "./assets/icon6.png";

const localStoreData = {
  superMaquette: {
    LocationName: "スーパーマーケット",
    LocationIcon: icon1,
  },
  convenienceStore: {
    LocationName: "コンビニ",
    LocationIcon: icon2,
  },
  drugstore: {
    LocationName: "薬局",
    LocationIcon: icon3,
  },
};

export const LocationAdd = () => {
  const { locations, fetchLocation } = useLocations();
  const { userCredential } = useAuth();
  const { setCurrentRequestLocation } = useErrand();
  const history = useHistory();

  const linkToLocationReq = (location: string, type: string = "default") => {
    setCurrentRequestLocation(location);
    history.push(FRIEND_LOCATION_PATH);
  };

  React.useEffect(() => {
    if (!userCredential.user?.id) return;

    fetchLocation(userCredential.user.id);
  }, [userCredential.user]);
  return (
    <div>
      <Top>
        <Title>場所登録</Title>
      </Top>

      <Range>
        <NowLocationOFF>
          <LocationIcon src={icon4} />
          <LocationText>
            <LocationName>特定の場所を登録する</LocationName>
          </LocationText>
          <CheckIconOn src={icon6} />
        </NowLocationOFF>
        {/* {(() => {
          var list = [];

          // selection 登録してあれば 1
          var data = [
            {
              LocationName: "スーパーマーケット",
              selection: 0,
              LocationIng: icon1,
            },
            { LocationName: "コンビニ", selection: 1, LocationIng: icon2 },
            { LocationName: "薬局", selection: 0, LocationIng: icon3 },
          ];

          for (var i in data) {
            list.push(
              <div>
                {(() => {
                  if (data[i].selection == 0)
                    return (
                      <div>
                        <NowLocationOFF>
                          <LocationIcon src={data[i].LocationIng} />
                          <LocationText>
                            <LocationName>{data[i].LocationName}</LocationName>
                          </LocationText>
                          <CheckIconOn src={icon5} />
                        </NowLocationOFF>
                      </div>
                    );
                  else if (data[i].selection == 1)
                    return (
                      <div>
                        <NowLocationOn>
                          <LocationIcon src={data[i].LocationIng} />
                          <LocationText>
                            <LocationName>{data[i].LocationName}</LocationName>
                          </LocationText>
                          <CheckIconOFF src={icon5} />
                        </NowLocationOn>
                      </div>
                    );
                })()}
              </div>
            );
          }
          return <div>{list}</div>;
        })()}

        {(() => {
          var list = [];
          // selection 登録してあれば 1
          var data = [
            { LocationName: "○○デパート", selection: 0 },
            { LocationName: "○○コンビニ", selection: 1 },
          ];

          for (var i in data) {
            list.push(
              <div>
                {(() => {
                  if (data[i].selection == 0)
                    return (
                      <div>
                        <NowLocationOFF>
                          <LocationIcon src={icon4} />
                          <LocationText>
                            <LocationName>{data[i].LocationName}</LocationName>
                          </LocationText>
                          <CheckIconOn src={icon5} />
                        </NowLocationOFF>
                      </div>
                    );
                  else if (data[i].selection == 1)
                    return (
                      <div>
                        <NowLocationOn>
                          <LocationIcon src={icon4} />
                          <LocationText>
                            <LocationName>{data[i].LocationName}</LocationName>
                          </LocationText>
                        </NowLocationOn>
                      </div>
                    );
                })()}
              </div>
            );
          }
          return <div>{list}</div>;
        })()} */}

        {locations.defaultLocations.map((d, i) => {
          return (
            <NowLocationOFF
              key={i}
              onClick={() => {
                linkToLocationReq(d);
              }}
            >
              <LocationIcon src={localStoreData[d].LocationIcon} />
              <LocationText>
                <LocationName>{localStoreData[d].LocationName}</LocationName>
              </LocationText>
              <CheckIconOn src={icon5} />
            </NowLocationOFF>
          );
        })}

        {locations.originalLocations.length !== 0 &&
          locations.originalLocations.map((d, i) => {
            if (!d) return <></>;
            return (
              <NowLocationOFF key={i}>
                <LocationIcon src={icon4} />
                <LocationText>
                  <LocationName>{d.name}</LocationName>
                </LocationText>
                <CheckIconOn src={icon5} />
              </NowLocationOFF>
            );
          })}
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
  background: #fafafa;
  border: 3px solid #fafafa;
  color: #c4c4c4;
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
  text-align: center;
`;

const LocationIcon = styled.img`
  width: 34px;
  height: 34px;
  margin: auto 11px;
`;

const CheckIconOn = styled.img`
  width: 22px;
  height: 22px;
  margin: auto 11px;
`;

const CheckIconOFF = styled.img`
  visibility: hidden;
  width: 34px;
  height: 34px;
  margin: auto 11px;
`;
