/**
 *
 * contextディレクトリィの各Providerをまとめ<GlobalProvider>コンポーネントを作成
 *
 */
import React from "react";
import { AuthProvider } from "../../contexts/auth";
export const GlobalContext: React.FC = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
