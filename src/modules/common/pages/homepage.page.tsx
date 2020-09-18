import React from "react";
import { QueryStatus, useQuery } from "react-query";

import API_QUERIES from "../../../api/react-query.keys";
import CountriesService from "../../../api/services/countries.service";

/**
 * The Homepage
 */
const HomePage = () => {
  const { data: countries, status, error } = useQuery(
    API_QUERIES.PLANETS,
    CountriesService.fetchCountries
  );

  return (
    <div>
      <h1>This is the homepage</h1>
      {status === QueryStatus.Success && (
        <div>
          {countries.Country.map((country: any) => (
            <div>
              {country.name} : {country.capital}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
