/**
 *
 *
 * Auth 関連のGlobal State Context
 *
 */
import React from "react";
import { createCtx } from "../../services/utiils/createCtx";
import { useAuthUsecase } from "../../services/usecase/auth";
import firebase from "firebase";

export interface UserCredential {
  status: "in" | "out";
  user: User | null;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthContextInterface {
  userCredential: UserCredential;
  onAuthState: (user: User | null | undefined) => void;
  error: firebase.auth.Error | null;
  onLoad: boolean;
}

const [useAuth, AuthContext] = createCtx<AuthContextInterface>();

const AuthProvider: React.FC = ({ children }) => {
  const auth = useAuthUsecase();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider, useAuth };
