import { Component, forwardRef, ViewChild, ElementRef } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { TeamSelectorServices } from './team-selector.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-team-selector',
  templateUrl: './team-selector.component.html',
  styleUrls: ['./team-selector.component.css'],
  providers: [
    TeamSelectorServices,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TeamSelectorComponent),
      multi: true
    }
  ]
})
export class TeamSelectorComponent implements ControlValueAccessor {

  teamCtrl: FormControl = new FormControl;
  filteredTeams: Observable<any[]>;
  @ViewChild('input') el: ElementRef;

  teams: any[];
  selectedTeamName: string;

  constructor(private teamSelectorServices: TeamSelectorServices) {
    this.teamSelectorServices.getTeamFromJSON()
      .subscribe(teams => {
        this.teams = teams;
        this.filteredTeams = this.teamCtrl.valueChanges
          .startWith(null)
          .map(team => team ? this.filterTeams(team) : this.teams.slice());
      });
  }

  filterTeams(teamAbbr: string) {
    return this.teams.filter(team =>
      team.abbreviation.toLowerCase().indexOf(teamAbbr.toLowerCase()) === 0);
  }

  writeValue(teamName: any) {
    if (teamName !== undefined) {
      this.selectedTeamName = teamName;
    }
  }
  registerOnChange(fn) { this.propagateChange = fn; }
  registerOnTouched() { }

  propagateChange = (_: any) => { };

  selectChange(event) {
    this.propagateChange(event.option.value);
  }

  clearInput(event) {
    event.stopPropagation();
    this.selectedTeamName = '';
    this.el.nativeElement.focus();
  }
}
