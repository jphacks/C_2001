import React from "react";
import { Home } from "../Home";
import { Navigation } from "../Navigation";
import * as urls from "../../services/utils/routeUrlPath";
import { useAuth } from "../../contexts/auth";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { LocationStatus } from "../LocationStatus";
import { LocationAdd } from "../LocationAdd/inidex";
import { LocationRegiister } from "../LocationRegister/inidex";
import { FriendLocation } from "../FriendLocation";
import { ChatRoom } from "../ChatRoom";
import { FreindList } from "../FreindList";
import { FreindRegister } from "../FreindRegister";
import { Login } from "../Login";
import { Singup } from "../Signup";
import { Logout } from "../Logout";
import { useCurrentUserLocation } from "../../hooks/useCurrentUserLocation";

const hiddenNavUrlPath = [
  urls.ROOT_PATH,
  urls.LOGIN_PATH,
  urls.SIGNUP_PATH,
  urls.LOCATION_STATUS_PATH,
  urls.CHAT_ROOM_PATH,
  urls.FRIEND_REGISTER_PATH,
];

const NavigationContent = () => {
  const { pathname } = useLocation();
  const [navHidden, setNavHidden] = React.useState(false);

  React.useEffect(() => {
    const p = `/${pathname.split("/")[1]}`;
    setNavHidden(hiddenNavUrlPath.findIndex((v) => v === p) !== -1);
  }, [pathname]);

  return navHidden ? <></> : <Navigation />;
};

export const Root = () => {
  useAuth();
  const { requestNotice } = useCurrentUserLocation();

  React.useEffect(() => {}, [requestNotice]);
  return (
    <Router>
      <NavigationContent />
      <Switch>
        <Route path={urls.ROOT_PATH} exact>
          <Home />
        </Route>
        <Route path={urls.HOME_PATH}>
          <Home />
        </Route>
        <Route path={urls.LOCATION_STATUS_PATH}>
          <LocationStatus />
        </Route>
        <Route path={urls.LOCATION_ADD_PATH}>
          <LocationAdd />
        </Route>
        <Route path={urls.LOCATION_REGISTER_PATH}>
          <LocationRegiister />
        </Route>
        <Route path={urls.FRIEND_LOCATION_PATH}>
          <FriendLocation />
        </Route>
        <Route path={urls.CHAT_ROOM_ID_PATH}>
          <ChatRoom />
        </Route>
        <Route path={urls.FRIEND_LIST_PATH}>
          <FreindList />
        </Route>
        <Route path={urls.FRIEND_REGISTER_PATH}>
          <FreindRegister />
        </Route>

        <Route path={urls.LOGIN_PATH}>
          <Login />
        </Route>

        <Route path={urls.SIGNUP_PATH}>
          <Singup />
        </Route>

        <Route path={urls.LOGOUT_PATH}>
          <Logout />
        </Route>
      </Switch>
    </Router>
  );
};
