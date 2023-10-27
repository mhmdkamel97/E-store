import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { Error404Component } from './pages/error404/error404.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'home' , component:HomeComponent},
  {path:'cart' , component:CartComponent},
  {path:'**' , component:Error404Component},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
