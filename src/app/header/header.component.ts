import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  url = 'https://docs.google.com/spreadsheets/d/1ciuaaaKk7RpvVnu8csK_i3kv2EVHxG_YSGNcI7WZHDs';

  constructor() { }

  ngOnInit() {

  }
}
