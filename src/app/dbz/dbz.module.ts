import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MainPageComponent } from './pages/main-page.component';

import { AddCharacterComponent } from './components/add-character/add-character.component';
import { ListComponent } from './components/list/list.component';


@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
