import React from "react";
import styled from "styled-components";
import { useSearchUserWithEmail } from "../../hooks/useSearchUserWithEmail";
import back from "./assets/back.png";

const TIMEOUT_COUNT = 2000;
const regEmail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const FreindRegister = () => {
  const { foundUsers, searchUsersFn } = useSearchUserWithEmail();

  const [cleanTimoutId, setCleanTimoutId] = React.useState(0);

  const onSearchFn = (e: string) => {
    if (!e.match(regEmail)) return;
    searchUsersFn(e);
  };

  const onChangedFn = (e: React.FormEvent<HTMLInputElement>) => {
    clearTimeout(cleanTimoutId);
    console.log(cleanTimoutId);
    setCleanTimoutId(
      setTimeout(onSearchFn, TIMEOUT_COUNT, e.currentTarget.value)
    );
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
        {foundUsers.length !== 0 &&
          foundUsers.map((u, i) => (
            <NowFriend key={i}>
              <FriendText>
                <Username>{u.name}</Username>
                <UserID>{u.id}</UserID>
              </FriendText>
            </NowFriend>
          ))}
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
  margin: 10px auto;
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
