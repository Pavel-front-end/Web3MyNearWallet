export const fetchNftMarket = async () => {
    try {
      const response = await window.marketPlaceContract?.get_sales_by_nft_contract_id({
          nft_contract_id:
            process.env.REACT_APP_NFT_CONTRACT_NAME || "nf.sonaapp.testnet",
          from_index: "0",
        })
        return response;
        
    } catch (error) {
      console.log(error);
    }
  };