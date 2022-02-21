/* eslint-disable class-methods-use-this */
import { IRetrieveAll, IRetrieveWithParameter } from "./Repository.interfaces";
import CountryRepository, { CountryParams } from "./CountryRepository";
import { Country } from "../entities/country";
import RegionRepository from "./RegionRepository";
import TestCountryRepository from "./testRespositories/TestCountryRepository";

class RepositoryFactory {
  useFakeAPI = process.env.REACT_APP_PUBLIC_REPO_MODE === "fake";

  getCountryRepo(): IRetrieveWithParameter<CountryParams, Country[]> {

    if (this.useFakeAPI) return new TestCountryRepository();
    return new CountryRepository();
  }

  getRegionRepo(): IRetrieveAll<string> {
    return new RegionRepository();
  }
}

export default new RepositoryFactory();
