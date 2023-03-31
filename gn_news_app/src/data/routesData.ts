export type RouteData = {
  id: number;
  country: string;
  value?: string;
  route: string;
  countryCode: string;
};

export const getCountryCode = (countryName: string): string => {
  const countries: { [key: string]: string } = {
    UnitedStates: "us",
    Canada: "ca",
    Mexico: "mx",
    Brazil: "br",
    UnitedKingdom: "gb",
    Germany: "de",
    France: "fr",
    Italy: "it",
    China: "cn",
    Japan: "jp",
    Poland: "pl",
  };
  return countries[countryName] || "";
};

export const routesData: RouteData[] = [
  {
    id: 0,
    country: "United States",
    route: "country/UnitedStates",
    countryCode: "us",
  },
  {
    id: 1,
    country: "Canada",
    route: "country/Canada",
    countryCode: "ca",
  },
  {
    id: 2,
    country: "Mexico",
    route: "country/Mexico",
    countryCode: "mx",
  },
  {
    id: 3,
    country: "Brazil",
    route: "country/Brazil",
    countryCode: "br",
  },
  {
    id: 4,
    country: "United Kingdom",
    route: "country/UnitedKingdom",
    countryCode: "gb",
  },
  {
    id: 5,
    country: "Germany",
    route: "country/Germany",
    countryCode: "de",
  },
  {
    id: 6,
    country: "France",
    route: "country/France",
    countryCode: "fr",
  },
  {
    id: 7,
    country: "Italy",
    route: "country/Italy",
    countryCode: "it",
  },
  {
    id: 8,
    country: "China",
    route: "country/China",
    countryCode: "cn",
  },
  {
    id: 9,
    country: "Japan",
    route: "country/Japan",
    countryCode: "jp",
  },
];
