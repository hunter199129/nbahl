import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import{HeaderComponent} from './header/header.component';
import { TeamSelectorComponent } from './team-selector/team-selector.component';
import { ChannelSelectorComponent } from './channel-selector/channel-selector.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { StandingsComponent } from './standings/standings.component';
import { StandingsComponentDialog } from './dialogs/standings-dialog/standings-dialog.component';
import { StandingsTableComponent } from './dialogs/standings-dialog/standings-table/standings-table.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContentComponent,
    HeaderComponent,
    TeamSelectorComponent,
    ChannelSelectorComponent,
    YoutubePlayerComponent,
    StandingsComponent,
    StandingsComponentDialog,
    StandingsTableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
   


  ],
  entryComponents: [StandingsComponentDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
