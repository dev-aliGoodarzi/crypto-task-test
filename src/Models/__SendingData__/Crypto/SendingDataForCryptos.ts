export type T_SendingDataForGettingCryptoBlocks = {
  module: string;
  action: string;
  contractaddresses: string;
};

export type T_WithAPIKey<T extends object> = T & {
  apiKey: string;
};
