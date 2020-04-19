import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { DialogComponent } from './dialog/dialog.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FactScrollerComponent } from './fact-scroller/fact-scroller.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientOneComponent } from './specific-fact-scroller/client-1/client-1.component';
import { ShellFactComponent } from './specific-fact-scroller/shell-fact/shell-fact.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    FactScrollerComponent,
    ClientOneComponent,
    ShellFactComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    RouterModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    MaterialModule ,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
