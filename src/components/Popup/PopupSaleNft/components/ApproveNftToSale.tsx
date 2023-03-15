import React, { FC } from "react";
import { approveNftToList } from "../api/approveNftToList";

interface Props {
  isSelectNft: string | undefined;
  priceNft: string | undefined;
  quantityNftForSale: number;
}

const ApproveNftToSale: FC<Props> = ({
  isSelectNft,
  priceNft,
  quantityNftForSale,
}) => {
  const handleApproveNftToList = () => {
    approveNftToList({ isSelectNft, priceNft })
      .then((result) => console.log(result))
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <button
        onClick={handleApproveNftToList}
        disabled={
          priceNft &&
          Number(priceNft) > 0 &&
          isSelectNft &&
          quantityNftForSale > 0
            ? false
            : true
        }
      >
        approve to sale nft
      </button>
      {quantityNftForSale < 1 && (
        <p>
          you don't have enough deposit to approve the sale of Nft
        </p>
      )}
    </div>
  );
};

export default ApproveNftToSale;
