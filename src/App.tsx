// React
import React, { useCallback } from "react";
// React

// Redux
import {
  useReduxDispatch,
  useReduxSelector,
} from "./StateManagemnt/RTK/Store/store";
import { getAsyncCryptoList } from "./StateManagemnt/RTK/Slices/CryptoSlice/CryptoSlice";
// Redux

// Components
import PendingAndErrorManager from "./Components/PendingAndErrorManager/PendingAndErrorManager";
// Components

// Hooks
import { useDebounce } from "./Hooks/Optimization/useDebounce";
import CryptoCard from "./Components/CryptoCard/CryptoCard";
// Hooks

const App = () => {
  const dispatch = useReduxDispatch();
  const { data, isDone, isError, isPending } = useReduxSelector(
    (state) => state.crypto.allCryptoDates
  );

  const dataGetter = useCallback(() => {
    dispatch(
      getAsyncCryptoList({
        module: "contract",
        action: "getcontractcreation",
        apiKey: "5DPV55YBPCQKAF2CW2SE86R9SWXTVR8GKP",
        contractaddresses:
          "0xB83c27805aAcA5C7082eB45C868d955Cf04C337F,0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45,0xe4462eb568E2DFbb5b0cA2D3DbB1A35C9Aa98aad,0xdAC17F958D2ee523a2206206994597C13D831ec7,0xf5b969064b91869fBF676ecAbcCd1c5563F591d0",
      })
    );
  }, [dispatch]);

  useDebounce(1000, dataGetter);

  return (
    <div className="w-full h-screen flex items-center justify-start flex-col">
      <PendingAndErrorManager
        isDone={isDone}
        isError={isError}
        isPending={isPending}
        onError={dataGetter}
        showAfterDone={
          <div className="w-full h-full  flex flex-col items-center justify-start gap-y-2 ">
            {data.map((item, index) => (
              <CryptoCard
                key={item.blockNumber}
                data={item}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        }
      />
    </div>
  );
};

export default App;
