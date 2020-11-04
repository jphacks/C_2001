/**
 *
 *
 * Auth 関連のGlobal State Context
 *
 */
import React from "react";
import { createCtx } from "../../services/utiils/createCtx";
import { useAuthUsecase } from "../../hooks/useAuth";

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
  error: Error | null;
  onLoad: boolean;
}

const [useAuth, AuthContext] = createCtx<AuthContextInterface>();

const AuthProvider: React.FC = ({ children }) => {
  const auth = useAuthUsecase();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider, useAuth };
