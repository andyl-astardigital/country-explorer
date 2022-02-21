/* eslint-disable class-methods-use-this */

import { Country } from "../../entities/country";
import { IRetrieveWithParameter } from "../Repository.interfaces";

export type CountryParams = {
  name: string;
  translateTo: string;
};

export default class TestCountryRepository
  implements IRetrieveWithParameter<CountryParams, Array<Country>>
{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async retrieve(_params: CountryParams): Promise<Array<Country>> {
    // eslint-disable-next-line no-console
    return Promise.resolve([
      {
        name: {
          common: "commonA",
          official: "officialA",
        },
        translatedName: {
          common: "translated commonA",
          official: "translated officialA",
        },
        nativeNames: [
          {
            common: "native commonA",
            official: "native officialA",
          },
        ],
        flagUrl: "",
        popDensity: 1,
      },
      {
        name: {
          common: "commonB",
          official: "officialB",
        },
        translatedName: {
          common: "translated commonB",
          official: "translated officialB",
        },
        nativeNames: [
          {
            common: "native commonB",
            official: "native officialB",
          },
        ],
        flagUrl: "",
        popDensity: 2,
      },
      {
        name: {
          common: "commonC",
          official: "officialC",
        },
        translatedName: {
          common: "translated commonC",
          official: "translated officialC",
        },
        nativeNames: [
          {
            common: "native commonC",
            official: "native officialC",
          },
        ],
        flagUrl: "",
        popDensity: 3,
      },
    ]);
  }
}
