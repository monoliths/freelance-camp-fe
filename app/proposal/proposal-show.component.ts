import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-show',
  templateUrl: 'proposal-show.component.html'
})
export class ProposalShowComponent implements OnInit {
  id: number;
  routeId: any;

  // Dependency injection, when a ProposalShowComponent is created
  // an ActivatedRoute object gets created along with it.
  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // We want to pull in the params by subscribing
    this.routeId = this.route.params.subscribe(
      params => {
        // params are pulled in as string, use the plus to convert to a number
        this.id = +params['id'];
      }
    )
  }
}