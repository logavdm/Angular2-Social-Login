import { Injectable } from '@angular/core';
import {Router } from '@angular/router';
import { User } from './../DataModels/user.datamodel';


@Injectable()
export class AuthendicateService{

constructor(private router:Router){}


isLogged():boolean{
	
	if(localStorage.getItem('currentUser')===null)
	return false;
	else
	return true;
}


Login(user:User){
	
	if(user.email !="logavdm@gmail.com" && user.password !="123456"){

	return false;

	}else{

	localStorage.setItem('currentUser',JSON.stringify(user));
	return true;
	}
	
}

logout(){
	

	localStorage.removeItem('currentUser');
	this.router.navigate(['login']);

}

	

}