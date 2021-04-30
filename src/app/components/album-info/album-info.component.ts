import { Component, OnInit } from '@angular/core';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { SearchMusicService } from 'src/app/services/search-music.service';

@Component({
  selector: 'app-album-info',
  templateUrl: './album-info.component.html',
  styleUrls: ['./album-info.component.css']
})
export class AlbumInfoComponent implements OnInit {
  playIcon = faPlay;
  pauseIcon = faPause;
  constructor(public _searchMusicService: SearchMusicService) { }

  ngOnInit(): void {
  }

  //Función que activa/pausa la reproducción del audio
  onPlayPause() {
    if (this._searchMusicService.infoSong?.preview! != null) {
      if (!this._searchMusicService.isPlayingAudio) {
        this._searchMusicService.reproducir.play();
        this._searchMusicService.isPlayingAudio = true;
      } else {
        this._searchMusicService.reproducir.pause();
        this._searchMusicService.isPlayingAudio = false;
      }
    } else {
      alert("Selecciona una canción");
    }

  }

}
