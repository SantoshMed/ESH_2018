import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CountryService } from './Services/country.service';
import { ViewModeService } from './Services/view-service';
import { AppErrorHandler } from './custom/app-error-handler';
import { SigninComponent } from './signin/signin.component';
import { ForgotComponent } from './forgot/forgot.component';
import { CustomValidations } from './custom/custom-validation';
import { NotFoundComponent } from './not-found/not-found.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { AgendaComponent } from './agenda/agenda.component';
import { LivewebcastComponent } from './livewebcast/livewebcast.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { AuthGuard } from './Services/auth-guard.service';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { NewTabDirective } from './new-tab.directive';
import { FooterSubComponent } from './footer-sub/footer-sub.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    SigninComponent,
    ForgotComponent,
    NotFoundComponent,
    SpeakersComponent,
    AgendaComponent,
    LivewebcastComponent,
    NavbarComponent,
    FooterComponent,
    ResetPasswordComponent,
    PrivacyComponent,
    TermsComponent,
    NewTabDirective,
    FooterSubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    CountryService,
    ViewModeService,
    AuthGuard,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
