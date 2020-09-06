import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  {path:"",redirectTo: "home", pathMatch:'full'},
  {path:"login", component: LoginComponent},
  {path:"contactus", component: ContactusComponent},
  {path:"aboutus", component: AboutusComponent},
  {path:"home", component: HomeComponent},
  {path: "menu", component:MenuComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
