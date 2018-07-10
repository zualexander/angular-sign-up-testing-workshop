import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import {MatListModule} from '@angular/material';
import {UserFacadeService} from './services/user-facade.service';
import { IncrementerComponent } from './components/incrementer/incrementer.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatListModule
  ],
  declarations: [UsersComponent, IncrementerComponent],
  providers: [UserFacadeService]
})
export class UsersModule { }
