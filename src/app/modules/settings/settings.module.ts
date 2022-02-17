import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './screens';



@NgModule({
  declarations: [SettingsComponent],
  imports: [
    NativeScriptCommonModule,
    SettingsRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SettingsModule { }
