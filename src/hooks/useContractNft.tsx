import { useEffect, useState } from "react";
import { fetchContractNft } from "../api/fetchContractNft";
import { IListNft } from "../types/INearNft";

const useContractNft = () => {
  const [listNft, setListNft] = useState<IListNft[]>();
  useEffect(() => {
    fetchContractNft()
      .then((result) => setListNft(result))
      .catch((error) => console.log(error));
  }, []);
  return { listNft };
};

export default useContractNft;
