import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import{HttpClientModule} from '@angular/common/http'
import { LoadingSpinnerComponent } from './Shared/loading-spinner/loading-spinner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { BioComponent } from './profile/bio/bio.component';
import { ProfileComponent } from './profile/profile.component';
import { ModalComponent } from './modal/modal.component';
import { BioEditComponent } from './profile/bio/bio-edit/bio-edit.component';
import { PizzaSpinnerComponent } from './Shared/pizza-spinner/pizza-spinner.component';
import { PostsComponent } from './posts/posts.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    HeaderComponent,
    ProfileComponent,
    BioComponent,
    ModalComponent,
    BioEditComponent,
    PizzaSpinnerComponent,
    PostsComponent,
    PostEditComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
