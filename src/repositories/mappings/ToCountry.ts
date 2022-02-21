import { Country } from "../../entities/country";

export interface Translation {
  official: string;
  common: string;
}
export interface Name {
  common: string;
  official: string;
  nativeName: Record<string, Translation>;
}
export interface CountryResponse {
  name: Name;
  population: number;
  translations: Record<string, Translation>;
  area: number;
  flags: { svg: string; png: string };
}

function iterateKeys(translations: Record<string, Translation>): Array<Name> {
  return Object.entries(translations).map(
    (obj) =>
      ({
        common: obj[1].common || "",
        official: obj[1].official || "",
      } as Name)
  );
}

export function ToCountry(
  reponse: Array<CountryResponse>,
  translateTo: string
): Array<Country> {
  return reponse.map(
    (x) =>
      ({
        name: {
          common: x.name.common || "",
          official: x.name.official || "",
        },
        translatedName: {
          common: x.translations[translateTo]
            ? x.translations[translateTo].common
            : "",
          official: x.translations[translateTo]
            ? x.translations[translateTo].official
            : "",
        },
        nativeNames: iterateKeys(x.name.nativeName),
        popDensity: x.population / x.area,
        flagUrl: x.flags.svg,
      } as Country)
  );
}
