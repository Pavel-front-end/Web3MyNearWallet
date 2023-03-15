import { useEffect, useState } from "react";
import { getAccountBalance } from "../api/getAccountBalance";

const useAccountBalance = () => {
  const [accountBalance, setAccountBalance] = useState<string>();

  useEffect(() => {
    getAccountBalance().then((result) => setAccountBalance(result));
  }, []);
  return { accountBalance };
};

export default useAccountBalance;
