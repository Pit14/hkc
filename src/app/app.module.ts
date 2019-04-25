import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';


import { AppComponent } from './app.component';
import { NailComponent } from './nail/nail.component';
import { CharmComponent } from './charm/charm.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgSelectModule } from '@ng-select/ng-select';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NailComponent,
    CharmComponent,
    CalculatorComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgSelectModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
