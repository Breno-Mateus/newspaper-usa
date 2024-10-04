import { source } from "./source";

export interface Article {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    source: source;
}