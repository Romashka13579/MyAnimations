import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FourCardsComponent } from './four-cards/four-cards.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FourSquaresToScreenComponent } from './four-squares-to-screen/four-squares-to-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    FourCardsComponent,
    FourSquaresToScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
