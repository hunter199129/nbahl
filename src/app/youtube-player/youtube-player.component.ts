import { Component, OnChanges, Input, SimpleChange } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnChanges {

  url: any;
  @Input() vid = 'wzrnuUOoFNM';
  baseUrl = 'https://www.youtube.com/embed/';

  constructor(private sanitizer: DomSanitizer) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.vid);
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    // this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.vid);
    if (changes.vid.currentValue !== undefined) {
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + changes.vid.currentValue);
    }
    // console.log(changes.vid.currentValue);
  }

}
