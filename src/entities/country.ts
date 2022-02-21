export type CountryName = {
  common: string;
  official: string;
};

export type Country = {
  name: CountryName;
  translatedName: CountryName;
  nativeNames: Array<CountryName>;
  flagUrl: string;
  popDensity: number;
};
