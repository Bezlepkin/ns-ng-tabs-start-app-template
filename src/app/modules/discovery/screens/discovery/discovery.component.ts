import { Component, OnInit } from '@angular/core';
import { Color, EventData, Frame, isIOS, Page } from '@nativescript/core';

@Component({
  selector: 'ns-discovery',
  templateUrl: './discovery.component.html',
  styleUrls: ['./discovery.component.scss']
})
export class DiscoveryComponent implements OnInit {

  constructor(
    private page: Page
  ) { }

  ngOnInit(): void {
    // this.page.statusBarStyle;
    this.page.androidStatusBarBackground = new Color('#090919');
  }

  onActionBarLoaded(args: EventData): void {
    if (isIOS) {
      const navigationBar = Frame.topmost().ios.controller.navigationBar;
      navigationBar.barStyle = UIBarStyle.Black;

      //const navigationController = this.page.frame.ios.controller as UINavigationController;
      //navigationController.navigationBar.prefersLargeTitles = true;

      // const searchController = UISearchController.alloc().initWithSearchResultsController(null);
      // searchController.searchBar.placeholder = 'Поиск';

      // const controller = navigationController.topViewController;
      // controller.navigationItem.searchController = searchController;
      // controller.navigationItem.hidesSearchBarWhenScrolling = false;
    }
  }
}
