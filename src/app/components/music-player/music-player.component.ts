import { Component, Input, OnInit } from '@angular/core';
import { faPause, faPlay, faStepBackward, faStepForward, faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { SearchMusicService } from 'src/app/services/search-music.service';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent implements OnInit {
  //Icons
  playIcon = faPlay;
  pauseIcon = faPause;
  stepBackwardIcon = faStepBackward;
  stepForwardIcon = faStepForward;
  volumeUpIcon = faVolumeUp;
  volumeMuteIcon = faVolumeMute;
  constructor(public _searchMusicService: SearchMusicService) {
  }

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
