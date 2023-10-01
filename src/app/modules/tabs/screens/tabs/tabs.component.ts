import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CoreTypes, Enums, GridLayout, isAndroid, LoadEventData, Page, Screen, View } from '@nativescript/core';
import { RouterExtensions } from '@nativescript/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ns-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  activeTabIndex = 0;
  indent = 0 ;// isAndroid ? 56 : 49;

  constructor(
    private page: Page,
    private routerExtension: RouterExtensions,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.page.actionBarHidden = true;
    this.routerExtension.navigate([{ outlets: { discoveryTab: ['discovery'], chatTab: ['chat'], settingsTab: ['settings'] } }], { relativeTo: this.activeRoute });
  }

  onTabTap(index: number): void {
    this.activeTabIndex = index;
  }
}
