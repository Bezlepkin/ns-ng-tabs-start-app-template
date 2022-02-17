import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './screens';



@NgModule({
  declarations: [LibraryComponent],
  imports: [
    NativeScriptCommonModule,
    LibraryRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class LibraryModule { }
