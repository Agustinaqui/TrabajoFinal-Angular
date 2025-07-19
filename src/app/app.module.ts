import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndAboutComponent } from './ind-about/ind-about.component';
import { IndCarritoComponent } from './ind-carrito/ind-carrito.component';
import { IndProductosComponent } from './ind-productos/ind-productos.component';
import { IndumentariaListComponent } from './indumentaria-list/indumentaria-list.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
@NgModule({
  declarations: [
    AppComponent,
    IndumentariaListComponent,
    IndAboutComponent,
    IndProductosComponent,
    IndCarritoComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
