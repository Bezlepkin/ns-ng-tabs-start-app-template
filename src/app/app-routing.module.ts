import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import {
  WelcomeComponent
} from './screens';

const routes: Routes = [
  { path: '', redirectTo: '/tabs', pathMatch: 'full' },
  {
    path: 'welcome', component: WelcomeComponent
  },
  {
    path: 'tabs',
    loadChildren: () => import('~/app/modules/tabs/tabs.module').then(m => m.TabsModule),
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes, { enableTracing: false })],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule { }
