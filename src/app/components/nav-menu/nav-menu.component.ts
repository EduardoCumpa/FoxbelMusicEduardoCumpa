import { Component, OnInit } from '@angular/core';
import { SearchMusicService } from 'src/app/services/search-music.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor(public _searchMusicService: SearchMusicService) { }

  ngOnInit(): void {
  }

}
