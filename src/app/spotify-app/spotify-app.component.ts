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

     this.spotifyService.searchByArtists(query)
       .subscribe((res:any) => {
       this.artist = res.artists.items;
       console.log(res);
       });
  };
  ngOnInit() {
    this.spotifyService.searchByArtists("aerosmith")
      .subscribe( (res:any) => {
        this.artist = res.artists.items;
        console.log(res);
      });
  }

}
