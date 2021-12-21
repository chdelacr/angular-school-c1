import { Component } from '@angular/core';
import { LoggerService } from './logger-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myName:string = 'Christian';
  public titleStyles:{};
  public counter = 0;

  constructor(private logger:LoggerService){}

  onSayHello(message){
    this.logger.log(message);
    this.counter++;
    this.updateTitleStyles();
  }

  updateNameClasses(name:string){
    return {
      'error': name.length <= 3,
      'warning': name.length > 3 && name.length <= 6,
      'success': name.length > 6,
      'bold': name.length > 8
    }
  }

  updateTitleStyles(){
    this.titleStyles = {
      'margin-top': '40px',
      'color': this.counter < 3 ? 'green' : 'goldenrod'
    }
  }
}
