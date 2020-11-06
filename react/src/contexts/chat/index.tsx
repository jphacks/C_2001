/**
 *
 *  Chat 関連のGlobal State Context
 *
 */
import React from "react";
import { useChatRoomUsecase } from "../../services/usecase/chat";
import { createCtx } from "../../services/utils/createCtx";

import { MessagesEntity } from "../../services/utils/fireStoreEntity";

export interface Message extends MessagesEntity {
  messageId: string;
}

export interface ChatRoom {
  member: Array<string>;
  messages: Array<Message>;
}

export interface ChatRoomContextInterface {
  room: ChatRoom;
  fetchMessages: (roomId: string) => void;
  sendMessages: (message: string, ownerId: string, roomId: string) => void;
  clearMessagesList: () => void;
  onLoad: boolean;
}

const [useChatRooom, ChatRoomContext] = createCtx<ChatRoomContextInterface>();

const ChatRoomProvider: React.FC = ({ children }) => {
  const chatRoom = useChatRoomUsecase();
  return (
    <ChatRoomContext.Provider value={chatRoom}>
      {children}
    </ChatRoomContext.Provider>
  );
};

export { useChatRooom, ChatRoomContext, ChatRoomProvider };
