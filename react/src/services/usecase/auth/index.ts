/**
 *
 * Auth関連のHooks(currentUserの取得、パスワード再設定など)
 *
 */
import React from "react";
import firebase from "firebase";
import {
  AuthContextInterface,
  User,
  UserCredential,
} from "../../../contexts/auth";
import { FireAuth } from "../../firebase/auth";
import { getDoc, setDoc } from "../../firebase/store";
import { USERS_QUERY } from "../../utiils/fireeStoreQuery";

export const useAuthUsecase = (): AuthContextInterface => {
  const [userCredential, setUserCredential] = React.useState<UserCredential>({
    status: "out",
    user: null,
  });
  const [onAuthStateToggle, setOnAuthStateToggle] = React.useState(false);

  const [onLoad, setOnLoad] = React.useState<boolean>(false);
  const [error, setError] = React.useState<firebase.auth.Error | null>(null);

  const onAuthState = (credential: User | null | undefined) => {};

  React.useEffect(() => {
    setOnLoad(false);
    const unsubscribe = FireAuth.onAuthStateChanged(
      async (user) => {
        setOnLoad(true);
        console.log("onAuthStateChanged", user);
        const uid = user?.uid;
        if (!uid) {
          setUserCredential({
            status: "out",
            user: null,
          });

          return;
        }

        const userStore = await getDoc(`${USERS_QUERY}/${uid}`);

        if (!userStore) {
          const _user = {
            id: uid,
            email: user?.email ? user.email : "",
            name: user?.displayName ? user.displayName : "",
          };
          await setDoc(`${USERS_QUERY}/${uid}`, _user);

          setUserCredential({
            status: "in",
            user: _user,
          });
          return;
        }

        setUserCredential({
          status: "in",
          user: {
            id: userStore.id ? userStore.id : "",
            email: userStore.data?.email ? userStore.data.email : "",
            name: userStore.data?.name ? userStore.data.name : "",
          },
        });
      },
      (e) => {
        setOnLoad(true);
        setError(e);
        setUserCredential({
          status: "out",
          user: null,
        });
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);

  return { userCredential, onAuthState, error, onLoad };
};
