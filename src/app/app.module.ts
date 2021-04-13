import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { UserpageComponent } from './userpage/userpage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterpageComponent } from './registerpage/registerpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginpageComponent,
    UserpageComponent,
    AdminpageComponent,
    RegisterpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
