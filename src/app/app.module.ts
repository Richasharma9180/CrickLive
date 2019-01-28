import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { InningComponent } from './admin/inning/inning.component';
import { TeamsComponent } from './admin/teams/teams.component';
import { PlayerComponent } from './admin/teams/player/player.component';
import { HeaderComponent } from './header/header.component';
import { NewMatchComponent } from './admin/newmatch/newmatch.component';
import { ComentaryComponent } from './match/comentary/comentary.component';
import { ScorecardComponent } from './match/scorecard/scorecard.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    InningComponent,
    TeamsComponent,
    PlayerComponent,
    HeaderComponent,
    NewMatchComponent,
    ComentaryComponent,
    ScorecardComponent,
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }