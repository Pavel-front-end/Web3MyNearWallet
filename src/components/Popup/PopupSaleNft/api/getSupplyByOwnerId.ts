export const getSupplyByOwnerId = async () => {
    const response = await window.marketPlaceContract.get_supply_by_owner_id({
      account_id: window.accountId,
    });
    return response;
  };