import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';
import { AppRoutingModule } from './app-routing.module';
import { NativeScriptMaterialBottomNavigationModule } from "@nativescript-community/ui-material-bottom-navigation/angular";
import { NativeScriptMaterialTabsModule } from "@nativescript-community/ui-material-tabs/angular";
import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptMaterialBottomNavigationModule,
    NativeScriptMaterialTabsModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
