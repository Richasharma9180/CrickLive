import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ScorecardComponent } from './match/scorecard/scorecard.component';
import { ComentaryComponent } from './match/comentary/comentary.component';
import { NewMatchComponent } from './admin/newmatch/newmatch.component';
import { TeamsComponent } from './admin/teams/teams.component';
import { InningComponent } from './admin/inning/inning.component';


const routes: Routes = [
  { path:'',redirectTo:'header',pathMatch:'full' },
  { 
    path:'admin',
    component:AdminComponent,
    children:[
      { path:'newmatch',component:NewMatchComponent },
      { path:'teams',component:TeamsComponent },
      { path:'inning',component:InningComponent}
    ]
     
  },

  { path:'scorecard',component:ScorecardComponent},
  
  { path:'comentary',component:ComentaryComponent}
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


