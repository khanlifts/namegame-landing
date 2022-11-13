import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NamegameHeaderComponent } from './namegame-header/namegame-header.component';
import { NamegameMainPageComponent } from './namegame-main-page/namegame-main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NamegameHeaderComponent,
    NamegameMainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
