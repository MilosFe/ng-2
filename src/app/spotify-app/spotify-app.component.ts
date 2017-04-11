import { Component, OnInit } from '@angular/core';
import { SpotifyAppService } from './spotify-app.service';
import { Artist } from './artist.model';

@Component({
  selector: 'app-spotify-app',
  templateUrl: './spotify-app.component.html',
  styleUrls: ['./spotify-app.component.scss'],
  providers: [SpotifyAppService]
})
export class SpotifyAppComponent implements OnInit {
  searchStr: string;
  artist: Artist[];

  constructor(private spotifyService: SpotifyAppService) { }

  searchMusic(query: string):void{

     this.spotifyService.searchByTrack(query)
       .subscribe( res => {
       this.artist = res.artists.items;
       });
  };
  ngOnInit() {

  }

}
