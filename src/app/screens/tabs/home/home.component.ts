import { Component, OnInit } from '@angular/core';
import { EventData, Frame, isIOS, Page, SearchBar } from '@nativescript/core';

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private page: Page) {}

  ngOnInit(): void {
    this.page.statusBarStyle;
  }

  onActionBarLoaded(args: EventData): void {
    if (isIOS) {
      const navigationBar = Frame.topmost().ios.controller.navigationBar;
      navigationBar.barStyle = UIBarStyle.Black;

      const navigationController = this.page.frame.ios
        .controller as UINavigationController;
      navigationController.navigationBar.prefersLargeTitles = true;

      const searchController =
        UISearchController.alloc().initWithSearchResultsController(null);
      // searchController.searchBar.placeholder = 'Поиск';

      const controller = navigationController.topViewController;
      controller.navigationItem.searchController = searchController;
      // controller.navigationItem.hidesSearchBarWhenScrolling = false;
    }
  }
}
