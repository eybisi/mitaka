import { buildURL } from "../url_builder";
import { Searcher, SearchableType } from "../types";

export class DomainWatch implements Searcher {
  public endpoint: string;
  public name: string;
  public supportedTypes: SearchableType[] = ["domain", "email"];

  public constructor() {
    this.endpoint = "https://domainwat.ch";
    this.name = "DomainWatch";
  }

  public searchByDomain(query: string): string {
    return buildURL(this.endpoint, `/whois/${query}`);
  }

  public searchByEmail(query: string): string {
    return buildURL(this.endpoint, "/search", { query });
  }
}
