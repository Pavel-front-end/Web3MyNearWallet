import {
  connect,
  Contract,
  keyStores,
  WalletConnection,
  Account,
  utils,
} from "near-api-js";
import { getConfig } from "../config/near-config";

const nearConfig = getConfig(process.env.NODE_ENV || "testnet");

const contractName = process.env.REACT_APP_NFT_CONTRACT_NAME || "nft.sonaapp.testnet";
const MarketPlaceContractName = process.env.REACT_APP_NFT_MARKETPLACE_CONTRACT_NAME || "market.sonaapp.testnet";

// Initialize contract & set global variables
export async function initContract() {
  // Initialize connection to the NEAR testnet
  const near = await connect(
    Object.assign(
      { deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } },
      nearConfig
    )
  );

  window.near = near;
  // Initializing Wallet based Account. It can work with NEAR testnet wallet that
  // is hosted at https://wallet.testnet.near.org
  window.walletConnection = new WalletConnection(near, null);

  // Getting the Account ID. If still unauthorized, it's just empty string
  window.accountId = window.walletConnection.getAccountId() ? window.walletConnection.getAccountId() : 'barka07.testnet';

  // Making Config Info Public
  window.configInfo = nearConfig;

  //making utils public
  window.utils = utils;

  // Creating new account object
  //@ts-ignore
  window.account = await near.account(window.accountId);
  window.balance = await window.account.getAccountBalance()

  //Initializing our contract APIs by contract name and configuration
  window.contract = new Contract(
    window.walletConnection.account(),
    contractName,
    {
      // View methods are read only. They don't modify the state, but usually return some value.
      viewMethods: ["nft_token", "nft_total_supply", "nft_tokens", "nft_supply_for_owner", "nft_tokens_for_owner"],
      // Change methods can modify the state. But you don't receive the returned value when called.
      changeMethods: ["nft_mint", "nft_approve", "nft_transfer"],
    }
  );

  //Initializing our contract APIs by NFT MarketPlace contract name and configuration
  window.marketPlaceContract = new Contract(
    window.walletConnection.account(),
    MarketPlaceContractName,
    {
      // View methods are read only. They don't modify the state, but usually return some value.
      viewMethods: ["storage_minimum_balance", "storage_balance_of", "get_supply_sales", "get_supply_by_owner_id", "get_sales_by_owner_id", "get_supply_by_nft_contract_id", "get_sales_by_nft_contract_id", "get_sale"], // view methods do not change state but usually return a value
      changeMethods: ["storage_deposit", "storage_withdraw", "remove_sale", "update_price", "offer"], // change methods modify state
    }
  );
}

export function logout() {
  window.walletConnection.signOut();
  // reload page
  window.location.replace(window.location.origin + window.location.pathname);
}

export function login() {
  // Allow the current app to make calls to the specified contract on the
  // user's behalf.
  // This works by creating a new access key for the user's account and storing
  // the private key in localStorage.
  window.walletConnection.requestSignIn(contractName);
}
