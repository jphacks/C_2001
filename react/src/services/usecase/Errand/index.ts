import React from "react";
import {
  Candidates,
  ErrandContextInterface,
  CandidateFriend,
} from "../../../contexts/errand";
import { useAuth } from "../../../hooks/useAuth";
import { useFriendList } from "../../../hooks/useFriendList";
import { setDoc, subscribeDocSnapshoot, updateDoc } from "../../firebase/store";
import {
  REQUEST_NOTICES_QUERY,
  RESPONCE_NOTICES_QUERY,
} from "../../utils/fireeStoreQuery";
import { ResponceNoticeEntity } from "../../utils/fireStoreEntity";

const LISTEN_UNSUBSCRIBE_TIMEOUT = 10000;

export const useErrandUsecase = (): ErrandContextInterface => {
  const [listen, setListen] = React.useState(false);
  const [candidates, setCandidates] = React.useState<Candidates | null>(null);
  const [currentRequestLocation, setCurrentRequestLocation] = React.useState(
    ""
  );
  const friends = useFriendList();

  const { userCredential } = useAuth();

  const listenResponseStateFn = (spot: string) => {
    if (!userCredential.user?.id) {
      console.error("cannot listen responce; Please login");
      return;
    }

    setCurrentRequestLocation(spot);

    const unsubscribe = subscribeDocSnapshoot(
      `${RESPONCE_NOTICES_QUERY}/${userCredential.user.id}`,
      (snapshot) => {
        if (!snapshot.exists) return;

        const data = snapshot.data() as ResponceNoticeEntity;

        let _candidates: {
          now: Array<CandidateFriend>;
          before: Array<CandidateFriend>;
        } = {
          now: [],
          before: [],
        };

        if (candidates !== null && candidates[spot]) {
          _candidates.before = candidates[spot].now.filter((v) => {
            if (v === null) return false;

            return !data.candidates.includes(v.uid);
          });
        }

        _candidates.now = data.candidates.map((v) => {
          return {
            uid: v,
            updatedAt: new Date(),
          };
        });

        console.log("listen responce", data);

        setCandidates({
          ...candidates,
          [spot]: {
            now: _candidates.now,
            before: _candidates.before,
          },
        });
      }
    );

    setTimeout(() => {
      console.log("unsubscribe listen");
      unsubscribe();
    }, LISTEN_UNSUBSCRIBE_TIMEOUT);
  };

  const requestToCandidatesFn = async (spot: string) => {
    try {
      if (!userCredential.user?.id) {
        console.error("cannot fetch frinds list; Please login");
        return;
      }

      if (!friends.friendList.length) {
        await friends.fetchFriendList(userCredential.user.id);
      }

      setCurrentRequestLocation(spot);

      await updateDoc(`${RESPONCE_NOTICES_QUERY}/${userCredential.user.id}`, {
        candidates: [],
      });

      console.log(
        "setDoc",
        `${RESPONCE_NOTICES_QUERY}/${userCredential.user.id}`
      );
      friends.friendList.forEach((friend) => {
        if (!friend) return;
        updateDoc(`${REQUEST_NOTICES_QUERY}/${friend.uid}`, {
          requestStatus: {
            clientUserId: userCredential.user?.id,
            type: "request",
          },
        });
      });
      setListen(true);
    } catch (error) {
      setListen(false);
      throw error;
    }
  };

  React.useEffect(() => {
    if (friends.friendList.length) return;

    if (!userCredential.user?.id) return;

    friends.fetchFriendList(userCredential.user.id);
  }, [userCredential.user]);

  return {
    candidates,
    currentRequestLocation,
    setCurrentRequestLocation,
    requestToCandidatesFn,
    listenResponseStateFn,
    listen,
  };
};
