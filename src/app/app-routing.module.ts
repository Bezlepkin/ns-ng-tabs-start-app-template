import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import {
  TabsComponent,
  HomeComponent,
  CatalogComponent,
  FavoritesComponent,
  SettingsComponent
} from './screens/tabs';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/(homeRouterOutlet:home//catalogRouterOutlet:catalog//favoritesRouterOutlet:favorites//settingsRouterOutlet:settings)',
    pathMatch: 'full'
  },
  {
    path: 'home', component: TabsComponent, children: [
      { path: 'home', component: HomeComponent, outlet: 'homeRouterOutlet' },
      { path: 'catalog', component: CatalogComponent, outlet: 'catalogRouterOutlet' },
      { path: 'favorites', component: FavoritesComponent, outlet: 'favoritesRouterOutlet' },
      { path: 'settings', component: SettingsComponent, outlet: 'settingsRouterOutlet' },
      // it can be as lazy load...
      // { path: 'users', outlet: 'usersRouterOutlet', loadChildren: () => import('@app/modules/user/user.module').then(m => m.UserModule)}
    ]
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule { }
