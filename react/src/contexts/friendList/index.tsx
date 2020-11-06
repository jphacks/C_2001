import React from "react";

import { createCtx } from "../../services/utils/createCtx";

import { FriendsListEntity } from "../../services/utils/fireStoreEntity";
import { useFriendListUseCase } from "../../services/usecase/friendList";

export interface FriendList extends FriendsListEntity {
  uid: string;
}

export interface FriendListContextInterface {
  friendList: Array<FriendList>;
  fetchFriendList: (uid: string) => Promise<void>;
  onLoad: boolean;
}

const [useFriendList, FriendListContext] = createCtx<
  FriendListContextInterface
>();

const FriendListProvider: React.FC = ({ children }) => {
  const friends = useFriendListUseCase();
  return (
    <FriendListContext.Provider value={friends}>
      {children}
    </FriendListContext.Provider>
  );
};

export { FriendListContext, FriendListProvider, useFriendList };
