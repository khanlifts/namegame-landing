import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NamegameHeaderComponent } from './namegame-header/namegame-header.component';
import { NamegameMainPageComponent } from './namegame-main-page/namegame-main-page.component';
import { NamegameTitleComponent } from './namegame-title/namegame-title.component';
import { NamegameCardsComponent } from './namegame-cards/namegame-cards.component';
import { NamegameCardContainerComponent } from './namegame-card-container/namegame-card-container.component';
import { NamegameCardTriviaComponent } from './namegame-card-trivia/namegame-card-trivia.component';
import { NamegameCoworkersPageComponent } from './namegame-coworkers-page/namegame-coworkers-page.component';
import { NamegameTriviaPageComponent } from './namegame-trivia-page/namegame-trivia-page.component';
import { NamegameFooterComponent } from './namegame-footer/namegame-footer.component';
import { NamegameMoreInfoComponent } from './namegame-more-info-page/namegame-more-info.component';
import { LandingParentComponentComponent } from './landing-parent-component/landing-parent-component.component';
import { NamegameFormComponent } from './namegame-form/namegame-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NamegameHeaderComponent,
    NamegameMainPageComponent,
    NamegameTitleComponent,
    NamegameCardsComponent,
    NamegameCardContainerComponent,
    NamegameCardTriviaComponent,
    NamegameCoworkersPageComponent,
    NamegameTriviaPageComponent,
    NamegameFooterComponent,
    NamegameMoreInfoComponent,
    LandingParentComponentComponent,
    NamegameFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
