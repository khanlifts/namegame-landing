import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NamegameMoreInfoComponent } from './namegame-more-info-page/namegame-more-info.component';
import { LandingParentComponentComponent } from './landing-parent-component/landing-parent-component.component';

const routes: Routes = [
  { path: '', component: LandingParentComponentComponent },
  { path: 'more-info', component: NamegameMoreInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
