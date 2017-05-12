import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { GithubSearchService } from './github-search/github-search.service';
import { NavbarComponent } from './navbar/navbar.component';

import { Routes } from "./app.routes";
import { SpotifyAppComponent } from './spotify-app/spotify-app.component';
import { AlbumsComponent } from './spotify-app/albums/albums.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubSearchComponent,
    NavbarComponent,
    SpotifyAppComponent,
    AlbumsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [GithubSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
