import { Injectable } from "@angular/core";
import { Http, Headers, Response, RequestOptions } from '@angular/http'

import 'rxjs/Rx'

@Injectable()
export class httpService {

    constructor(private http: Http) {
    }

    //questions//
    getquestions() {
        return this.http.get('http://localhost:8080/ForumHttp/Questions');
    }
    getquestion(id: number) {
        return this.http.get('http://localhost:8080/ForumHttp/Questions/' + id);
    }



}
