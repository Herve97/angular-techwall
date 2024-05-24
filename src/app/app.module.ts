import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { FilsComponent } from './fils/fils.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { ListCVComponent } from './cvTech/list-cv/list-cv.component';
import { ItemCVComponent } from './cvTech/item-cv/item-cv.component';
import { DetailCVComponent } from './cvTech/detail-cv/detail-cv.component';
import { StyleComponent } from './directive/style/style.component';
import { ClassComponent } from './directive/class/class.component';
import { HighlightDirective } from './directive/highlight.directive';
import { RainbowDirective } from './directive/rainbow.directive';
import { DefaultImagePipe } from './cvTech/default-image.pipe';
import { EmbaucheComponent } from './cvTech/embauche/embauche.component';
import { ROUTING } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { AddCvComponent } from './cvTech/add-cv/add-cv.component';
import { ErrorComponent } from './cvTech/error/error.component';
import { LoginComponent } from './login/login.component';
import { ObservableComponent } from './observable/observable.component';
import { loginInterceptorProvider } from './interceptors/login.interceptor';
import { LoginGuard } from './guard/login.guard';
import { UpdateCvComponent } from './cvTech/update-cv/update-cv.component';
import { SearchComponent } from './cvTech/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    FilsComponent,
    CvComponent,
    ListCVComponent,
    ItemCVComponent,
    DetailCVComponent,
    StyleComponent,
    ClassComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultImagePipe,
    EmbaucheComponent,
    HeaderComponent,
    RouterSimulatorComponent,
    DetailComponent,
    AddCvComponent,
    ErrorComponent,
    LoginComponent,
    ObservableComponent,
    UpdateCvComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,
    ROUTING,
  ],
  providers: [loginInterceptorProvider, LoginGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
