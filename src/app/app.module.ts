import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule} from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatTableModule} from '@angular/material/table';
import { MatDividerModule} from '@angular/material/divider';

import {OKTA_CONFIG,OktaAuthModule} from '@okta/okta-angular';

import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';

const oktaConfig = {
  issuer: 'https://dev-567942.okta.com/oauth2/default',
  clientId: '0oaza7ry9fgMygkkV4x6',
  redirectUri: window.location.origin + '/implicit/callback',
  pkce: true
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    AppRoutingModule,
    OktaAuthModule,
  ],
  providers: [{ provide: OKTA_CONFIG, useValue: oktaConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
