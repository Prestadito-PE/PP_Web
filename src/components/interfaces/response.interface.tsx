export interface Response<T> {
    item: T | null;
    items: T[] | null;
    totalItems: number | null;
    error: boolean;
    errorMessage: string | null;
  }