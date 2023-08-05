import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { VerifyComponent } from './verify/verify.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule, 
    AuthRoutingModule
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    VerifyComponent,
    RecoveryComponent,
    RegisterComponent,
  ],
})
export class AuthModule {}
