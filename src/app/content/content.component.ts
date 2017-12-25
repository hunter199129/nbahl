import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { YoutubeSearchService } from './youtube-search.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  providers: [YoutubeSearchService]
})
export class ContentComponent implements OnInit {
  form: FormGroup;
  results: any;
  videoId: string;

  constructor(
    private formBuilder: FormBuilder,
    private youtubeSearchService: YoutubeSearchService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      teamSelector: new FormControl(),
      channelSelector: new FormControl()
    });
  }

  submit(value) {
    this.youtubeSearchService.search(this.form.value.teamSelector, this.form.value.channelSelector)
      .subscribe(res => this.results = res);
  }

  changeVideo(videoId) {
    this.videoId = videoId;
  }
}
