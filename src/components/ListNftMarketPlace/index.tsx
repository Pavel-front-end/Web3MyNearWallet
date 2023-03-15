import React, { FC, useState } from "react";
import ConnectNearWallet from "../ConnectNearWallet";
import PopupSaleNft from "../Popup/PopupSaleNft/PopupSaleNft";
import NftMarketPlace from "./components/NftMarketPlace";
import useNftMarket from "./hooks/useNftMarket";

const ListNftMarketPlace: FC = () => {
  const { listNft } = useNftMarket();
  const [isOpen, setOpen] = useState(false);

  const openPopupSaleNft = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <div>
        {listNft?.map((nftMarket) => (
          <NftMarketPlace nftMarket={nftMarket} key={nftMarket.token_id} />
        ))}
      </div>
      <div>
        <p>
          Put on sale your own NFT
        </p>
        {window.walletConnection.isSignedIn() ? (
          <button onClick={openPopupSaleNft}>
            sale own nft
          </button>
        ) : (
          <ConnectNearWallet />
        )}
      </div>
      {window.walletConnection.isSignedIn() && (
        <PopupSaleNft open={isOpen} onClose={openPopupSaleNft} />
      )}
    </>
  );
};

export default ListNftMarketPlace;
