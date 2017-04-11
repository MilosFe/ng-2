import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { User } from './user';
import 'rxjs/add/operator/toPromise';




@Injectable()
export class GithubSearchService {
  user: User[];
  url:string = "https://api.github.com/users/"

  constructor(private http: Http) { }

  getUser(singleUser:User):Promise<Response>{
    return this.http.get(this.url + singleUser)
        .toPromise()
        .then((res: Response)=> { return res.json() });
  }

}



