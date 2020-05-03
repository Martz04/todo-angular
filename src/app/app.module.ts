import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosContainerComponent } from './todos-container/todos-container.component';
import { TodosItemComponent } from './todos-item/todos-item.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoServiceInjectables } from './todos.service';

@NgModule({
  declarations: [
    AppComponent,
    TodosContainerComponent,
    TodosItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TodoServiceInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
