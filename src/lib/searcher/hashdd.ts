import { SearchableType, Searcher } from "../types";
import { buildURL } from "../url_builder";

export class Hashdd implements Searcher {
  public baseURL: string;
  public name: string;
  public supportedTypes: SearchableType[] = ["ip", "domain", "hash"];

  public constructor() {
    this.baseURL = "https://hashdd.com";
    this.name = "Hashdd";
  }

  public searchByIP(query: string): string {
    return this.search(query);
  }

  public searchByDomain(query: string): string {
    return this.search(query);
  }

  public searchByHash(query: string): string {
    return this.search(query);
  }

  private search(query: string): string {
    return buildURL(this.baseURL, `/i/${query}`);
  }
}
