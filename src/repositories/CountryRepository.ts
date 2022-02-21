/* eslint-disable class-methods-use-this */
import axios from "axios";
import { Country } from "../entities/country";
import { CountryResponse, ToCountry } from "./mappings/ToCountry";
import { IRetrieveWithParameter } from "./Repository.interfaces";

export type CountryParams = {
  name: string;
  translateTo: string;
};

export default class CountryRepository
  implements IRetrieveWithParameter<CountryParams, Array<Country>>
{
  async retrieve(params: CountryParams): Promise<Array<Country>> {
    const endpoint = `https://restcountries.com/v3.1/region/${params.name}`;
    const res = await axios.get<Array<CountryResponse>>(endpoint);
    return ToCountry(res.data, params.translateTo);
  }
}
