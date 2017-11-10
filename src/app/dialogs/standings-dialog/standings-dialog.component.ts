import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-standings-dialog',
  templateUrl: './standings-dialog.component.html',
  styleUrls: ['./standings-dialog.component.css']
})
// tslint:disable-next-line:component-class-suffix
export class StandingsComponentDialog {
  constructor( @Inject(MAT_DIALOG_DATA) public data: any) {
    // console.log(data);
  }
}
