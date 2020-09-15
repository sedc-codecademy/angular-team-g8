import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { Router } from "@angular/router";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { LoginComponent } from "./components/login/login.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private router: Router) {}
}
