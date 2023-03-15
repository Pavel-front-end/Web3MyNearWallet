import { useEffect, useState } from "react";
import { IListNftMarketPlace } from "../../../../types/INearNft";
import { fetchNftMarket } from "../api/fetchNftMarket";

const useNftMarket = () => {
  const [listNft, setListNft] = useState<IListNftMarketPlace[]>();

  useEffect(() => {
    fetchNftMarket()
      .then((result) => setListNft(result))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return { listNft };
};

export default useNftMarket;
