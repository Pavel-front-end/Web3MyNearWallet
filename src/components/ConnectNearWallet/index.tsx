import React from "react";
import { login, logout } from "../../../utilities/near-utils";
import { Button } from "@mui/material";

const ConnectNearWallet = () => {
  return (
    <button onClick={login}>
      My Near Wallet
    </button>
  );
};

export default ConnectNearWallet;
