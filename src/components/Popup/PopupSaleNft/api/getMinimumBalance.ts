export const getMinimumBalance = async () => {
    const response = await window.marketPlaceContract.storage_minimum_balance();
    return response;
  };