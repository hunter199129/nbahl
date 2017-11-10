import { Component, Input, OnChanges } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

import { TeamStandings } from './team-standings';

@Component({
  selector: 'app-standings-table',
  templateUrl: './standings-table.component.html',
  styleUrls: ['./standings-table.component.css']
})
export class StandingsTableComponent implements OnChanges {
  @Input() data: TeamStandings[];
  displayedColumns = ['index', 'team', 'w', 'l', 'homeRecord', 'roadRecord', 'wPct'];
  dataSource: StandingsDataSource | null;

  constructor() { }

  ngOnChanges(changes) {
    if (changes['data']) {
      this.dataSource = new StandingsDataSource(this.data);
      console.log(this.dataSource);
    }
  }
}

export class StandingsDataSource extends DataSource<any> {
  constructor(private data: any) {
    super();
  }

  connect(): Observable<any[]> {
    return Observable.of(this.data.map((team: TeamStandings, index: number) => {
      return {
        index,
        team: team.team,
        w: team.w,
        l: team.l,
        homeRecord: team.homeRecord,
        roadRecord: team.roadRecord,
        wPct: team.wPct,
      };
    }));
  }

  disconnect() { }
}
