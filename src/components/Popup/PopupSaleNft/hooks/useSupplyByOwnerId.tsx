import { useEffect, useState } from "react";
import { getSupplyByOwnerId } from "../api/getSupplyByOwnerId";

const useSupplyByOwnerId = () => {
  const [amountOwnerNft, setAmountOwnerNft] = useState<string>();

  useEffect(() => {
    getSupplyByOwnerId().then((result) => setAmountOwnerNft(result));
  }, []);
  return { amountOwnerNft };
};

export default useSupplyByOwnerId;
