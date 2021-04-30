import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../interfaces/song';

@Injectable({
  providedIn: 'root'
})
export class SearchMusicService {
  private endpointURL = '/search';
  public listResults: any | undefined;
  public infoSong: Song | undefined;
  public isPlayingAudio: boolean = false;
  public reproducir: HTMLAudioElement;
  public albumCover:string= '../../../assets/images/no_music.png';

  constructor(private http: HttpClient) {
    this.reproducir = new Audio();
  }

  //Obtiene la canciones con el parámetro
  getResults(q: string): Observable<any> {
    const params = new HttpParams()
      .set('q', q);
    return this.http.get(this.endpointURL, { params })
  }
}
