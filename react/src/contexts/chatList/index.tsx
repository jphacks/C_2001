/**
 *
 * ChatList関連のGlobal State Context
 *
 */
import React from "react";
import { useChatListUsecase } from "../../services/usecase/chatList";
import { createCtx } from "../../services/utils/createCtx";
import { FriendList } from "../friendList";

export interface ChatList extends FriendList {
  name: string;
  email: string;
  message: string;
}

export interface ChatListContextInterface {
  friends: Array<ChatList>;
  onLoad: boolean;
}

const [useChatList, ChatListContext] = createCtx<ChatListContextInterface>();

const ChatListProvider: React.FC = ({ children }) => {
  const friends = useChatListUsecase();
  return (
    <ChatListContext.Provider value={friends}>
      {children}
    </ChatListContext.Provider>
  );
};

export { useChatList, ChatListContext, ChatListProvider };
