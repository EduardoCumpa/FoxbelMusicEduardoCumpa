import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayMusicComponent } from './display-music/display-music.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AlbumInfoComponent } from './album-info/album-info.component';



@NgModule({
  declarations: [
    DisplayMusicComponent,
    NavMenuComponent,
    MusicPlayerComponent,
    SearchBarComponent,
    AlbumInfoComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  exports:[
    DisplayMusicComponent,
    NavMenuComponent,
    MusicPlayerComponent,
    SearchBarComponent,
    AlbumInfoComponent
  ]
})
export class ComponentsModule { }
