import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateDrivenPageComponent } from './pages/template-driven-page/template-driven-page.component';
import { ReactivePageComponent } from './pages/reactive-page/reactive-page.component';
import {Route, RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Route[] = [
  {path: '', component: TemplateDrivenPageComponent},
  {path: 'reactive', component: ReactivePageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenPageComponent,
    ReactivePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
