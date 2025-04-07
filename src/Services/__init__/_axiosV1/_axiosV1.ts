// Axios
import axios from "axios";
// Axios

// Constants
import { baseURL } from "./_axiosV1.constants";
// Constants

export const _axiosV1 = axios.create({
  baseURL,
  timeout: 10_000,
});
