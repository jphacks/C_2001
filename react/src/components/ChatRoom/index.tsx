import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../contexts/auth";
import { useNotice } from "../../contexts/notice";
import { useChatRooom } from "../../hooks/useChat";
import back from "./assets/back.png";

export const ChatRoom = () => {
  const { room, fetchMessages, sendMessages, onLoad } = useChatRooom();
  const { id }: { id: string } = useParams(); //chat room id
  const { userCredential } = useAuth();
  const [message, setMessage] = React.useState("");
  const { notice, removeChatNoticeItem } = useNotice();

  const onSubmitFn = () => {
    if (!message) return;
    const uid = userCredential.user?.id as string;
    const friendId = room.member.filter((v) => uid !== v);
    sendMessages(message, uid, friendId[0], id);
    setMessage("");
  };

  React.useEffect(() => {
    fetchMessages(id);
  }, []);

  React.useEffect(() => {
    if (notice.chat.indexOf(id) === -1) return;
    removeChatNoticeItem(id);
  }, [notice]);

  return (
    <div>
      <Top>
        <Back type="button">
          <img src={back} />
        </Back>
        <Title>
          {(() => {
            var list = [];

            // choice 0 : 相手 , 1 : 自分
            var friendName = "もりもり";

            list.push(<Username>{friendName}</Username>);
            return <div>{list}</div>;
          })()}
        </Title>
      </Top>

      <Content>
        {onLoad &&
          room.messages.map((v) => {
            return v.ownerId === userCredential.user?.id ? (
              <ChatMyself>{v.content.message}</ChatMyself>
            ) : (
              <ChatFriends>{v.content.message}</ChatFriends>
            );
          })}

        {/* {(() => {
          var list = [];

          // choice 0 : 相手 , 1 : 自分
          var data = [
            { comment: "醤油買ってきて", choice: 1 },
            { comment: "OK", choice: 0 },
            { comment: "ありがとう", choice: 1 },
            { comment: "家で待ってる", choice: 1 },
          ];

          for (var i in data) {
            list.push(
              <div>
                {(() => {
                  if (data[i].choice == 1)
                    return (
                      <div>
                        <ChatMyself>{data[i].comment}</ChatMyself>
                      </div>
                    );
                  else if (data[i].choice == 0)
                    return (
                      <div>
                        <ChatFriends>{data[i].comment}</ChatFriends>
                      </div>
                    );
                })()}
              </div>
            );
          }
          return <div>{list}</div>;
        })()} */}
      </Content>

      <Form>
        <Message
          id=""
          type="text"
          name="name"
          placeholder="メッセージを送る"
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setMessage(e.currentTarget.value);
          }}
          value={message}
        />
        <Button type="submit" onClick={onSubmitFn}>
          送信
        </Button>
      </Form>
    </div>
  );
};

const Top = styled.div`
  padding: 61px 0 10px 0;
  overflow: hidden;
  position: fixed;
  text-align: center;
  z-index: 10;
  background-color: #ffffff;
  width: 100vw;
`;

const Back = styled.button`
  border: none;
  outline: none;
  background: transparent;
  padding: 0;
  width: 24px;
  height: 24px;
  float: left;
  margin-left: 25px;
`;

const Title = styled.div`
  font-size: 18px;
  line-height: 21px;
  color: #858585;
  width: 300px;
  margin: 0 auto;
`;

const Username = styled.p`
  margin: 0;
`;

const Content = styled.div`
  padding: 110px 20px 0 20px;
  height: 600px;
  overflow-y: scroll;
`;

const ChatMyself = styled.p`
  background: #f6f6f6;
  border-radius: 13px;
  display: block;
  position: relative;
  float: right;
  clear: both;
  max-width: 75%;
  float: right;
  margin: 12px 0;
  padding: 12px;
`;

const ChatFriends = styled.p`
  background: #ffffff;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 13px;
  display: block;
  position: relative;
  float: left;
  clear: both;
  max-width: calc(100% - 120px);
  margin: 12px 0;
  padding: 12px;
`;

const Form = styled.div`
  background: #f6f6f6;
  border-radius: 8px;
  border: none;
  width: 289px;
  padding: 10px 20px;
  margin: 10px auto 0 auto;
`;

const Message = styled.input`
  width: 80%;
  background: #f6f6f6;
  border: none;
  padding: 10px 0;
  outline: none;
  autocomplete: off;
  &::placeholder {
    color: #c4c4c4;
  }
`;

const Button = styled.button`
  border: none;
  outline: none;
  background: transparent;
  padding: 2px;
  background: #ff9900;
  border-radius: 17px;
  width: 50px;
  height: 27px;
  color: #ffffff;
  opacity: 0.5;
`;
