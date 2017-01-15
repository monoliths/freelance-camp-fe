import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = 'Document Dashboard';
  
  documents: Document[] = [
    {
      title: 'My First Doc',
      description: 'Bacon ipsum dolor amet',
      file_url: 'http://google.com',
      image_url: 'http://google.com',
      updated_at: '1/14/2017',
    },
    {
      title: 'My Second Doc',
      description: 'Bacon ipsum dolor amet',
      file_url: 'http://google.com',
      image_url: 'http://google.com',
      updated_at: '1/14/2017',
    },
    {
      title: 'My Third Doc',
      description: 'Bacon ipsum dolor amet',
      file_url: 'http://google.com',
      image_url: 'http://google.com',
      updated_at: '1/14/2017',
    }
  ];
}