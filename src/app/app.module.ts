import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './componenets/forms/forms.component';
import { HeaderComponent } from './componenets/header/header.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';
import { LegendComponent } from './components/legend/legend.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    //todo component Angular tem que essta declaro em um module (até versao mais atuais que tem opcao de standlone components)
    AppComponent,
    HeaderComponent,
    FormsComponent,
    CardsListComponent,
    CardComponent,
    LegendComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule //async pipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
