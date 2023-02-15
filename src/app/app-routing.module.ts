import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DettaglioMacchinaComponent } from './components/dettaglio-macchina/dettaglio-macchina.component';
import { ElencoMacchineComponent } from './components/elenco-macchine/elenco-macchine.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'all', component:ElencoMacchineComponent},
  {path: 'detail/:id', component:DettaglioMacchinaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
