import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Document } from './document';

@Injectable()
export class DocumentService {
  private docuemntsUrl = 'http://localhost:3002/freelance_documents.json';

  constructor(
    private http: Http
  ) {}

  //this returns an Observable of an array of docs
  getDocuments(): Observable<Document[]> {
    // remmeber http is injected on construction
    return this.http.get(this.docuemntsUrl)
                    .map((response: Response) => <Document[]>response.json())
                    .catch(this.handleError)
  }

  // In a real world app, we might use a remote logging infrastructure IE Splunk.
  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}