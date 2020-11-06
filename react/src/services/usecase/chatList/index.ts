import React from "react";
import { useAuth } from "../../../contexts/auth";
import { ChatList, ChatListContextInterface } from "../../../contexts/chatList";
import {
  getDoc,
  getSubCollection,
  getSubCollectionRef,
} from "../../firebase/store";
import {
  FRIENDS_LIST_QUERY,
  USERS_QUERY,
  CHAT_MESSAGE_QUERY,
} from "../../utils/fireeStoreQuery";
import {
  FriendsListEntity,
  MessagesEntity,
  UsersEntity,
} from "../../utils/fireStoreEntity";

export const useChatListUsecase = (): ChatListContextInterface => {
  const { userCredential } = useAuth();
  const [friends, setFriends] = React.useState<Array<ChatList>>([]);
  const [onLoad, setOnLoad] = React.useState(false);

  const fetchChatList = async () => {
    setOnLoad(false);
    try {
      if (!userCredential.user?.id) return;
      const uid = userCredential.user.id;
      const list = await getSubCollection(`${FRIENDS_LIST_QUERY(uid)}`);

      if (!list) return;

      let friendList: Array<ChatList> = [];

      for (const friend of list) {
        const user = await getDoc(`${USERS_QUERY}/${friend.id}`);
        if (!user?.id) throw new Error("cannot read friend user");
        const chat = friend.data as FriendsListEntity;

        const _u = user.data as UsersEntity;

        const message = await getSubCollectionRef(
          `${CHAT_MESSAGE_QUERY(chat.chatRoomId)}`
        )
          .orderBy("createdAt", "desc")
          .limit(1)
          .get();
        const md = message.docs[0]?.data() as MessagesEntity | undefined;
        const m = md?.content?.message
          ? md.content.message.substr(0, 15) + "..."
          : "";

        friendList = [
          ...friendList,
          {
            name: _u.name,
            email: _u.email,
            chatRoomId: chat.chatRoomId,
            message: m,
            uid: user.id,
          } as ChatList,
        ];
      }

      setFriends(friendList);
      setOnLoad(true);
    } catch (error) {
      console.error(error);
      setOnLoad(true);
    }
  };

  React.useEffect(() => {
    setOnLoad(false);
    (async () => {
      await fetchChatList();
    })();
  }, [userCredential.user]);

  return { friends, fetchChatList, onLoad };
};
