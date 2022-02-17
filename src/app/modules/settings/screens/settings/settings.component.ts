import { Component, OnInit } from '@angular/core';
import { EventData, Frame, isIOS } from '@nativescript/core';

@Component({
  selector: 'ns-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

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
