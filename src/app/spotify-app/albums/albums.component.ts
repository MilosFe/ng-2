import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SpotifyAppService } from '../spotify-app.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
  providers: [SpotifyAppService]
})
export class AlbumsComponent implements OnInit {
   id: string;
   res: Object;

  constructor(private spotify: SpotifyAppService,
                      route: ActivatedRoute,
                      location: Location)
  {
    route.params.subscribe(params =>{this.id = params['id']});
  }

  ngOnInit():void {
      this.spotify.
          getAlbums(this.id)
          .subscribe((res:any) => this.renderAlbums(res));
  }

  renderAlbums(result):void{
    this.res = result.items;
    console.log(result);
  }

}
