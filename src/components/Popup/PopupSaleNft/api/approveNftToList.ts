import { parseNearAmount } from "near-api-js/lib/utils/format";

interface PropsApproveNft {
    isSelectNft: string | undefined,
    priceNft: string | undefined
}

export async function approveNftToList ({isSelectNft, priceNft} : PropsApproveNft) {
    await window.contract.nft_approve(
      {
        token_id: isSelectNft,
        account_id:
          process.env.REACT_APP_NFT_MARKETPLACE_CONTRACT_NAME ||
          "market.sonaapp.testnet",
        msg: '{"sale_conditions": "' + parseNearAmount(priceNft) + '" }',
      },
      "300000000000000", // attached GAS (at least must be 1 yoctoNEAR)
      "10000000000000000000000" // attached deposit in yoctoNEAR (optional)
    );
  };