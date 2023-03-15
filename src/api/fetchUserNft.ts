export const fetchUserNft = async () => {
    try {
      const response = await window.contract?.nft_tokens_for_owner({
        account_id: window.accountId,
        from_index: "1",
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };