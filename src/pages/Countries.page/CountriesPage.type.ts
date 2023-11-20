export interface NameVersion {
  official: string;
  common: string;
}

export interface CountryName {
  common: string;
  official: string;
  nativeName: { [key: string]: NameVersion };
}

export interface CountriesList {
  name: CountryName;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: Boolean;
  status: string;
  unMember: Boolean;
  currencies: { [key: string]: { name: string; symbol: string } };
  idd: { root: string; suffixes: string[] };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: { [key: string]: string };
  translations: { [key: string]: NameVersion };
  latlng: number[];
  landlocked: Boolean;
  borders?: string[];
  area: number;
  demonyms: { eng: { f: string; m: string }; fra: { f: string; m: string } };
  flag: string;
  maps: { googleMaps: string; openStreetMaps: string };
  population: number;
  fifa: string;
  car: { signs: string[]; side: string };
  timezones: string[];
  continents: string[];
  flags: { png: string; svg: string; alt: string };
  coatOfArms: { png: string; svg: string };
  startOfWeek: string;
  capitalInfo: { latlng: number[] };
  postalCode: { format: string; regex: string };
}
