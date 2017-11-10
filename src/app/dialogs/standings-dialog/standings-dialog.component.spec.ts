import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingsDialogComponent } from './standings-dialog.component';

describe('StandingsDialogComponent', () => {
  let component: StandingsDialogComponent;
  let fixture: ComponentFixture<StandingsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandingsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
