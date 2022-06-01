import { Component, OnInit } from '@angular/core';
import { Page } from '@nativescript/core';

@Component({
  selector: 'ns-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  constructor(private page: Page) {}

  ngOnInit(): void {
    this.page.actionBarHidden = true;
  }
}
