import { useEffect, useState } from "react";
import { initContract } from "./utilities/near-utils";

function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    window.nearInitPromise = initContract()
      .then(async () => {
        setLoader(false);
      })
      .catch(console.error);
  }, []);
  return (
    <>
      {loader ? (
        <div>Loading </div>
      ) : (
        
      )}
    </>
  );
}

export default App;
