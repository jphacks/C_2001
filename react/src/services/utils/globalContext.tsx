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
import { ChatListProvider } from "../../contexts/chatList";
import { ChatRoomProvider } from "../../contexts/chat";
import { NoticeProvider } from "../../contexts/notice";

export const GlobalContext: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <LocationsProvider>
        <FriendListProvider>
          <ErrandProvider>
            <CurrentUserLocationProvider>
              <ChatListProvider>
                <ChatRoomProvider>
                  <NoticeProvider>{children}</NoticeProvider>
                </ChatRoomProvider>
              </ChatListProvider>
            </CurrentUserLocationProvider>
          </ErrandProvider>
        </FriendListProvider>
      </LocationsProvider>
    </AuthProvider>
  );
};
