import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { UpperCapitalPipe } from './hello/upper-capital.pipe';
import { FormsModule } from '@angular/forms';
import { GreetingsService } from './greetings-service';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    UpperCapitalPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [GreetingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
