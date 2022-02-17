import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';

import {
  DiscoveryComponent,
} from './screens';

@NgModule({
  declarations: [
    DiscoveryComponent
  ],
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule.forChild([
      { path: '', redirectTo: 'discovery', pathMatch: 'full', },
      { path: 'discovery', component: DiscoveryComponent, },
    ]),
  ],
  exports: [
    DiscoveryComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DiscoveryModule { }
