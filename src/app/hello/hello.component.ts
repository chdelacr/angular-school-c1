import { Component, Input, Output, EventEmitter } from "@angular/core";
import { LoggerService } from "../logger-service";
import { GreetingsService } from "../greetings-service";

@Component ({
    selector: 'custom-hello',
    templateUrl: './hello.component.html',
    styleUrls: ['./hello.component.css'],
    providers: [GreetingsService]
})

export class HelloComponent {
    @Input() name:string;
    @Output() sayHello:EventEmitter<string> = new EventEmitter<string>();

    public namesList:Array<string> = [];
    public inputName:string = '';

    constructor(
        private logger:LoggerService,
        private greetings:GreetingsService
    ){}

    onNameClick(){
        console.log('Counter in HelloComponent is: ', this.greetings.counter);
        this.sayHello.emit('Hello!')
    }

    addName(){
        this.namesList.push(this.inputName);
        this.inputName = '';
        this.logger.log(this.namesList);
    }
}