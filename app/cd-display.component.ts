import { Component } from 'angular2/core';
import { CD } from './cd.model';

@Component({
  selector: 'cd-display',
  inputs: ['cd'],
  template: `
  <div>
    <span>Name: {{cd.name}}</span>
    <span>Artist: {{cd.artist}}</span>
    <span>Genre: {{cd.genre}}</span>
    <span>Price: {{cd.price}}</span>
    <span>Quantity: {{cd.quantity}}</span>
  </div>
  `
})

export class DisplayCdComponent {
  public cd: CD;
}
