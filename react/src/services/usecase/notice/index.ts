import React from "react";
import { useAuth } from "../../../contexts/auth";
import { Notice, NoticeContextInterface } from "../../../contexts/notice";
import firebase from "firebase";
import {
  subscribeDoc,
  subscribeDocSnapshoot,
  updateDoc,
} from "../../firebase/store";
import { NOTICES_QUERY } from "../../utils/fireeStoreQuery";
import { NoticesEntity } from "../../utils/fireStoreEntity";

export const useNoticeUsecase = (): NoticeContextInterface => {
  const [notice, setNotice] = React.useState<Notice>({ chat: [] });
  const { userCredential } = useAuth();

  const removeChatNoticeItem = (id: string) => {
    if (!userCredential.user?.id) return;
    updateDoc(`${NOTICES_QUERY}/${userCredential.user.id}`, {
      chat: firebase.firestore.FieldValue.arrayRemove(id),
    });

    setNotice({
      chat: notice.chat.filter((v) => v !== id),
    });
  };

  const removeDuplicateValues = ([...array]): Array<string> => {
    return array.filter((value, index, self) => self.indexOf(value) === index);
  };

  React.useEffect(() => {
    if (!userCredential.user?.id) return;
    const unsubscribe = subscribeDocSnapshoot(
      `${NOTICES_QUERY}/${userCredential.user.id}`,
      (snapshot) => {
        if (!(snapshot.exists && userCredential.user?.id)) return;
        const uid = userCredential.user.id;
        const data = snapshot.data() as NoticesEntity;
        const _d = removeDuplicateValues([...notice.chat, ...data.chat]);
        console.log("_d", _d);
        setNotice({
          chat: _d,
        });
      }
    );

    return () => {
      unsubscribe();
    };
  }, [userCredential.user]);

  return { notice, removeChatNoticeItem };
};
