import React from "react";
import { FriendListContextInterface } from "../../../contexts/friendList";
import { useAuth } from "../../../hooks/useAuth";
import { getSubCollection } from "../../firebase/store";
import { FRIENDS_LIST_QUERY } from "../../utils/fireeStoreQuery";
import { FriendsListEntity } from "../../utils/fireStoreEntity";

export const useFriendListUseCase = (): FriendListContextInterface => {
  const { userCredential } = useAuth();
  const [friendList, setFriendList] = React.useState<
    Array<FriendsListEntity | null>
  >([null]);
  const [onLoad, setOnLoad] = React.useState<boolean>(false);

  const fetchFriendList = async (uid: string) => {
    try {
      const collectionData = await getSubCollection(
        `${FRIENDS_LIST_QUERY(uid)}`
      );

      if (!collectionData) return;

      const f = collectionData.map((d) => {
        return {
          chatRoomId: d.data?.chatId,
        } as FriendsListEntity;
      });

      setFriendList([...friendList, ...f]);
      setOnLoad(true);
    } catch (error) {
      console.log(error);
      setOnLoad(true);
    }
  };

  React.useEffect(() => {
    setOnLoad(false);
    (async () => {
      if (!userCredential.user?.id) return;
      try {
        const uid = userCredential.user.id;
        const collectionData = await getSubCollection(
          `${FRIENDS_LIST_QUERY(uid)}`
        );

        if (!collectionData) return;

        const f = collectionData.map((d) => {
          return {
            chatRoomId: d.data?.chatId,
          } as FriendsListEntity;
        });

        setFriendList([...friendList, ...f]);
        setOnLoad(true);
      } catch (error) {
        console.log(error);
        setOnLoad(true);
      }
    })();
  }, [userCredential.user]);

  return { friendList, fetchFriendList, onLoad };
};
