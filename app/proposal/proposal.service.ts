import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Proposal } from './proposal'

@Injectable()
export class ProposalService {
  private proposalsUrl = 'http://localhost:3003/proposals.json'
  private proposalUrl = 'http://localhost:3003/proposals/${ id }.json'

  //Inject Http
  constructor(
    private http: Http
  ) {}

  // this returns an Observable of an array of proposals
  getProposals(): Observable<Proposal[]> {
    return this.http.get(this.proposalsUrl)
                    .map((response: Response) => <Proposal[]>response.json())
                    .catch(this.handleError)
  }

  getProposal(id: number) {
    return this.http.get('http://localhost:3003/proposals/' + id + '.json');
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


  createProposal(proposal: Proposal) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    // params: End point we will post to, json data this post request will take, request option headers
    return this.http.post(this.proposalsUrl, JSON.stringify(proposal), {headers: headers})
                    .map((res: Response) => res.json());
  }
}