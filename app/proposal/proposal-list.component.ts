import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.css']
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(
    12, 'Abc Company', 'http://portfolio.geraldhernandez.com', 'Ruby on Rails',
    150, 120, 15, 'gerald@example.com');
  proposalTwo: Proposal = new Proposal(
    17, 'Cool Company', 'http://portfolio.geraldhernandez.com', 'Ruby on Rails',
    150, 120, 15, 'gerald@example.com');
  proposalThree: Proposal = new Proposal(
    20, 'Company x', 'http://portfolio.geraldhernandez.com', 'Ruby on Rails',
    150, 120, 15, 'gerald@example.com');

  proposals: Proposal[] = [ 
    this.proposalOne, 
    this.proposalTwo,
    this.proposalThree,
  ];
}