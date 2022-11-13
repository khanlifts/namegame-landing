import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NamegameHeaderComponent } from './namegame-header/namegame-header.component';
import { NamegameMainPageComponent } from './namegame-main-page/namegame-main-page.component';
import { NamegameTitleComponent } from './namegame-title/namegame-title.component';
import { NamegameCardsComponent } from './namegame-cards/namegame-cards.component';
import { NamegameCardComponent } from './namegame-card/namegame-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NamegameHeaderComponent,
    NamegameMainPageComponent,
    NamegameTitleComponent,
    NamegameCardsComponent,
    NamegameCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
