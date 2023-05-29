import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ServiceWorkerModule } from '@angular/service-worker';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsEffects, ROOT_REDUCER } from './state';
import { EffectsModule } from '@ngrx/effects';
import { NavBarComponent } from '@shared/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
    StoreModule.forRoot(ROOT_REDUCER),
    StoreDevtoolsModule.instrument({ name: 'TEST', maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([ItemsEffects]),
    NavBarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
