// Axios
import { AxiosResponse } from "axios";
import { _axiosV1 } from "../../__init__/_axiosV1/_axiosV1";
// Axios

// Models
import {
  T_SendingDataForGettingCryptoBlocks,
  T_WithAPIKey,
} from "../../../Models/__SendingData__/Crypto/SendingDataForCryptos";
import { I_CryptoBlock } from "../../../Models/Crypto/CryptoInterfaces";
// Models

export const getAllCryptoBlocksService = (
  _data: T_WithAPIKey<T_SendingDataForGettingCryptoBlocks>
): Promise<
  AxiosResponse<{
    result: I_CryptoBlock[];
  }>
> => {
  return _axiosV1.get(
    `/?chainid=1&module=${_data.module}&action=${_data.action}&contractaddresses=${_data.contractaddresses}&apikey=${_data.apiKey}`
  );
};
