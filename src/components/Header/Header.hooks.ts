import { useState } from "react";

export const useHeader = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const setLoggedInStatus = (loggedIn: boolean) => {
    setLoggedIn(loggedIn);
  };

  return { loggedIn, setLoggedInStatus };
};
