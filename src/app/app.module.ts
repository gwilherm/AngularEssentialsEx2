import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartComponentComponent } from './cart-component/cart-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CartComponentComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
