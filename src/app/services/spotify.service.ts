import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service llamado');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQD11ZVeH61ZnEkUQzHBY3qXj-CZSuuhQC3bSYXZp8vhO_NzjxgsyFEqG5FTPHRMn4rWzAml_YIvzh9kmqc'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(map(data => data['albums'].items));

  }

  getArtistas(termino: string) {

    return this.getQuery(`search?q=${termino}&type=track%2Cartist`).pipe(map(data => data['artists'].items));
  }

  getArtista(id: string) {

    return this.getQuery(`artists/${id}`);//.pipe(map(data => data['artists'].items));
  }

  getTopTracks(id: string) {

    return this.getQuery(`artists/${id}/top-tracks?country=US`).pipe(map(data => data['tracks']));
  }
}
