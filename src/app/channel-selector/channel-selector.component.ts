import { Component, OnInit, forwardRef } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { GoogleSheetService } from './google-sheet.service';

@Component({
  selector: 'app-channel-selector',
  templateUrl: './channel-selector.component.html',
  styleUrls: ['./channel-selector.component.css'],
  providers: [
    GoogleSheetService,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChannelSelectorComponent),
      multi: true
    }]
})
export class ChannelSelectorComponent implements OnInit, ControlValueAccessor {

  constructor(private googleSheetService: GoogleSheetService) { }
  key: string;
  channels: any[];
  selelctedChannel: any;

  ngOnInit() {
    this.key = '1ciuaaaKk7RpvVnu8csK_i3kv2EVHxG_YSGNcI7WZHDs';
    this.googleSheetService.load(this.key)
      .then(channels => this.channels = channels);
  }

  writeValue(channel: any) {
    if (channel !== undefined) {
      this.selelctedChannel = channel;
    }
  }
  registerOnChange(fn) { this.propagateChange = fn; }
  registerOnTouched() { }

  propagateChange = (_: any) => { };

  selectChange(event) {
    this.propagateChange(event.value);
  }
}
