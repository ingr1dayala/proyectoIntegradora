import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-almuerzos',
  templateUrl: './almuerzos.page.html',
  styleUrls: ['./almuerzos.page.scss'],
})
export class AlmuerzosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cards = [
    {
      title: 'Card 1',
      subtitle: 'Subtitle 1',
      description: 'Description for Card 1',
      image: 'https://example.com/image1.jpg',
    },
    {
      title: 'Card 2',
      subtitle: 'Subtitle 2',
      description: 'Description for Card 2',
      image: 'https://example.com/image1.jpg',
    },
    {
      title: 'Card 3',
      subtitle: 'Subtitle 3',
      description: 'Description for Card 3',
      image: 'https://example.com/image1.jpg',
    },
    
  ];
}
