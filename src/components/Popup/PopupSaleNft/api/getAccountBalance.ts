export const getAccountBalance = async () => {
    const response = await window.marketPlaceContract.storage_balance_of({
      account_id: window.accountId,
    });
    return response;
  };