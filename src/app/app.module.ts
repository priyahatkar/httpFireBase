import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostDashbordComponent } from './shared/components/post-dashbord/post-dashbord.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PostComponent } from './shared/components/post/post.component';
import { PostFormComponent } from './shared/components/post-form/post-form.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    PostDashbordComponent,
    NavbarComponent,
    PostComponent,
    PostFormComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
