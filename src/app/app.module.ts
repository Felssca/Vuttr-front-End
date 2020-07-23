import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule, FormGroup} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VuttrComponent } from './vuttr/vuttr.component';
import { VuttrTopComponent } from './vuttr.top/vuttr.top.component';
import { VuttrService } from './vuttr.services/vuttr.service';
import { VuttrSaveToolsComponent } from './vuttr-save-tools/vuttr-save-tools.component';


@NgModule({
  declarations: [
    AppComponent,
    VuttrComponent,
    VuttrTopComponent,
    VuttrSaveToolsComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [VuttrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
