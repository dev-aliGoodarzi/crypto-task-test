// React
import React from "react";
// React

// CSS
import styles from "./CryptoCard.module.css";
// CSS

// Models
import { I_CryptoBlock } from "../../Models/Crypto/CryptoInterfaces";
// Models

type T_CryptoCardProps = {
  data: I_CryptoBlock;
  isEven: boolean;
};

const CryptoCard: React.FunctionComponent<T_CryptoCardProps> = ({
  data: { blockNumber, contractAddress },
  isEven,
}) => {
  return (
    <div
      className={`${
        styles.cryptoCardContainer
      } w-full flex items-center justify-between  px-4  py-2 ${
        isEven && "bg-purple-500 text-white"
      }`}
    >
      <p className="w-[49%] text-left truncate">address : {contractAddress}</p>|
      <p className="w-[49%] text-right truncate">blockNumber : {blockNumber}</p>
    </div>
  );
};

export default CryptoCard;
