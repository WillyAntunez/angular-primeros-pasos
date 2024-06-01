
import {  Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-add-character',
  styleUrl: './add-character.component.css',
  templateUrl: './add-character.component.html'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter : EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };


  public emitCharacter ():void {
    if(this.character.name.length === 0 ) return;

    this.onNewCharacter.emit({...this.character});

    this.character = {name: '', power: 0};
  };


}
