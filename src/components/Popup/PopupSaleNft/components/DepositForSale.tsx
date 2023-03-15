import React, { FC } from "react";

const DepositForSale: FC = () => {
  const handleDepositForSale = async () => {
    await window.marketPlaceContract.storage_deposit(
      {
        account_id: window.accountId, //If not supplied the amount will be deposited to signer
      },
      "300000000000000",
      "10000000000000000000000"
    );
  };
  return (
    <button
      onClick={handleDepositForSale}
      sx={{ maxWidth: "15rem" }}
    >
      Deposit for one sale
    </button>
  );
};

export default DepositForSale;
