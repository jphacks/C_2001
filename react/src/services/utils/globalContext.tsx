/**
 *
 * contextディレクトリィの各Providerをまとめ<GlobalProvider>コンポーネントを作成
 *
 */
import React from "react";
import { AuthProvider } from "../../contexts/auth";
import { LocationsProvider } from "../../contexts/location";
import { CurrentUserLocationProvider } from "../../contexts/currentUserLocation";
export const GlobalContext: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <LocationsProvider>
        <CurrentUserLocationProvider>{children}</CurrentUserLocationProvider>
      </LocationsProvider>
    </AuthProvider>
  );
};
