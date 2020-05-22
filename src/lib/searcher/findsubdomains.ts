import { SearchableType, Searcher } from "../types";
import { buildURL } from "../url_builder";

export class FindSubDomains implements Searcher {
  public baseURL: string;
  public name: string;
  public supportedTypes: SearchableType[] = ["domain"];

  public constructor() {
    this.baseURL = "https://findsubdomains.com";
    this.name = "FindSubDomains";
  }

  public searchByDomain(query: string): string {
    return buildURL(this.baseURL, `/subdomains-of/${query}`);
  }
}
