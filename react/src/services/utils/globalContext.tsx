/**
 *
 * contextディレクトリィの各Providerをまとめ<GlobalProvider>コンポーネントを作成
 *
 */
import React from "react";
import { AuthProvider } from "../../contexts/auth";
import { LocationsProvider } from "../../contexts/location";
import { CurrentUserLocationProvider } from "../../contexts/currentUserLocation";
import { FriendListProvider } from "../../contexts/friendList";
import { ErrandProvider } from "../../contexts/errand";
export const GlobalContext: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <LocationsProvider>
        <FriendListProvider>
          <ErrandProvider>
            <CurrentUserLocationProvider>
              {children}
            </CurrentUserLocationProvider>
          </ErrandProvider>
        </FriendListProvider>
      </LocationsProvider>
    </AuthProvider>
  );
};
