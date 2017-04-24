import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Angular2SocialLoginModule, AuthService } from "angular2-social-login";

import { AppComponent }  from './app.component';
import { LoginComponent }   from './Components/login.component';
import { RegisterComponent }     from './Components/register.component';
import { ProfileComponent }     from './Components/profile.component';
import { PageNotFoundComponent } from './Components/not-found.component';
import { LoggedInGuard } from './Service/canActivate';



const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


let providers = {
    "google": {
      "clientId": "997653921331-ofp42lq90csu4jrs4255ulpds8818qtc.apps.googleusercontent.com"
    }
  };



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
    
  
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    PageNotFoundComponent
    

     ],

providers: [
    AuthService
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { 

 constructor() {
    Angular2SocialLoginModule.initWithProviders(providers);
  }

}


