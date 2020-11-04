import React from "react";
import { Home } from "../Home";
import { Navigation } from "../Navigation";
import * as urls from "../../services/utiils/routeUrlPath";
import { useAuth } from "../../contexts/auth";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

export const Root = () => {
  const { userCredential } = useAuth();
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path={urls.ROOT_PATH}>
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
        <Route path={urls.CAHT_ROOM_PATH}>
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
