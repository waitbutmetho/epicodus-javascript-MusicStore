import { Component, EventEmitter } from 'angular2/core';
import { CD } from './cd.model';

@Component({
  selector: 'edit-cd',
  inputs: ['cd'],
  template: `
  <div class="cd-form">
    <h3>Edit CD:</h3>
    <input value="{{ cd.name }}" class="col-sm-8 input-lg" #newName>
    <input value="{{ cd.artist}}" class="col-sm-8 input-lg" #newArtist>
    <input value="{{ cd.genre }}" class="col-sm-8 input-lg" #newGenre>
    <input value="{{ cd.price }}" class="col-sm-8 input-lg" #newPrice>
    <button (click)="editCD(newName, newArtist, newGenre, newPrice)" class="btn-success btn-lg add-button">Edit</button>
  </div>
  `
})

export class EditCdComponent {
  public cd: CD;
  public onSubmitEditCD: EventEmitter<CD>;
  constructor(){
    this.onSubmitEditCD = new EventEmitter();
  }
  editCD(newName: HTMLInputElement, newArtist: HTMLInputElement, newGenre: HTMLInputElement, newPrice: HTMLInputElement){
    this.cd.name = newName.value;
    this.cd.artist = newArtist.value;
    this.cd.genre = newGenre.value;
    this.cd.price = parseInt(newPrice.value);
  }
}
