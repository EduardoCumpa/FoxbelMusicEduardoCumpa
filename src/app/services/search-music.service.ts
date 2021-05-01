import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../interfaces/song';

@Injectable({
  providedIn: 'root'
})

export class SearchMusicService {
  private STATIC_URI = 'https://api.deezer.com'
  private endpointURI = '/search';
  private fullURL = '';
  public listResults: any | undefined;
  public infoSong: Song | undefined;
  public isPlayingAudio: boolean = false;
  isMute: boolean = false;
  public reproducir: HTMLAudioElement;
  public albumCover: string = 'assets/images/no_music100x100.png';
  public logo: string = 'assets/images/foxbel-music.png';

  isProd: boolean = true;

  constructor(private http: HttpClient) {
    this.reproducir = new Audio();

  }

  //Obtiene la canciones con el parámetro
  getResults(q: string): Observable<any> {
    if (this.isProd) {
      this.fullURL = this.STATIC_URI + this.endpointURI;
    } else {
      this.fullURL = this.endpointURI;
    }
    console.log("Llamando al endpoint: " + this.fullURL)
    const params = new HttpParams()
      .set('q', q);
    return this.http.get(this.fullURL, { params })
  }
}
