import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SpotifyAppService {

  constructor(private http: Http) {
  }

  searchByTrack(query: string) {
    let params: string = [
      `q=${query}`,
      `type=artist`
    ].join("&");

    let queryUrl = `https://api.spotify.com/v1/search?${params}`;
    return this.http.get(queryUrl).map(res => res.json());
  }

}
