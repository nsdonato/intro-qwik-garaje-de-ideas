export interface Country {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: Status;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: Region;
  subregion: string;
  languages: { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini?: { [key: string]: number };
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: Continent[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: StartOfWeek;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs?: string[];
  side: Side;
}

export enum Side {
  Left = "left",
  Right = "right"
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Continent {
  Africa = "Africa",
  Antarctica = "Antarctica",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America"
}

export interface Currencies {
  JOD?: TartuGecko;
  USD?: TartuGecko;
  RSD?: TartuGecko;
  EUR?: TartuGecko;
  BMD?: TartuGecko;
  BOB?: TartuGecko;
  LYD?: TartuGecko;
  XOF?: TartuGecko;
  AMD?: TartuGecko;
  MUR?: TartuGecko;
  MVR?: TartuGecko;
  MKD?: TartuGecko;
  ETB?: TartuGecko;
  DKK?: TartuGecko;
  IQD?: TartuGecko;
  GTQ?: TartuGecko;
  TTD?: TartuGecko;
  PEN?: TartuGecko;
  SRD?: TartuGecko;
  SEK?: TartuGecko;
  XPF?: TartuGecko;
  FKP?: TartuGecko;
  ZWL?: TartuGecko;
  SAR?: TartuGecko;
  AED?: TartuGecko;
  AFN?: TartuGecko;
  XAF?: TartuGecko;
  PAB?: TartuGecko;
  SYP?: TartuGecko;
  VUV?: TartuGecko;
  HNL?: TartuGecko;
  AUD?: TartuGecko;
  KID?: TartuGecko;
  CLP?: TartuGecko;
  XCD?: TartuGecko;
  MXN?: TartuGecko;
  CNY?: TartuGecko;
  SSP?: TartuGecko;
  SZL?: TartuGecko;
  ZAR?: TartuGecko;
  UZS?: TartuGecko;
  IDR?: TartuGecko;
  PYG?: TartuGecko;
  PLN?: TartuGecko;
  BAM?: BAM;
  CAD?: TartuGecko;
  BRL?: TartuGecko;
  MRU?: TartuGecko;
  ILS?: TartuGecko;
  ANG?: TartuGecko;
  BND?: TartuGecko;
  SGD?: TartuGecko;
  AOA?: TartuGecko;
  BYN?: TartuGecko;
  TRY?: TartuGecko;
  GIP?: TartuGecko;
  BTN?: TartuGecko;
  INR?: TartuGecko;
  VES?: TartuGecko;
  QAR?: TartuGecko;
  CZK?: TartuGecko;
  KWD?: TartuGecko;
  NZD?: TartuGecko;
  JMD?: TartuGecko;
  KYD?: TartuGecko;
  PKR?: TartuGecko;
  KZT?: TartuGecko;
  BHD?: TartuGecko;
  FJD?: TartuGecko;
  ISK?: TartuGecko;
  MMK?: TartuGecko;
  BDT?: TartuGecko;
  PHP?: TartuGecko;
  NPR?: TartuGecko;
  YER?: TartuGecko;
  KRW?: TartuGecko;
  OMR?: TartuGecko;
  ERN?: TartuGecko;
  IRR?: TartuGecko;
  TZS?: TartuGecko;
  SBD?: TartuGecko;
  KES?: TartuGecko;
  DOP?: TartuGecko;
  GBP?: TartuGecko;
  GGP?: TartuGecko;
  RWF?: TartuGecko;
  TVD?: TartuGecko;
  TWD?: TartuGecko;
  GYD?: TartuGecko;
  SCR?: TartuGecko;
  KPW?: TartuGecko;
  BWP?: TartuGecko;
  KHR?: TartuGecko;
  BBD?: TartuGecko;
  COP?: TartuGecko;
  UAH?: TartuGecko;
  NAD?: TartuGecko;
  TOP?: TartuGecko;
  ARS?: TartuGecko;
  CRC?: TartuGecko;
  GHS?: TartuGecko;
  SHP?: TartuGecko;
  EGP?: TartuGecko;
  CUC?: TartuGecko;
  CUP?: TartuGecko;
  HUF?: TartuGecko;
  BZD?: TartuGecko;
  BSD?: TartuGecko;
  AWG?: TartuGecko;
  STN?: TartuGecko;
  RUB?: TartuGecko;
  FOK?: TartuGecko;
  NIO?: TartuGecko;
  TND?: TartuGecko;
  CDF?: TartuGecko;
  NOK?: TartuGecko;
  SLL?: TartuGecko;
  LSL?: TartuGecko;
  DJF?: TartuGecko;
  LKR?: TartuGecko;
  WST?: TartuGecko;
  TMT?: TartuGecko;
  MDL?: TartuGecko;
  CHF?: TartuGecko;
  MWK?: TartuGecko;
  LBP?: TartuGecko;
  MNT?: TartuGecko;
  THB?: TartuGecko;
  NGN?: TartuGecko;
  CVE?: TartuGecko;
  JEP?: TartuGecko;
  DZD?: TartuGecko;
  LAK?: TartuGecko;
  AZN?: TartuGecko;
  MAD?: TartuGecko;
  BGN?: TartuGecko;
  BIF?: TartuGecko;
  UGX?: TartuGecko;
  MZN?: TartuGecko;
  GEL?: TartuGecko;
  RON?: TartuGecko;
  VND?: TartuGecko;
  JPY?: TartuGecko;
  LRD?: TartuGecko;
  HTG?: TartuGecko;
  PGK?: TartuGecko;
  HKD?: TartuGecko;
  KGS?: TartuGecko;
  MGA?: TartuGecko;
  GMD?: TartuGecko;
  MYR?: TartuGecko;
  SOS?: TartuGecko;
  MOP?: TartuGecko;
  ALL?: TartuGecko;
  ZMW?: TartuGecko;
  CKD?: TartuGecko;
  GNF?: TartuGecko;
  KMF?: TartuGecko;
  IMP?: TartuGecko;
  SDG?: BAM;
  TJS?: TartuGecko;
  UYU?: TartuGecko;
}

export interface TartuGecko {
  name: string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng: Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

export interface Idd {
  root?: string;
  suffixes?: string[];
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName?: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common: string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania"
}

export enum StartOfWeek {
  Monday = "monday",
  Saturday = "saturday",
  Sunday = "sunday"
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned"
}
