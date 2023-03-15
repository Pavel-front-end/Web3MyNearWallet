import { Box, Modal, TextField, Typography } from "@mui/material";
import { formatNearAmount } from "near-api-js/lib/utils/format";
import React, { FC, useEffect, useState } from "react";
import useUserNft from "../../../../hooks/useUserNft";
import MediaNftToken from "../../MediaNftToken";
import ApproveNftToSale from "./components/ApproveNftToSale";
import DepositForSale from "./components/DepositForSale";
import useAccountBalance from "./hooks/useAccountBalance";
import useMinBalance from "./hooks/useMinBalance";
import useSupplyByOwnerId from "./hooks/useSupplyByOwnerId";
import { useStyles } from "./styles";

interface Props {
  onClose: () => any;
  open: boolean;
}

const PopupSaleNft: FC<Props> = ({ onClose, open }) => {
  const { classes } = useStyles();
  const { minBalance } = useMinBalance();
  const { accountBalance } = useAccountBalance();
  const { amountOwnerNft } = useSupplyByOwnerId();
  const {listUserNft} = useUserNft()
  const [isSelectNft, setSelectNft] = useState<string>();
  const [priceNft, setPriceNft] = useState<string | undefined>();
  const [quantityNftForSale, setQuantityNftForSale] = useState<number>(0);



  useEffect(() => {
    accountBalance &&
      amountOwnerNft &&
      setQuantityNftForSale(
        Number(formatNearAmount(accountBalance, 12)) * 100 -
          Number(amountOwnerNft)
      );
  }, [accountBalance, amountOwnerNft]);

  const listNftToSale = listUserNft?.map((token) => {
    if (Object.keys(token.approved_account_ids).length === 0) {
      return (
        <Box
          key={token.token_id}
          sx={{
            maxWidth: "20rem",
            margin: "1rem 0",
            padding: "0 1rem 1rem",
            background:
              token.token_id === isSelectNft ? "#e5e5e5" : "transparent",
          }}
          onClick={() => setSelectNft(token.token_id)}
        >
          <Typography variant="h2">{token.metadata.title}</Typography>
          <Typography variant="body1">{token.metadata.description}</Typography>
          {token.metadata.media && <MediaNftToken url={token.metadata.media} />}
        </Box>
      );
    } else {
      return null;
    }
  });

  const userNfts = listUserNft ? (
    <>
      <Typography variant="h3">
        Select the NFT you would like to sell
      </Typography>
      <Typography variant="body2" sx={{ margin: "1rem 0" }}>
        Sona NFT
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {listNftToSale}
      </Box>
      <Box>
        <TextField
          type="number"
          variant="outlined"
          label="price of your NFT"
          value={priceNft}
          onChange={(e) => setPriceNft(e.target.value)}
        />
        <ApproveNftToSale
          isSelectNft={isSelectNft}
          priceNft={priceNft}
          quantityNftForSale={quantityNftForSale}
        />
      </Box>
    </>
  ) : (
    <Typography variant="h2" sx={{ marginBottom: "1rem" }}>
      You do not yet own the NFT
    </Typography>
  )

  return (
    <Modal open={open} onClose={onClose}>
      <div className={classes.popupAuth}>
        <Typography variant="body1">
          Minimum deposit required for 1 sale:{" "}
          {minBalance && formatNearAmount(minBalance, 12)}
        </Typography>
        <Typography variant="body1">
          Balance: {accountBalance && formatNearAmount(accountBalance, 12)}
        </Typography>
        <DepositForSale />
        <Typography variant="h3" sx={{ margin: "1rem 0" }}>
          Quantity approve for sale nft: {quantityNftForSale}
        </Typography>
        <Box>
          {userNfts}
        </Box>
      </div>
    </Modal>
  );
};

export default PopupSaleNft;
