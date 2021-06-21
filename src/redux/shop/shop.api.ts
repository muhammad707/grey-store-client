import axios, { AxiosResponse } from "axios";
import { CollectionItem } from "./shop.interface";

export type TCollection = CollectionItem[];

export async function fetchCollections(): Promise<AxiosResponse<TCollection>> {
  return axios({
    url: "/product",
  });
}
