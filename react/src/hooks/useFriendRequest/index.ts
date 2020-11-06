import React from "react";
import { User } from "../../contexts/auth";
import {
  setCollection,
  setSubCollection,
  setSubDoc,
} from "../../services/firebase/store";
import {
  CHAT_ROOMS_QUERY,
  FRIENDS_LIST_QUERY,
} from "../../services/utils/fireeStoreQuery";
import {
  ChatRoomsEntity,
  FriendsListEntity,
} from "../../services/utils/fireStoreEntity";
import { useFriendList } from "../useFriendList";

export const useFriendRequest = () => {
  const { friendList, fetchFriendList } = useFriendList();
  const [request, setRequest] = React.useState<{
    to: {
      uid: string;
      name: string;
      chatRooomId: string;
    };
    status: "none" | "progress" | "already" | "done";
  }>({
    to: {
      uid: "",
      name: "",
      chatRooomId: "",
    },
    status: "none",
  });

  const requestFn = async (friend: User, ownerId: string) => {
    setRequest({
      ...request,
      status: "progress",
    });
    if (friendList.length === 0) {
      await fetchFriendList(ownerId);
    }
    const isFriend = friendList.findIndex((v) => v.uid === friend.id);

    if (isFriend > -1) {
      setRequest({ ...request, status: "already" });
      return;
    }

    const roomId = await createChatRoom(friend.id, ownerId);
    await createFriendShip(friend.id, ownerId, roomId);

    setRequest({
      to: {
        uid: friend.id,
        name: friend.name,
        chatRooomId: roomId,
      },
      status: "done",
    });
  };

  const createChatRoom = async (
    friendId: string,
    ownerid: string
  ): Promise<string> =>
    await setCollection(`${CHAT_ROOMS_QUERY}`, {
      members: [ownerid, friendId],
    } as ChatRoomsEntity);

  const createFriendShip = async (
    friendId: string,
    ownerId: string,
    roomId: string
  ) => {
    const friendQuery: FriendsListEntity = { chatRoomId: roomId };

    await setSubDoc(`${FRIENDS_LIST_QUERY(ownerId)}/${friendId}`, friendQuery);
    await setSubDoc(`${FRIENDS_LIST_QUERY(friendId)}/${ownerId}`, friendQuery);
  };

  return { request, requestFn };
};
