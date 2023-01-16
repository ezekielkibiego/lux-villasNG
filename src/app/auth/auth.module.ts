import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule} from 'angularx-social-login';
import { AppComponent } from '../app.component';


@NgModule({
  declarations: [
    AuthComponent,
    SignupComponent,
    LoginComponent,
   
  ],
  imports: [
    CommonModule,
    // SharedModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SocialLoginModule
  ],
  providers: [
  
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '535807003840-he7rmt8pr8h715dpr04rr978rkiaqt7g.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]

  
})
export class AuthModule { }
