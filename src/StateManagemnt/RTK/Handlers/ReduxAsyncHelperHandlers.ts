export interface I_ReduxAsyncBasicType {
  isPending: boolean;
  isDone: boolean;
  isError: boolean;
}

export interface I_PaginationResponse {
  count: number;
  page: number;
  size: number;
  maxPages: number;
}

export function setIsPending<T extends object & I_ReduxAsyncBasicType>(
  data: T
): T {
  data.isPending = true;
  data.isDone = false;
  data.isError = false;
  return data;
}

export function setIsDone<T extends object & I_ReduxAsyncBasicType>(
  data: T
): T {
  data.isPending = false;
  data.isDone = true;
  data.isError = false;
  return data;
}

export function setIsError<T extends object & I_ReduxAsyncBasicType>(
  data: T
): T {
  data.isPending = false;
  data.isDone = false;
  data.isError = true;
  return data;
}
