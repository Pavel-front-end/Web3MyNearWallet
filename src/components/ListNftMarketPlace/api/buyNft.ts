export const buyNft = async (tokenId: string, saleConditions: string) => {
    await window.marketPlaceContract.offer(
      {
        nft_contract_id:
          process.env.REACT_APP_NFT_CONTRACT_NAME || "nf.sonaapp.testnet",
        token_id: tokenId, // tokenId of the listed nft
      },
      "300000000000000", // attached GAS (at least must be 1 yoctoNEAR)
      saleConditions + "0" // amount of the offer
    );
  };