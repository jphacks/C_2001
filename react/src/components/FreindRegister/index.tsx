import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useAuth, User } from "../../contexts/auth";
import { useFriendRequest } from "../../hooks/useFriendRequest";
import { useSearchUserWithEmail } from "../../hooks/useSearchUserWithEmail";
import { CHAT_ROOM_PATH } from "../../services/utils/routeUrlPath";
import back from "./assets/back.png";

const TIMEOUT_COUNT = 500;

export const FreindRegister = () => {
  const { userCredential } = useAuth();
  const { foundUsers, searchUsersFn } = useSearchUserWithEmail();
  const [cleanTimoutId, setCleanTimoutId] = React.useState(0);
  const history = useHistory();

  const { request, requestFn } = useFriendRequest();

  const onSearchFn = (e: string) => {
    searchUsersFn(e);
  };

  const onChangedFn = (e: React.FormEvent<HTMLInputElement>) => {
    clearTimeout(cleanTimoutId);
    setCleanTimoutId(
      setTimeout(onSearchFn, TIMEOUT_COUNT, e.currentTarget.value)
    );
  };

  const oonSubmitRequestFn = (f: User) => {
    if (!userCredential.user?.id)
      throw new Error("cannot request friend ship. please login");

    requestFn(f, userCredential.user.id);
  };

  return (
    <div>
      <Top>
        <Back>
          <img src={back} alt="back" />
        </Back>
        <Title>友達追加</Title>
      </Top>
      <Form>
        <Input placeholder="メールアドレスで検索する" onChange={onChangedFn} />
      </Form>

      <Now>
        {request.status === "done" && (
          <div style={{ marginTop: 20, textAlign: "center" }}>
            <small style={{ display: "block", paddingBottom: 5 }}>
              申請完了!
            </small>
            <ReqDone
              onClick={() => {
                history.push(`${CHAT_ROOM_PATH}/${request.to.chatRooomId}`);
              }}
            >
              チャットする
            </ReqDone>
          </div>
        )}

        {foundUsers.length !== 0 &&
          foundUsers.map((u, i) => (
            <NowFriend
              key={i}
              onClick={() => {
                oonSubmitRequestFn(u);
              }}
            >
              <FriendText>
                <Username>{u.name}</Username>
                <UserID>{u.id}</UserID>
              </FriendText>
            </NowFriend>
          ))}
        {request.status === "progress" && (
          <small
            style={{
              textAlign: "right",
              display: "block",
              color: "#aaa",
              paddingRight: 5,
            }}
          >
            申請中...
          </small>
        )}

        {request.status === "already" && (
          <small
            style={{
              textAlign: "right",
              display: "block",
              color: "#aaa",
              paddingRight: 5,
            }}
          >
            友達追加済みです
          </small>
        )}

        {/* {(() => {
          var list = [];
          var data = [
            { friendName: "mori", friendID: 123456789 },
            { friendName: "hayashi", friendID: 987654321 },
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
          return <ul>{list}</ul>;
        })()} */}
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
  size: 13;
  maxlength: 50;
  width: 292px;
  background: #f6f6f6;
  border-radius: 8px;
  padding: 18px 16px;
  border: none;
  outline: none;
  font-size: 13px;
  font-weight: bold;
  margin-top: 24px;
  &::placeholder {
    color: #c4c4c4;
  }
`;

const Now = styled.div`
  width: 330px;
  margin: 54px auto 0 auto;
`;

const NowFriend = styled.button`
  display: flex;
  width: 330px;
  height: 94px;
  background: #fdfdfd;
  border: 3px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 6px;
  margin: 20px auto 0;
  padding: 0;
  outline: none;
  text-align: left;
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
  color: #c4c4c4;
  margin: 5px 0 0 0;
  text-align: left;
`;

const ReqDone = styled.button`
  border: none;
  outline: none;
  background: #ff9900;
  border-radius: 11px;
  padding: 12px 40px;
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
  margin: auto;
`;
