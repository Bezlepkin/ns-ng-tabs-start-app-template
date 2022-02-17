import { Component, OnInit } from '@angular/core';
import { EventData, Frame, isIOS } from '@nativescript/core';

@Component({
  selector: 'ns-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onActionBarLoaded(args: EventData): void {
    if (isIOS) {
      const navigationBar = Frame.topmost().ios.controller.navigationBar;
      navigationBar.barStyle = UIBarStyle.Black;
    }
  }
}
