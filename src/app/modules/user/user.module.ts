import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './screens/users/users.component';

@NgModule({
  declarations: [UsersComponent],
  imports: [UserRoutingModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class UserModule { }
