import { Component, OnInit } from '@angular/core';
import { EventData, Frame, isIOS } from '@nativescript/core';

@Component({
  selector: 'ns-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

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
