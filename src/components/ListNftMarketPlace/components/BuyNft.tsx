import React, { FC } from "react";
import { buyNft } from "../api/buyNft";

interface Props {
  tokenId: string;
  saleConditions: string;
}

const BuyNft: FC<Props> = ({ tokenId, saleConditions }) => {
    const handleBuyNft = () => {
    buyNft(tokenId, saleConditions)
      .then((result) => console.log(result))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <button onClick={handleBuyNft}>
      Buy NFT
    </button>
  );
};

export default BuyNft;
