import { Box, Typography } from "@mui/material";
import { formatNearAmount } from "near-api-js/lib/utils/format";
import React, { FC } from "react";
import { IListNftMarketPlace } from "../../../../types/INearNft";
import MediaNftToken from "../../MediaNftToken";
import BuyNft from "./BuyNft";
import ConnectNearWallet from "../../ConnectNearWallet";
import useNftMarketById from "../hooks/useNftMarketById";

interface NftProps {
  nftMarket: IListNftMarketPlace;
}

const NftMarketPlace: FC<NftProps> = ({ nftMarket }) => {
  const { nft } = useNftMarketById(nftMarket);

  return (
    <div>
      <p>{nft?.metadata.title || "Undefined"}</p>
      <p>{nft?.metadata.description}</p>
      {nft?.metadata.media && <MediaNftToken url={nft.metadata.media} />}
      <p>
        Price: {formatNearAmount(nftMarket.sale_conditions, 12)}
      </p>
      {window.walletConnection.isSignedIn() ? (
        <BuyNft
          tokenId={nftMarket.token_id}
          saleConditions={nftMarket.sale_conditions}
        />
      ) : (
        <ConnectNearWallet />
      )}
    </div>
  );
};

export default NftMarketPlace;
