import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Proposal } from './proposal';
import { ProposalService } from './proposal.service';

@Component({
  moduleId: module.id,
  selector: 'proposal-show',
  templateUrl: 'proposal-show.component.html',
  styleUrls: ['proposal-show.component.css'],
  providers: [ ProposalService ]
})
export class ProposalShowComponent implements OnInit {

  @Input()
  proposal: Proposal;
  
  // Dependency injection, when a ProposalShowComponent is created
  // an ActivatedRoute object gets created along with it.
  constructor(
    private route: ActivatedRoute,
    private proposalService: ProposalService,
    private http: Http
  ) {}

  ngOnInit(): void {
    let proposalRequest = this.route.params
        .flatMap((params: Params) => 
          this.proposalService.getProposal(+params['id']));
    proposalRequest.subscribe(response => this.proposal = response.json() )
  }
}