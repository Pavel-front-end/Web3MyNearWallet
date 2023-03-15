import { useEffect, useState } from "react";
import { IListNft, IListNftMarketPlace } from "../../../../types/INearNft";
import { getNftById } from "../api/getNftById";

const useNftMarketById = (nftMarket: IListNftMarketPlace) => {
  const [nft, setNft] = useState<IListNft>();

  useEffect(() => {
    getNftById(nftMarket.token_id)
      .then((result) => setNft(result))
      .catch((error) => {
        console.log(error);
      });
  });
  return { nft };
};

export default useNftMarketById;
