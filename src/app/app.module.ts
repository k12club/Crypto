import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SlidebarComponent } from './layout/slidebar/slidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { RegisterComponent } from './page/register/register.component';
import { ForgotComponent } from './page/forgot/forgot.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { AccountComponent } from './page/account/account.component';
import { PoolComponent } from './page/pool/pool.component';

//  Route
import { routes } from './app-rout';
// AngularFire Config
import { AngularFireModule } from 'angularfire2';
// for AngularFireAuth
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
// for AngularFireDatabase

// Toast
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { TestComponent } from './page/test/test.component';
import { MarketApiService } from './service/market-api.service';
import { DataProfileService } from './service/data-profile.service';
import { CoinTableComponent } from './page/coin-table/coin-table.component';
import { HeaderComponent } from './layout/header/header.component';
import { SiteSearchComponent } from './layout/site-search/site-search.component';
import { HashComponent } from './page/hash/hash.component';
import { LodingComponent } from './layout/loding/loding.component';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { HashService } from './service/hash.service';
import { LoginComponent } from './page/login/login.component';
import { MiningComponent } from './layout/mining/mining.component';
import { WhattomineComponent } from './page/whattomine/whattomine.component';
import { Test2Component } from './page/test2/test2.component';
import { WhattomineService } from './service/whattomine.service';
import { Test3Component } from './page/test3/test3.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SlidebarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    DashboardComponent,
    AccountComponent,
    PoolComponent,
    TestComponent,
    CoinTableComponent,
    HeaderComponent,
    SiteSearchComponent,
    HashComponent,
    LodingComponent,
    MiningComponent,
    WhattomineComponent,
    Test2Component,
    Test3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDFDjA8TazU8H1zOjG-virmtpYOVrdTJDk",
      authDomain: "test-palm.firebaseapp.com",
      databaseURL: "https://test-palm.firebaseio.com",
      projectId: "test-palm",
      storageBucket: "test-palm.appspot.com",
      messagingSenderId: "54624292466"
    }),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ToastModule.forRoot(),
  ],
  providers: [
    MarketApiService,
    DataProfileService,
    HashService,
    WhattomineService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
