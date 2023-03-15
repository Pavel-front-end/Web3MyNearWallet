export const fetchContractNft = async () => {
  try {
    const response = await window.contract?.nft_tokens({
        from_index: "2",
      })
    return response;
  } catch (error) {
    console.log(error);
  }
};