import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

// TODO: Change to token with limitation before publish
const API_TOKEN = 'AIzaSyACneaZIArgKtcggp990jX87w2X8JRkq30';


@Injectable()
export class YoutubeSearchService {

    constructor(private http: Http) { }

    search(q: string, channelId: string) {
        return this.http.get(`${BASE_URL}?q=${q}&part=snippet&key=${API_TOKEN}&channelId=${channelId}&order=date`)
            .map((res: Response) => res.json())
            .map(json => json.items);
    }
}
