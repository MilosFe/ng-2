import { Component, OnInit, Input } from '@angular/core';
import { GithubSearchService } from './github-search.service';
import { User }from "./user";

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.scss']
})
export class GithubSearchComponent implements OnInit {
   log = {item:"Milos"};
   data = [];
   username:any;

  constructor(private gitService: GithubSearchService) { }

  getName(username: User): void{
    this.data = [];
     this.gitService.getUser(username).then(data=>{ this.data.push(data) ;} );
  }
  ngOnInit() {
  }

}
