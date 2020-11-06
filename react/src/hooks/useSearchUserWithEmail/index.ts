import React from "react";
import { User } from "../../contexts/auth";
import { getCollectionRef } from "../../services/firebase/store";
import { USERS_QUERY } from "../../services/utils/fireeStoreQuery";
import { UsersEntity } from "../../services/utils/fireStoreEntity";

const regEmail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const useSearchUserWithEmail = () => {
  const [foundUsers, setFoundUsers] = React.useState<Array<User>>([]);

  const searchUsersFn = async (email: string) => {
    if (!email.match(regEmail)) {
      setFoundUsers([]);
      return;
    }
    const _u = await getCollectionRef(USERS_QUERY)
      .where("email", "==", email)
      .get();

    const foundUser: Array<User> = _u.docs.map((d) => {
      const _d = d.data() as UsersEntity;
      return {
        id: d.id,
        name: _d.name,
        email: _d.email,
      };
    });
    setFoundUsers(foundUser);
  };

  return { foundUsers, searchUsersFn };
};
