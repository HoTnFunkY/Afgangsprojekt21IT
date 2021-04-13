import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HomepageComponent} from './homepage/homepage.component';
import { UserpageComponent } from './userpage/userpage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';

const routes: Routes = [
  {path:'login', component:LoginpageComponent},
  {path:'home', component: HomepageComponent},
  {path: 'user', component: UserpageComponent},
  {path: 'register', component: RegisterpageComponent},
  {path:'', redirectTo:'login', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
