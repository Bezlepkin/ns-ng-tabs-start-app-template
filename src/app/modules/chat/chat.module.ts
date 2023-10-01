import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { ChatRoutingModule } from './chat-routing.module';
import { LibraryComponent } from './screens';



@NgModule({
  declarations: [LibraryComponent],
  imports: [
    NativeScriptCommonModule,
    ChatRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ChatModule { }
