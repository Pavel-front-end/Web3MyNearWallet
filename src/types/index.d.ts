export {};

declare global {
  interface Window {
    nearInitPromise: any;
    near: any;
    walletConnection: any;
    accountId: string;
    configInfo: any;
    utils: any;
    contract: any;
    marketPlaceContract: any;
    account: any;
    balance: any;
  }
}