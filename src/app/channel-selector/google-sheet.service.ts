import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// https://docs.google.com/spreadsheets/d/1ciuaaaKk7RpvVnu8csK_i3kv2EVHxG_YSGNcI7WZHDs

@Injectable()
export class GoogleSheetService {
    data: any;

    constructor(public http: Http) { }

    load(id) {
        if (this.data) {
            // already loaded data
            return Promise.resolve(this.data);
        }

        // https://spreadsheets.google.com/feeds/list/1ciuaaaKk7RpvVnu8csK_i3kv2EVHxG_YSGNcI7WZHDs/od6/public/values?alt=json
        const url = 'https://spreadsheets.google.com/feeds/list/' + id + '/od6/public/values?alt=json';
        // don't have the data yet
        return new Promise(resolve => {
            // We're using Angular Http provider to request the data,
            // then on the response it'll map the JSON data to a parsed JS object.
            // Next we process the data and resolve the promise with the new data.
            this.http.get(url)
                .map(res => res.json())
                .subscribe(data => {
                    // console.log('Raw Data', data);
                    this.data = data.feed.entry;

                    const returnArray: Array<any> = [];
                    if (this.data && this.data.length > 0) {
                        this.data.forEach((entry, index) => {
                            const obj = {};
                            for (const x in entry) {
                                if (x.includes('gsx$') && entry[x].$t) {
                                    obj[x.split('$')[1]] = entry[x]['$t'];
                                    // console.log( x.split('$')[1] + ': ' + entry[x]['$t'] );
                                }
                            }
                            returnArray.push(obj);
                        });
                    }
                    resolve(returnArray);
                });
        });
    }
}
