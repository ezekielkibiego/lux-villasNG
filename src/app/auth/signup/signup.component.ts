import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import {GoogleLoginProvider, SocialAuthService, SocialUser} from 'angularx-social-login';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  user: SocialUser | undefined;
  loggedIn: boolean | undefined;



  register:any;
 

  constructor(private userService: UserService, private router : Router, private authService: SocialAuthService) {}
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  
  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(user);
      this.loggedIn = (user != null);
    });
     this.register = {
        username: '',
        email: '',
        first_name: '',
        last_name: '',
        password: '',
        password2: '',
      }
  };

  registerUser(){
    this.userService.registerNewUser(this.register).subscribe(data =>{
      // alert('User ' + this.register.username + ' has been created!')
      this.router.navigate(['/country']);
    },
    error => console.log('error',error)
    )
  }

}
