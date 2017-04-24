import { Component } from '@angular/core';
import { AuthendicateService } from './../Service/authendicate.service';
import { User } from './../DataModels/user.datamodel';
import {Router } from '@angular/router';
import { AuthService } from "angular2-social-login";
import { Angular2SocialLoginModule } from "angular2-social-login";






@Component({
  templateUrl: './../view/login.view.html',
  providers:[AuthendicateService]
})
export class LoginComponent { 

private user=new User('','');

constructor(private auth:AuthendicateService, private router:Router,private auth1:AuthService){
	
	
	
}






signIn(provider){
   this.auth1.login(provider).subscribe(
      (data) => {
                 console.log(data);
                }
    )
  }


 




}