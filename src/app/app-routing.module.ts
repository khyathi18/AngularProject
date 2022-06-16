import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {FormsComponent} from './forms/forms.component';
import {ThankyouComponent} from './thankyou/thankyou.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'forms',component:FormsComponent, children : [ {  path : 'thankyou', component : ThankyouComponent}]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
