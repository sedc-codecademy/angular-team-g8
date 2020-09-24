import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RegisterComponent } from './components/register/register.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { UsersReducer } from './store/reducers/users.reducer';
import { environment } from 'src/environments/environment';
import { ProductsReducer } from './store/reducers/products.reducer';
import { ProductsEffect } from './store/effects/products.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    LandingPageComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      users: UsersReducer,
      products: ProductsReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: ! environment.production 
    }),
    EffectsModule.forRoot([ProductsEffect])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
