import { Component, OnInit } from '@angular/core';
import { Page } from '@nativescript/core';

@Component({
  selector: 'ns-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  activeTabIndex = 0;

  constructor(private page: Page) {}

  ngOnInit(): void {
    this.page.actionBarHidden = true;
  }

  onLoaded(): void {}
}
