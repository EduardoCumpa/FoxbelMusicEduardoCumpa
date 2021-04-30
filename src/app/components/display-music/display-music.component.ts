import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/interfaces/song';
import { SearchMusicService } from 'src/app/services/search-music.service';

@Component({
  selector: 'app-display-music',
  templateUrl: './display-music.component.html',
  styleUrls: ['./display-music.component.css']
})
export class DisplayMusicComponent implements OnInit {

  scrolling: boolean = false;
  constructor(public _searchMusicService: SearchMusicService) { }

  ngOnInit(): void {
  }

  //Transfiere la información de la canción al servicio
  onSendSong(song: Song) {
    this._searchMusicService.infoSong = song;
    this.onPlay();
  }

  //Función que activa/pausa la reproducción del audio
  onPlay() {
    this._searchMusicService.isPlayingAudio = true;
    this._searchMusicService.reproducir.src = this._searchMusicService.infoSong?.preview!;
    this._searchMusicService.reproducir.play();
  }

}
