import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CounterButtonsComponent } from '../counter/counter-buttons/counter-buttons.component';
import { CounterComponent } from '../counter/counter/counter.component';
import { CoutnerViewComponent } from '../counter/coutner-view/coutner-view.component';
import { CustomCounterComponent } from '../counter/custom-counter/custom-counter.component';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { Appreducer } from './state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { AuthEffects } from './auth/state/auth.effect';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, HeaderComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // StoreModule.forRoot({  counterReduc: counterReducer, postsReducer: postReduc }, {}),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([AuthEffects]),
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
