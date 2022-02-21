/* eslint-disable class-methods-use-this */
import { IRetrieveAll } from "./Repository.interfaces";

export type CountryParams = {
  name: string;
  translateTo: string;
};

export default class RegionRepository implements IRetrieveAll<string> {
  // the API doesn't provide a list of regions so we hardcode them here
  retrieveAll(): Promise<string[]> {
    return Promise.resolve(["Africa", "Americas", "Asia", "Europe", "Oceania"]);
  }
}
