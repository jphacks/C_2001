import React from "react";
import { User } from "../../contexts/auth";
import { getSubCollectionRef } from "../../services/firebase/store";
import { USERS_QUERY } from "../../services/utils/fireeStoreQuery";

export const useSearchUserWithEmail = () => {
  const [users, setUsers] = React.useState<Array<User>>([]);

  const searchUser = async (email: string) => {
    const _u = await getSubCollectionRef(USERS_QUERY)
      .where("email", "==", email)
      .get();
    
    // _u.
  };

  return;
};
