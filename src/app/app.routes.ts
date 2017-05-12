import { GithubSearchComponent } from './github-search/github-search.component';
import { SpotifyAppComponent } from './spotify-app/spotify-app.component';
import { AlbumsComponent } from './spotify-app/albums/albums.component';

export const Routes = [
  {
    path: '',
    redirectTo: '/gsearch',
    pathMatch: 'full'
  },
  {
    path: 'gsearch',
    component: GithubSearchComponent
  },
  {
    path: 'spotify',
    component: SpotifyAppComponent
  },
  {
    path: 'spotify/albums/:id',
    component: AlbumsComponent
  }
]


