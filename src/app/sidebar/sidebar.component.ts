import { Component, OnInit } from '@angular/core';
import * as NBA from '../../../node_modules/nba/index.js';

import { Matches } from '../matches';

const todayDate = new Date().toISOString().slice(0, 10).replace(/-/g, '/');

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor() { }
  matches: Matches;
  index: number[];
  tenElements: number[];
  fourElements: number[];
  isActive = false;
  showMenu = '';
  eventCalled() {
    this.isActive = !this.isActive;
  }
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    const gamePromise = NBA.stats.scoreboard({ gameDate: todayDate, DayOffset: '-1' })
      .then(games => {
        this.matches = new Matches();
        this.matches.HomeAbbreviation = games.lastMeeting.map(e => e.lastGameHomeTeamAbbreviation);
        this.matches.HomePoints = games.lineScore.filter(HomeFilter).map(e => e.pts);
        this.matches.VisitorAbbreviation = games.lastMeeting.map(e => e.lastGameVisitorTeamCity1);
        this.matches.VisitorPoints = games.lineScore.filter(VisitorFilter).map(e => e.pts);
        this.matches.status = games.gameHeader.map(e => e.gameStatusText);
        this.matches.livePcTime = games.gameHeader.map(e => e.livePcTime);
        this.matches.HomeQts = games.lineScore.filter(HomeFilter).map(e => [e.ptsQtr1, e.ptsQtr2, e.ptsQtr3, e.ptsQtr4]);
        this.matches.VisitorQts = games.lineScore.filter(VisitorFilter).map(e => [e.ptsQtr1, e.ptsQtr2, e.ptsQtr3, e.ptsQtr4]);
        this.matches.HomeOts = games.lineScore.filter(HomeFilter).map(e => {
          const t = [];
          for (let i = 1; i <= 10; i++) {
            t.push(e['ptsOt' + i]);
          }
          return t;
        });
        this.matches.VisitorOts = games.lineScore.filter(VisitorFilter).map(e => {
          const t = [];
          for (let i = 1; i <= 10; i++) {
            t.push(e['ptsOt' + i]);
          }
          return t;
        });

        this.index = this.matches.status.map((e, i) => i);
        this.tenElements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.fourElements = this.tenElements.slice(0, 4);
        // console.log(games);
      });
  }
}

const HomeFilter = (e, i) => i % 2 !== 0;
const VisitorFilter = (e, i) => i % 2 === 0;
