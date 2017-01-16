import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
  pageTitle: string = 'Document Dashboard';
  
  documents: Document[] = [
    {
      title: 'My First Doc',
      description: 'Bacon ipsum dolor amet',
      file_url: 'http://google.com',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg/1280px-Mistakes-to-avoid-when-hiring-freelancers.jpg',
      updated_at: '1/14/2017',
    },
    {
      title: 'My Second Doc',
      description: 'Bacon ipsum dolor amet',
      file_url: 'http://google.com',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg/1280px-Mistakes-to-avoid-when-hiring-freelancers.jpg',
      updated_at: '1/14/2017',
    },
    {
      title: 'My Third Doc',
      description: 'Bacon ipsum dolor amet',
      file_url: 'http://google.com',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg/1280px-Mistakes-to-avoid-when-hiring-freelancers.jpg',
      updated_at: '1/14/2017',
    }
  ];
}