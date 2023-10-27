import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared components/header/header.component';
import { CartComponent } from './pages/cart/cart.component';
import { Error404Component } from './pages/error404/error404.component';
import { HomeProductCardComponent } from './shared components/home-product-card/home.product-card.component';
import { ShoppingCartService } from './services/shopping-cart/shopping-cart.service';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HomeProductCardComponent,
    CartComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatGridListModule,
    MatExpansionModule,
    MatToolbarModule,
    MatTableModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule,
    MatSnackBarModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
