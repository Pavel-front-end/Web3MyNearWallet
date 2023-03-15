import { useEffect, useState } from 'react'
import { fetchUserNft } from '../api/fetchUserNft';
import { IListNft } from '../types/INearNft';

const useUserNft = () => {
    const [listUserNft, setListUserNft] = useState<IListNft[]>();
    useEffect(() => {
        fetchUserNft()
          .then((result) => setListUserNft(result))
          .catch((error) => console.log(error));
      }, []);
  return {listUserNft}
}

export default useUserNft
