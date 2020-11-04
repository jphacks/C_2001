import React from "react";
import { useHistory } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";

export const Logout = () => {
  const logoutFn = useLogout();
  const history = useHistory();

  React.useEffect(() => {
    (async () => {
      await logoutFn();
      history.push("/");
    })();
  }, []);
  return <div style={{ textAlign: "center" }}>Logout...</div>;
};
