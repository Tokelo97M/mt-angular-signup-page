import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { AuthGuard } from './gaurd/auth.guard';

const routes: Routes = [
  {path:'', component:HomeComponent, canActivate:[AuthGuard] },
  {path:'registration', component:RegistrationComponent },
  {path:'login', component:LoginComponent },
  {path:'user', component:UserlistingComponent, canActivate:[AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
