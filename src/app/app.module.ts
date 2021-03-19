import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MilestokmPipe } from './milestokm.pipe';
import { ConvertPipe } from './convert.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MilestokmPipe,
    ConvertPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
