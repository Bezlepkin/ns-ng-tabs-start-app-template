import { Component, OnInit } from '@angular/core';
import { Page } from '@nativescript/core';

@Component({
  selector: 'ns-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  constructor(private page: Page) {}

  ngOnInit(): void {
    this.page.actionBarHidden = true;
  }
}
