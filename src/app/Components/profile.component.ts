import { Component } from '@angular/core';
import {Router } from '@angular/router';
import { User } from './../DataModels/user.datamodel';
import { AuthendicateService } from './../Service/authendicate.service';
import { LoggedInGuard } from './../Service/canActivate';

@Component({
  templateUrl: './../view/profile.view.html',
  providers:[AuthendicateService,LoggedInGuard]
})
export class ProfileComponent { 

user:User;

constructor(private auth:AuthendicateService,private router:Router){
	
	if(!this.auth.isLogged()){

		console.log("User Not Logged in");
		this.router.navigate(['login']);

	}
	else{

		 this.user=JSON.parse(localStorage.getItem('currentUser'));

	}

}

logout(){
	
	this.auth.logout();


}


}