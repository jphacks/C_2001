/**
 *
 * Auth関連のHooks(currentUserの取得、パスワード再設定など)
 *
 */
import React from "react";
import { AuthContextInterface, UserCredential } from "../../contexts/auth";

export const useAuthUsecase = (): AuthContextInterface => {
  const [userCredential, setUserCredential] = React.useState<UserCredential>({
    status: "out",
    user: null,
  });

  const [onLoad, setOnLoad] = React.useState<boolean>(false);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    return () => {};
  }, []);

  return { userCredential, error, onLoad };
};
