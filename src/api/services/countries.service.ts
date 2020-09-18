import { request, gql } from "graphql-request";

export default class CountryService {
  static graphqlEndpoint: string = process.env.REACT_APP_GRAPHQL_API_URL ?? "";

  /**
   * FETCH TODOS FROM THE GRAPHQL API
   */
  static async fetchCountries(): Promise<any> {
    const data = await request(
      CountryService.graphqlEndpoint,
      gql`
        query {
          Country {
            name
            capital
            population
          }
        }
      `
    );

    return data;
  }
}
