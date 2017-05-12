import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
 * SpotifyService works querying the Spotify Web API
 * https://developer.spotify.com/web-api/
 */
@Injectable()
export class SpotifyAppService {
  static BASE_URL: string = 'https://api.spotify.com/v1';

  constructor(private http: Http) {
  }

  /* Form for query */

  query(URL: string, params?: Array<string>): Observable<any[]> {
    let queryURL: string = `${SpotifyAppService.BASE_URL}${URL}`;
    if (params) {
      queryURL = `${queryURL}?${params.join('&')}`;
    }
    return this.http.request(queryURL).map((res: any) => res.json());
  }

  /*Form for search */

  search(query: string, type: string): Observable<any> {
    return this.query(`/search`, [
      `q=${query}`,
      `type=${type}`

    ])
  }

  searchByArtists(query: string): Observable<any[]> {
    return this.search(query, 'artist');
  }

  getArtist(id: string): Observable<any[]> {
    return this.query(`/artists/${id}`);
  }
  getAlbums(id: string): Observable<any[]> {
    return this.query(`/artists/${id}/albums?album_type=album`);
  }




}













