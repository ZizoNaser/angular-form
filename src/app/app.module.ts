import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormDdComponent } from 'app/form-dd/form-dd.component';

import { StorageService } from './storage-service.service';
import { DisplayComponent } from './display/display.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    FormDdComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
