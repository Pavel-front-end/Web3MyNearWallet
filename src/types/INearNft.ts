export interface IListNft {
  approved_account_ids: {},
  token_id: string,
  metadata: {
    title: string,
    description: string,
    media: string
  }
}

export interface IListNftMarketPlace {
  approval_id: number,
  nft_contract_id: string,
  owner_id: string
  sale_conditions: string
  token_id: string
}