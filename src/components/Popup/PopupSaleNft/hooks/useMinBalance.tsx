import { useEffect, useState } from "react";
import { getMinimumBalance } from "../api/getMinimumBalance";

const useMinBalance = () => {
  const [minBalance, setMinBalance] = useState<string>();

  useEffect(() => {
    getMinimumBalance().then((result) => setMinBalance(result));
  }, []);
  return { minBalance };
};

export default useMinBalance;
