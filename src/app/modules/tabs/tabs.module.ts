import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule, NSEmptyOutletComponent } from '@nativescript/angular';
import {
  TabsComponent
} from './screens/tabs';


@NgModule({
  declarations: [TabsComponent],
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild([
      {
        path: '', component: TabsComponent, children: [
          {
            path: 'discovery',
            outlet: 'discoveryTab',
            component: NSEmptyOutletComponent,
            loadChildren: () => import('~/app/modules/discovery/discovery.module').then(m => m.DiscoveryModule),
          },
          {
            path: 'library',
            outlet: 'libraryTab',
            component: NSEmptyOutletComponent,
            loadChildren: () => import('~/app/modules/library/library.module').then(m => m.LibraryModule),
          },
          {
            path: 'favorites',
            outlet: 'favoritesTab',
            component: NSEmptyOutletComponent,
            loadChildren: () => import('~/app/modules/favorites/favorites.module').then(m => m.FavoritesModule),
          },
          {
            path: 'settings',
            outlet: 'settingsTab',
            component: NSEmptyOutletComponent,
            loadChildren: () => import('~/app/modules/settings/settings.module').then(m => m.SettingsModule),
          },
        ]
      }
    ])
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class TabsModule { }
