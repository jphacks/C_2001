import React from "react";
import {
  ChatRoom,
  ChatRoomContextInterface,
  Message,
} from "../../../contexts/chat";
import firebase from "firebase";
import {
  getDoc,
  getSubCollectionRef,
  setSubCollection,
  updateDoc,
} from "../../firebase/store";
import {
  CHAT_MESSAGE_QUERY,
  CHAT_ROOMS_QUERY,
  NOTICES_QUERY,
} from "../../utils/fireeStoreQuery";
import { ChatRoomsEntity } from "../../utils/fireStoreEntity";
import { timestampToDateRecursively } from "../../utils/timestampToDateRecursively";

export const useChatRoomUsecase = (): ChatRoomContextInterface => {
  const [room, setRoom] = React.useState<ChatRoom>({
    member: [],
    messages: [],
  });
  const [onLoad, setOnLoad] = React.useState(false);

  let unsubscribe = () => {};

  const sendMessages = async (
    message: string,
    senderId: string,
    receiveId: string,
    roomId: string
  ) => {
    const updateQuery = {
      ownerId: senderId,
      content: {
        message: message,
      },
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    };

    await setSubCollection(`${CHAT_MESSAGE_QUERY(roomId)}`, updateQuery);

    await updateDoc(`${NOTICES_QUERY}/${receiveId}`, {
      chat: firebase.firestore.FieldValue.arrayUnion(roomId),
    });
  };

  const fetchMessages = async (roomId: string) => {
    try {
      const _room = await getDoc(`${CHAT_ROOMS_QUERY}/${roomId}`).then(
        (d) => d?.data as ChatRoomsEntity
      );

      if (!_room) {
        setOnLoad(true);
        return;
      }

      unsubscribe = getSubCollectionRef(`${CHAT_MESSAGE_QUERY(roomId)}`)
        .orderBy("createdAt", "asc")
        .onSnapshot((snap) => {
          const _m = snap.docChanges().map((change) => {
            // データが追加された時
            const m = change.doc.data() as Message;
            return {
              ...m,
              createdAt: timestampToDateRecursively(m.createdAt),
              messageId: change.doc.id,
            };
          });

          console.log(room);
          setRoom({
            member: _room.members,
            messages: [...room.messages, ..._m],
          });
        });

      setOnLoad(true);
    } catch (error) {
      console.error(error);
      setOnLoad(true);
      unsubscribe();
    }
  };

  return { room, fetchMessages, sendMessages, onLoad };
};
