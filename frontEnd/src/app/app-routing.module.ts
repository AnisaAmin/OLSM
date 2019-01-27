import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from 'src/app/layout/main/main.component';
import { SignInComponent } from 'src/app/sign-in/sign-in.component';

const routes: Routes = [
  { path : '' , component : MainComponent},
  { path : 'sign-in' , component : SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
