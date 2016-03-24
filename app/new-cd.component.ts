import {Component, EventEmitter} from 'angular2/core';
import {CD} from './cd.model';

@Component({
  selector: 'new-cd',
  outputs: ['onSubmitNewCD'],
  template: `
    <div class="cd-form">
      <h3>Add a new CD:</h3>
      <input placeholder="Name" class="col-sm-8 input-lg" #newName>
      <input placeholder="Artist" class="col-sm-8 input-lg" #newArtist>
      <input placeholder="Genre" class="col-sm-8 input-lg" #newGenre>
      <input placeholder="Price" class="col-sm-8 input-lg" #newPrice>
      <button (click)="addCD(newName, newArtist, newGenre, newPrice)" class="btn-success btn-lg add-button">Add</button>
    </div>
  `
})

export class NewCdComponent {
  public onSubmitNewCD: EventEmitter<CD>;
  constructor() {
    this.onSubmitNewCD = new EventEmitter();
  }
  addCD(newName: HTMLInputElement, newArtist: HTMLInputElement, newGenre: HTMLInputElement, newPrice: HTMLInputElement) {
    var newCD: CD = new CD(newName.value, newArtist.value, newGenre.value, parseInt(newPrice.value), -1);
    this.onSubmitNewCD.emit(newCD);
    newName.value = '';
    newArtist.value = '';
    newGenre.value = '';
    newPrice.value = '';
  }
}
