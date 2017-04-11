import { GithubSearchComponent } from './github-search/github-search.component';
import { SpotifyAppComponent } from './spotify-app/spotify-app.component';

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
]


