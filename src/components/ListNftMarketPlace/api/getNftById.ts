export const getNftById = async (tokenId: string) => {
    try {
      const response = await window.contract?.nft_token({
        token_id: tokenId,
        })
        return response;
        
    } catch (error) {
      console.log(error);
    }
  };