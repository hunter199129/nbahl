import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StandingsComponentDialog } from '../dialogs/standings-dialog/standings-dialog.component';

import * as NBA from '../../../node_modules/nba/index.js';

const todayDate = new Date().toISOString().slice(0, 10).replace(/-/g, '/');

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {
  east: string[];
  west: string[];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    NBA.stats.scoreboard({ gameDate: todayDate, DayOffset: '-1' })
      .then(games => {
        this.east = games.eastConfStandingsByDay;
        this.west = games.westConfStandingsByDay;
      });
  }

  openDialog() {
    this.dialog.open(StandingsComponentDialog, {
      data: {
        east: this.east,
        west: this.west,
      }
    });
  }

}
