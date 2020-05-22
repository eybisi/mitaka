import { SearchableType, Searcher } from "../types";
import { buildURL } from "../url_builder";

export class EmailRep implements Searcher {
  public baseURL: string;
  public name: string;
  public supportedTypes: SearchableType[] = ["email"];

  public constructor() {
    this.baseURL = "https://emailrep.io";
    this.name = "EmailRep";
  }

  public searchByEmail(query: string): string {
    return buildURL(this.baseURL, `/${query}`);
  }
}
