import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';

import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'implicit/callback', component: OktaCallbackComponent },
  { path: 'calculator', component: CalculatorComponent, canActivate: [OktaAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
