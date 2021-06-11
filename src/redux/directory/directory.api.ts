import axios, { AxiosResponse } from "axios";
import { Directory } from "./directory.interface";

export type TDirectory = Directory[];

export async function fetchDirectories(): Promise<AxiosResponse<TDirectory>> {
  return axios({
    url: "/category",
  });
}
