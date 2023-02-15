import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DataAnalysisComponent } from './components/data-analysis/data-analysis.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ElencoMacchineComponent } from './components/elenco-macchine/elenco-macchine.component';
import { MacchinaComponent } from './components/macchina/macchina.component';
import { HomeComponent } from './components/home/home.component';
import { DettaglioMacchinaComponent } from './components/dettaglio-macchina/dettaglio-macchina.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    DataAnalysisComponent,
    NotFoundComponent,
    ElencoMacchineComponent,
    MacchinaComponent,
    HomeComponent,
    DettaglioMacchinaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
