import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule, MatInputModule} from '@angular/material';
import {SignUpFacadeService} from './services/sign-up-facade.service';

@NgModule({
  imports: [
    CommonModule,
    SignUpRoutingModule,
    SharedModule,
    MatInputModule,
    MatCheckboxModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  providers: [SignUpFacadeService],
  declarations: [SignUpComponent]
})
export class SignUpModule { }
