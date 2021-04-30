import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Song } from 'src/app/interfaces/song';
import { SearchMusicService } from 'src/app/services/search-music.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  text = '';
  //Icons
  userIcon = faUser;
  constructor(public _searchMusicService: SearchMusicService) { }

  ngOnInit(): void {
  }

  //Realizar request al escribir
  onKeyUp(x: any) {
    this.text = x.target.value;
    this._searchMusicService.getResults(this.text).subscribe(data => {
      this._searchMusicService.listResults = data.data;
      console.log(this._searchMusicService.listResults);
    }, error => {
      console.log(error);
    });
  }
}
